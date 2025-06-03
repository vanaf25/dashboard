import React, {useCallback, useMemo } from "react";
import Button from "@mui/material/Button";
import TableName from "@/app/components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRow, updateRowChanged, deleteRow } from "@/app/apis/tablesApi";
import getRowData from "@/app/utils/tables/getRowData";
import {Measurement} from "@/app/types/measurementsTypes";
import {ActionTableType, TableProperty, TablesPropertiesIntegrated} from "@/app/types/tablesTypes";
import {Box} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import TablePropertyFormCreator from "@/app/components/tables/TablePropertyFormCreator/TablePropertyFormCreator";

interface ActionTableProps {
    table: ActionTableType;
    properties:TableProperty[],
    setProperties:React.Dispatch<React.SetStateAction<TablesPropertiesIntegrated[]>>,
    onCellValueHandler?: () => void;
    queryKeys:string[]
    tableKey?:string,
    isClient?:boolean,
}

const ActionTable: React.FC<ActionTableProps> = ({ table, onCellValueHandler,
                                                     queryKeys,tableKey,isClient,properties,setProperties }) => {
    const updateGridDeleteHandle = (rowId: number) => {
        const gridApi = table?.ref?.current?.api;
        if (gridApi) {
            // Находим реальный node по ID
            const rowNode = gridApi.getRowNode(String(rowId));
            if (rowNode) {
                // Удаляем именно данные строки, а не новый объект
                gridApi.applyTransaction({ remove: [rowNode.data] });
            }
        }
    };
    const updateGridAddRowHandle=(serverData?:any)=>{
        const defaultRow=table.columns.reduce((obj, item) => {
            if(item.field){
                obj[item.field] = 0;
            }
            return obj;
        }, {} as Record<string,any>)
        console.log('serverData:',serverData);
        const data=serverData  || {...defaultRow,id:Math.random()}
        const gridApi = table?.ref?.current?.api;
        if (gridApi) {
            gridApi?.applyTransaction({
                add: [data],
            });
        }
    }
    const queryClient = useQueryClient();
    const updateRowMutation = useMutation({
        mutationFn: ({ id, rowData }: { id: string; rowData: any }) => updateRowChanged(id, rowData),
        onSuccess: (updatedRow, variables) => {
            const { id, rowData } = variables;
            queryClient.setQueryData(queryKeys, (oldData: Measurement) => {
                if (!oldData && !tableKey) return oldData;
                if(tableKey){
                    return {...oldData,tables:{
                            ...oldData.tables,
                            [tableKey]:oldData.tables[tableKey].map(table=>{
                                return {...table,rows:table?.rows?.map((row) => (row.id === id ? { ...row, ...rowData } : row)),
                                }
                            })
                        }}
                }
            });
        },
    });
    const { isPending, mutate: addRowMutate } = useMutation({
        mutationFn: addRow,
        onSuccess: (data, tableId) => {
            queryClient.setQueryData(queryKeys, (oldData:Measurement) => {
                if (!oldData && !tableKey) return oldData;
                else {
                    if(tableKey){
                        return {...oldData,tables:{
                            ...oldData.tables,
                            [tableKey]:oldData.tables[tableKey].map(table=>{
                                if(table.id===tableId){
                                    updateGridAddRowHandle(data)
                                    return { ...table, rows: [...(table?.rows ? table.rows:[]), data] };
                                }
                                return table
                            })
                            }}
/*
                        return oldData.map((table) => {
                            if (table.id === tableId) {
                                const gridApi = table?.ref?.current?.api;
                                if (gridApi) {
                                    gridApi?.applyTransaction({
                                        add: [data],
                                    });
                                }
                                return { ...table, rows: [...table.rows, data] };
                            }
                            return table;
                        });
*/
                    }
                }
            });
        },
    });
    const { mutate: deleteRowMutate } = useMutation({
        mutationFn: (rowId: number) => deleteRow(rowId),
        onSuccess: (_, rowId) => {
            queryClient.setQueryData(queryKeys, (oldData:Measurement) => {
                if (!oldData && !tableKey) return oldData;
                if(tableKey){
                    updateGridDeleteHandle(rowId);
                    return {...oldData,tables:{
                            ...oldData.tables,
                            [tableKey]:oldData.tables[tableKey].map(table=>{
                             return {...table,rows:table?.rows?.filter((row) => row.id !== rowId),
                            }
                            })
                        }}
                }
            });
        },
    });
    const [deletingRowId, setDeletingRowId] = React.useState<number | null>(null);
    const addRowHandle = (tableId: number) =>{
        if(isClient) updateGridAddRowHandle()
        else addRowMutate(tableId);
    };
    const deleteRowHandle = (rowId: number) => {
        if(!isClient){
            setDeletingRowId(rowId);
            deleteRowMutate(rowId, {
                onSettled: () => setDeletingRowId(null),
            });
        }
        else updateGridDeleteHandle(rowId)
    };
    const effectedColumns = useMemo(() => [
        ...table.columns,
        {
            headerName: "Delete",
            field: "delete",
            flex: 0.7,
            cellRenderer: (params: any) => (
                <IconButton
                    color="error"
                    onClick={() => deleteRowHandle(params.data.id)}
                    disabled={deletingRowId === params.data.id}
                >
                    {deletingRowId === params.data.id ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        <DeleteIcon />
                    )}
                </IconButton>
            ),
        },
    ], [table.columns, deletingRowId]);
    const onCellValueChanged = useCallback(
        (params: any) => {
            const { newValue, oldValue, colDef, api, node, data } = params;
            if (newValue < 0) {
                api.getRowNode(node.id)?.setDataValue(colDef.field, oldValue);
            } else {
                if(onCellValueHandler){
                    onCellValueHandler();
                }
                if(!isClient){
                    const rowData = getRowData(api, node.rowIndex);
                    updateRowMutation.mutate({ id: data.id, rowData });
                }
            }
        },
        [updateRowMutation])
    const updatePropertiesHandle=(name:string,value:string)=>{
        setProperties(prevState =>(prevState.map(el=>{
            if(el.tableId===table.id){
                return {...el,properties:el.properties.map(p=>{
                        if(p.name===name) return {...p,value}
                        return p
                    })
                }
            }
            return el
        })))
    }
    return (
        <>
            {properties?.length ? <TablePropertyFormCreator
                onChangeHandler={updatePropertiesHandle}
                inputFields={properties}/>:<></>}
            {table.name && <TableName>{table.name}</TableName>}
            <Box sx={{mb:3}}>
                <Table
                    onCellValueChanged={onCellValueChanged}
                    columns={effectedColumns}
                    rows={table.rows}
                    customRef={table.ref}
                    getRowId={(params) => String(params.data.id)}
                    domLayout="autoHeight"
                />
                <Button disabled={isPending} sx={{borderRadius:0}} fullWidth onClick={() => addRowHandle(table.id)}>
                    {isPending ? "Adding..." : "Add blank row"}
                </Button>
            </Box>

        </>
    );
};

export default ActionTable;

import React, { MutableRefObject, useCallback, useMemo } from "react";
import Button from "@mui/material/Button";
import TableName from "@/app/components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";
import { ColDef } from "ag-grid-community";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRow, updateRowChanged, deleteRow } from "@/app/apis/tablesApi";
import { AxiosError } from "axios";
import getRowData from "@/app/utils/getRowData";

type TableData = {
    tableName: string;
    id: number;
    rows: { [key: string]: any }[];
    ref: MutableRefObject<any>;
    columns: ColDef[];
};

interface ServerTableProps {
    table: TableData;
    onCellValueHandler: () => void;
}

const ServerTable: React.FC<ServerTableProps> = ({ table, onCellValueHandler }) => {
    const queryClient = useQueryClient();

    const updateRowMutation = useMutation({
        mutationFn: ({ id, rowData }: { id: string; rowData: any }) => updateRowChanged(id, rowData),
        onSuccess: (updatedRow, variables) => {
            const { id, rowData } = variables;
            queryClient.setQueryData(["sidingTables"], (oldTables: TableData[] | undefined) => {
                if (!oldTables) return oldTables;
                return oldTables.map((table) => ({
                    ...table,
                    rows: table.rows.map((row) => (row.id === id ? { ...row, ...rowData } : row)),
                }));
            });
        },
    });

    const { isPending, mutate: addRowMutate } = useMutation({
        mutationFn: addRow,
        onSuccess: (data, tableId) => {
            queryClient.setQueryData(["sidingTables"], (oldTables: TableData[] | undefined) => {
                if (!oldTables) return oldTables;
                return oldTables.map((table) => {
                    if (table.id === tableId) {
                        const gridApi = table?.ref?.current?.api;
                        if (gridApi) {
                            gridApi?.applyTransaction({
                                add: [{ id: data.id, length: 0, height: 0 }],
                            });
                        }
                        return { ...table, rows: [...table.rows, {id:data.id,length:0,height:0}] };
                    }
                    return table;
                });
            });
        },
    });

    const { mutate: deleteRowMutate, isPending: isDeleting } = useMutation({
        mutationFn: (rowId: number) => deleteRow(rowId),
        onSuccess: (_, rowId) => {
            queryClient.setQueryData(["sidingTables"], (oldTables: TableData[] | undefined) => {
                if (!oldTables) return oldTables;
                return oldTables.map((table) => ({
                    ...table,
                    rows: table.rows.filter((row) => row.id !== rowId),
                }));
            });

            // Remove from Grid API
            const gridApi = table?.ref?.current?.api;
            if (gridApi) {
                gridApi?.applyTransaction({ remove: [{ id: rowId }] });
            }
        },
    });
    const [deletingRowId, setDeletingRowId] = React.useState<number | null>(null);

    const addRowHandle = (tableId: number) => {
        addRowMutate(tableId);
    };

    const deleteRowHandle = (rowId: number) => {
        setDeletingRowId(rowId);
        deleteRowMutate(rowId, {
            onSettled: () => setDeletingRowId(null), // Reset state after mutation completes
        });
    };

    const effectedColumns = useMemo(() => [
        ...table.columns,
        {
            headerName: "Actions",
            field: "delete",
            flex: 0.7,
            cellRenderer: (params: any) => (
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteRowHandle(params.data.id)}
                    disabled={deletingRowId === params.data.id}
                >
                    {deletingRowId === params.data.id ? "Deleting..." : "Delete"}
                </Button>
            ),
        },
    ], [table.columns, deletingRowId]);
    const onCellValueChanged = useCallback(
        (params: any) => {
            const { newValue, oldValue, colDef, api, node, data } = params;
            if (newValue <= 0) {
                api.getRowNode(node.id)?.setDataValue(colDef.field, oldValue);
            } else {
                if (colDef.field === "height" || colDef.field === "length") {
                    onCellValueHandler();
                }
                const rowData = getRowData(api, node.rowIndex);
                updateRowMutation.mutate({ id: data.id, rowData });
            }
        },
        [updateRowMutation]
    );

    return (
        <>
            <Button disabled={isPending} fullWidth onClick={() => addRowHandle(table.id)}>
                {isPending ? "Adding..." : "Add blank row"}
            </Button>
            {table.tableName && <TableName>{table.tableName}</TableName>}
            <Table
                onCellValueChanged={onCellValueChanged}
                columns={effectedColumns}
                rows={table.rows}
                customRef={table.ref}
                getRowId={(params) => String(params.data.id)}
                domLayout="autoHeight"
            />
        </>
    );
};

export default ServerTable;

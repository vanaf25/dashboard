"use client";
import React, {MutableRefObject, useMemo} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Grid, Box } from "@mui/material";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Table from "@/app/components/letters/Table/Table";
import ServerTable from "@/app/components/tables/ServerTable/ServerTable";
import {getTablesQuery} from "@/app/hooks/useTable";
interface TableRow {
    id: string;
    length12: number;
    length12_24:number;
}

interface TableData {
    tableName: string;
    id:number,
    rows: TableRow[];
}
type Table=TableData & {ref: MutableRefObject<any>;
    columns: ColDef[];}
const Corners: React.FC<{initialCalculating:()=>void}> = ({initialCalculating}) => {
    const queryKey=useMemo(()=>(["corners"]),[]);
    const { data: tablesData = []  } = getTablesQuery("corners")
    const defaultColumns=useMemo(()=>([
        {
            headerName: 'corners 12 feet and under',
            field: 'length12',
            flex: 1,
            cellEditor: 'agNumberCellEditor',
            editable: true,
        },
        {
            headerName: 'Corners between 12 & 24 long',
            field: 'length12_24',
            flex: 1,
            cellEditor: 'agNumberCellEditor',
            editable: true,
        },
    ]),[])
    const tables=useMemo<Table[]>(
        ()=>tablesData.map(table=> ({...table,columns:defaultColumns,ref:React.createRef()})),[tablesData])
    return (
                <Box sx={{ mb: 2 }}>
                        <Grid sx={{ mb: 2 }} container spacing={2}>
                            {tables.map((table) => (
                                <Grid item xs={12} md={6} sm={6} key={table.id}>
                                    <ServerTable queryKeys={queryKey} table={table} onCellValueHandler={initialCalculating} />
                                </Grid>
                            ))}
                        </Grid>
                </Box>
    );
};

export default Corners;
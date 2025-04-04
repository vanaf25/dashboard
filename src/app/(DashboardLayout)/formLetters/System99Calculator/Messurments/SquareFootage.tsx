"use client";
import React, {useMemo} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Box, Grid} from "@mui/material";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {CORNERS_COLUMNS, EXTERIOR_SIDING_COLUMNS, sidingColumns} from "@/app/consts/formletters/system99Calculator";
import ActionTable from "@/app/components/tables/ActionTable/ActionTable";
import {ActionTableType} from "@/app/types/tablesTypes";
import TableNotes from "@/app/components/system99/TableNotes/TableNotes";
import TablesSummary from "@/app/components/tables/TablesSummary/TablesSummary";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";


const  SquareFootage: React.FC = () => {
  /*const initialSidingTables: ActionTableType[] =useMemo(()=>(tableNames.map((name, i) => ({
       name,
      rows: JSON.parse(JSON.stringify(initialSidingData)),
      id: i + 1,
      group:TablesGroup.SIDING,
      columns: JSON.parse(JSON.stringify(EXTERIOR_SIDING_COLUMNS)),
      ref: React.createRef()
  }))),[])
    const initialCornersTable:ActionTableType[] = useMemo(() =>cornersTableNames.map((name, i) => ({
                id: i + 1,
                name,
                group:TablesGroup.CORNERS,
                rows: JSON.parse(JSON.stringify(initialCornersData)),
                columns: JSON.parse(JSON.stringify(CORNERS_COLUMNS)),
                ref: React.createRef(),
            })),
        []);
    const mergedArray=useMemo(()=>([...initialSidingTables,...initialCornersTable]),[initialSidingTables,initialCornersTable])
  return (
            <Box sx={{ mb: 2 }}>
                <TableNotes/>
              <Grid container spacing={2}>
                {initialSidingTables.map(table=>(<Grid item xs={12} md={4} sm={6} key={table.id}>
                  <ActionTable isClient queryKeys={[]} table={table}/>
                </Grid>))}
              </Grid>
                <Grid container spacing={2}>
                    {initialCornersTable.map(table=>(<Grid item xs={12} md={6} sm={6} key={table.id}>
                        <ActionTable isClient queryKeys={[]} table={table}/>
                    </Grid>))}
                </Grid>
              <TablesSummary type={MeasurementsType.EXTERIOR_SIDING}  clientOnly tables={mergedArray} />
            </Box>
  );*/
    return (<div>Not used </div>)
};

export default SquareFootage;
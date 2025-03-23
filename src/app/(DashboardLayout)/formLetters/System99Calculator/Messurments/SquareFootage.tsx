"use client";
import React, {MutableRefObject, useEffect, useMemo, useState} from "react";
import {useQuery,} from "@tanstack/react-query";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Grid, Box, Typography } from "@mui/material";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Loading } from "@/app/components/global/loading/Loading";
import { sidingColumns } from "@/app/consts/formletters/system99Calculator";
import {getAllTablesByType} from "@/app/apis/tablesApi";
import Table from "@/app/components/letters/Table/Table";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CalculationValues from "@/app/components/CalculationValues/CalculationValues";
import BlankCard from "@/app/components/shared/BlankCard";
import Link from "next/link";
import ServerTable from "@/app/components/tables/ServerTable/ServerTable";
interface TableRow {
  id: string;
  length: number;
  height:number;
}

interface TableData {
  tableName: string;
  id:number,
  rows: TableRow[];
}
type Table=TableData & {ref: MutableRefObject<any>;
  columns: ColDef[];}
const SquareFootage: React.FC = () => {
  const [totalValues, setTotalValues] = useState<{length:number,height:number}>(
      {length:0,height:0});
  const { data: tablesData = [], isLoading,error  } = useQuery<TableData[], any>({
    queryKey: ["sidingTables"],
    queryFn: () => getAllTablesByType("siding"),
    staleTime: Infinity,
  });
  const defaultColumns=useMemo(()=>(sidingColumns
      .filter((c) => c.field === "length" || c.field === "height")
      .map((col) => ({ ...col, flex: 1 }))),[])
  const tables=useMemo<Table[]>(
      ()=>tablesData.map(table=> ({...table,columns:defaultColumns,ref:React.createRef()})),[tablesData])
  const initialCalculating=()=>{
    const totalLength =tablesData.reduce((acc, current) =>{
     return acc+current.rows.reduce((acc,cur)=>acc+(+cur.length),0)
    },0)
    const totalHeight =tablesData.reduce((acc, current) =>{
      return acc+current.rows.reduce((acc,cur)=>acc+(+cur.height),0)
    },0)
    setTotalValues({height:totalHeight,length:totalLength});  }
  useEffect(()=>{
    initialCalculating()
  },[tablesData])
  return (
      <>
        {isLoading ? (
            <Loading />
        ) : (
            <Box sx={{ mb: 2 }}>
              {error ? (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    <Typography variant={"h3"}>
                      Error: {error?.response?.data?.message}
                    </Typography>
                  </Alert>
              ):<>
                <Alert severity="info" sx={{ mb: 2 }}>
                  <Typography variant={"h3"}>
                    To Edit Table data db click on cell and after providing a value press Tab(Then you will
                    start edit next cell)
                    Or press Enter
                  </Typography>
                  <Typography variant={"h3"}>
                    If You want cancell editing click esc
                  </Typography>
                </Alert>
                <Grid sx={{ mb: 2 }} container spacing={2}>
                  {tables.map((table) => (
                      <Grid item xs={12} md={4} sm={6} key={table.id}>
                      <ServerTable table={table} onCellValueHandler={initialCalculating} />
                      </Grid>
                  ))}
                </Grid>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ maxWidth: 700, mx: "auto" }}
                >
                  <Grid item xs={12} sm={6}>
                    <BlankCard sx={{ p: 2, width: "100%" }}>
                      <CalculationValues values={totalValues} />
                    </BlankCard>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <BlankCard sx={{ p: 2, width: "100%" }}>
                      <Button
                          fullWidth
                          component={Link}
                          href={`ExteriorSiding/calculators?wallLength=${totalValues.length}&wallHeight=${totalValues.height}`}
                          size="large"
                      >
                        SHOW CALCULATIONS
                      </Button>
                    </BlankCard>
                  </Grid>
                </Grid>
              </>}
            </Box>
        )}
      </>
  );
};

export default SquareFootage;
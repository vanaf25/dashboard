"use client";
import React, {MutableRefObject, useEffect, useMemo, useState} from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Grid, Box, Typography } from "@mui/material";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Loading } from "@/app/components/global/loading/Loading";
import { sidingColumns } from "@/app/consts/formletters/system99Calculator";
import Table from "@/app/components/letters/Table/Table";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CalculationValues from "@/app/components/CalculationValues/CalculationValues";
import BlankCard from "@/app/components/shared/BlankCard";
import Link from "next/link";
import ServerTable from "@/app/components/tables/ServerTable/ServerTable";
import {TableData} from "@/app/types/tablesTypes";
import {getTablesQuery} from "@/app/hooks/useTable";
import Corners from "@/app/(DashboardLayout)/formLetters/System99Calculator/Messurments/Corners";
interface TableRow {
  id: string;
  length: number;
  height:number;
}

type SidingTableData=TableData<TableRow>
type Table=SidingTableData & {ref: MutableRefObject<any>;
  columns: ColDef[];}
interface TotalValues{
  length:number;
  height:number;
  corners12FeetAndUnder:number
  corners12FeetAnd24Feet:number

}
const SquareFootage: React.FC = () => {
  const queryKey=useMemo(()=>(["siding"]),[]);
  const [totalValues, setTotalValues] = useState<TotalValues>(
      {length:0,height:0,corners12FeetAndUnder:0,corners12FeetAnd24Feet:0});
  const { data: tablesData = [], isLoading,error  } = getTablesQuery("siding")
  const {data:cornersTableData,isLoading:isCornersLoading,error:cornerError}=getTablesQuery("corners");
  const defaultColumns=useMemo(()=>(sidingColumns
      .filter((c) => c.field === "length" || c.field === "height")
      .map((col) => ({ ...col, flex: 1 }))),[])
  const tables=useMemo<Table[]>(
      ()=>tablesData.map(table=> ({...table,columns:defaultColumns,ref:React.createRef()})),[tablesData])
  const initialCalculating=()=>{
    if(tables.length && cornersTableData?.length){
      const totalLength =tablesData.reduce((acc, current) =>{
        return acc+current.rows.reduce((acc,cur)=>acc+(+cur.length),0)
      },0)
      const totalHeight =tablesData.reduce((acc, current) =>{
        return acc+current.rows.reduce((acc,cur)=>acc+(+cur.height),0)
      },0)
      const total12Corners=cornersTableData.reduce((acc, current) =>{
       return acc+current.rows.reduce((acc,cur)=>acc+(+cur.length12),0)
     },0)
      const corners12FeetAnd24Feet=cornersTableData.reduce((acc, current) =>{
        return acc+current.rows.reduce((acc,cur)=>acc+(+cur.length12_24),0)
      },0)
      setTotalValues({height:totalHeight,length:totalLength,
        corners12FeetAnd24Feet,
        corners12FeetAndUnder:total12Corners});  }
    }
  useEffect(()=>{
    initialCalculating()
  },[tablesData,cornersTableData])
  return (
      <>
        {isLoading  || isCornersLoading  ? (
            <Loading />
        ) : (
            <Box sx={{ mb: 2 }}>
              {error  || cornerError  ? (
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
                      <ServerTable queryKeys={queryKey} table={table} onCellValueHandler={initialCalculating} />
                      </Grid>
                  ))}
                </Grid>
                <Corners initialCalculating={initialCalculating}/>

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
                          href={`ExteriorSiding/calculators?wallLength=${totalValues.length}&wallHeight=${totalValues.height}&cornerQuantity=${totalValues.corners12FeetAndUnder}`}
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
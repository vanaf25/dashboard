import React, {useMemo, useState} from 'react';
import {ActionTableType, TableData} from "@/app/types/tablesTypes";
import {Grid} from "@mui/material";
import ActionTable from "@/app/components/tables/ActionTable/ActionTable";
import {CORNERS_COLUMNS, EXTERIOR_SIDING_COLUMNS} from "@/app/consts/formletters/system99Calculator";
import TablesSummary from "@/app/components/tables/TablesSummary/TablesSummary";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
import {MeasurementsType} from "@/app/types/measurementsTypes";
import {ExteriorSidingService} from "@/app/caculationMath/ExteriorSiding";
import {Box} from "@mui/system";

interface ExteriorSidingTables {
    tables:Record<string,TablesData[]>
    queryKeys:any[],
    isClient?:boolean
}
export  interface CalculationsState {
    basicValues: any;
    calculators: any;
}
const ExteriorSidingTables:React.FC<ExteriorSidingTables> = ({tables,queryKeys,isClient}) => {
    const sidingTables:ActionTableType[]=useMemo(()=>(tables["siding"].map(el=>({...el,columns:JSON.parse(JSON.stringify(EXTERIOR_SIDING_COLUMNS)),ref:React.createRef()}))),[])
    const cornersTable:ActionTableType[]=useMemo(()=>(tables["corners"].map(el=>({...el,columns:JSON.parse(JSON.stringify(CORNERS_COLUMNS)),ref:React.createRef()}))),[])
    const mergedArray=useMemo(()=>([...sidingTables,...cornersTable]),[sidingTables,cornersTable])
    const [calculations,setCalculations]=useState<CalculationsState | null>(null);
    return (
        <>
            <Grid sx={{ mb: 2 }} container spacing={2}>
                {sidingTables.map((table) => (
                    <Grid item xs={12} md={4} sm={6} key={table.id}>
                        <ActionTable isClient={isClient} tableKey={"siding"} queryKeys={queryKeys} table={table}/>
                    </Grid>
                ))}
            </Grid>
            <Grid sx={{ mb: 2 }} container spacing={2}>
                {cornersTable.map((table) => (
                    <Grid item xs={12} md={6} sm={6} key={table.id}>
                        <ActionTable isClient={isClient} queryKeys={queryKeys} tableKey={"corners"} table={table} />
                    </Grid>
                ))}
            </Grid>
            <TablesSummary clientOnly={isClient} setCalculation={(values)=>setCalculations(ExteriorSidingService.getExteriorSiding(values as any))}  type={MeasurementsType.EXTERIOR_SIDING} tables={mergedArray} />
            {calculations && <Box sx={{mt:2}}>
                <DefaultCalculationValues additionalValues={calculations.basicValues} />
                <DefaultCalculators calculators={calculations.calculators}/>
            </Box>}
        </>
    );
};

export default ExteriorSidingTables;

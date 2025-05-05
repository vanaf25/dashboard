import React, {useEffect, useMemo, useState} from 'react';
import {ActionTableType, TableData} from "@/app/types/tablesTypes";
import {BARRIERS_COLUMNS} from "@/app/consts/formletters/system99Calculator";
import ActionTable from "@/app/components/tables/ActionTable/ActionTable";
import TablesSummary from "@/app/components/tables/TablesSummary/TablesSummary";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
import {CalculationsState} from "@/app/components/tables/TablePages/ExteriorSidingTables/ExteriorSidingTables";
import {Barriers} from "@/app/caculationMath/Barriers";
interface ExteriorSidingTables {
    tables:Record<string,TableData[]>
    queryKeys:any[],
    isClient?:boolean
}
const BarriersTablesComponent:React.FC<ExteriorSidingTables> = ({tables,queryKeys,isClient}) => {
    const fenceTable:ActionTableType[]=useMemo(()=>(tables[TablesGroup.BARRIERS_FENCE].map(el=>({...el,columns:JSON.parse(JSON.stringify(BARRIERS_COLUMNS.fence)),ref:React.createRef()}))),[])
    const barriersTable:ActionTableType[]=useMemo(()=>(tables[TablesGroup.BARRIERS_GATES].map(el=>({...el,columns:JSON.parse(JSON.stringify(BARRIERS_COLUMNS.gates)),ref:React.createRef()}))),[])
    const mergedArray=useMemo(()=>([...fenceTable,...barriersTable]),[fenceTable,barriersTable])
    const [calculations,setCalculations]=useState<CalculationsState | null>(null);
    return (
        <div>
            <Grid sx={{ mb: 2 }} container spacing={2}>
                {fenceTable.map((table) => (
                    <Grid item xs={12} md={12} sm={12} key={table.id}>
                        <ActionTable isClient={isClient} tableKey={TablesGroup.BARRIERS_FENCE}
                                     queryKeys={queryKeys} table={table}/>
                    </Grid>
                ))}
            </Grid>
            <Grid sx={{ mb: 2 }} container spacing={2}>
                {barriersTable.map((table) => (
                    <Grid item xs={12} md={12} sm={12} key={table.id}>
                        <ActionTable isClient={isClient} queryKeys={queryKeys}
                                     tableKey={TablesGroup.BARRIERS_GATES} table={table} />
                    </Grid>
                ))}
            </Grid>
            <TablesSummary tables={mergedArray}
                           setCalculation={(values)=>setCalculations(Barriers.main(values as any))}
                           clientOnly={isClient} type={MeasurementsType.BARRIERS} />
            {calculations && <Box sx={{mt:2}}>
                <DefaultCalculationValues additionalValues={calculations.basicValues} />
                <DefaultCalculators calculators={calculations.calculators}/>
            </Box>}
        </div>
    );
};

export default BarriersTablesComponent;
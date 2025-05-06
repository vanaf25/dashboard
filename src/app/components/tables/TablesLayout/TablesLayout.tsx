import React, {useMemo, useState} from 'react';
import TablesSummary from "@/app/components/tables/TablesSummary/TablesSummary";
import {Barriers} from "@/app/caculationMath/Barriers";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import {Box} from "@mui/system";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
import {ActionTableType, TableData} from "@/app/types/tablesTypes";
import {Grid} from "@mui/material";
import ActionTable from "@/app/components/tables/ActionTable/ActionTable";
import {
    COLUMNS
} from "@/app/consts/formletters/system99Calculator";
import {ExteriorSidingService} from "@/app/caculationMath/ExteriorSiding";
interface TablesLayoutProps{
    isClient:boolean
    tables:Record<string,TableData[]>,
    queryKeys:any[]
    measurementType:MeasurementsType
}
type LayoutRule = { xs: number; sm: number; md: number };
type LayoutRulesType = {
    [K in (typeof TablesGroup)[keyof typeof TablesGroup]]?: LayoutRule;
};
const layoutRules: LayoutRulesType = {
    [TablesGroup.BARRIERS_GATES]: {xs:12, sm:12, md:12},
    [TablesGroup.BARRIERS_FENCE]: {xs:12, sm:12, md:12},
    [TablesGroup.SIDING]: {xs:12, sm:6, md:4},
    [TablesGroup.CORNERS]: {xs:12, sm:6, md:6},
    [TablesGroup.UTILITIES_ROOM]: {xs:12, sm:6, md:6},
    [TablesGroup.EAVES_SOFFIT]: {xs:12, sm:6, md:6},
    [TablesGroup.EAVES_FASCIA]: {xs:12, sm:6, md:6},
};
type TablesColumnsType = {
    [K in (typeof TablesGroup)[keyof typeof TablesGroup]]?: any;
};
const calculationFunctions={
    [MeasurementsType.BARRIERS]:Barriers.main.bind(Barriers),
    [MeasurementsType.EXTERIOR_SIDING]:ExteriorSidingService.getExteriorSiding.bind(ExteriorSidingService),
    [MeasurementsType.UTILITIES]:()=>null,
    [MeasurementsType.EAVES]:()=>null,
    [MeasurementsType.INTERIOR]:()=>null
}
interface CalculationsState{
    basicValues:any,
    calculators:any,
}
const TablesLayout:React.FC<TablesLayoutProps> = ({isClient,tables,
                                                      queryKeys,measurementType,}) => {
    const [calculations,setCalculations]=useState<CalculationsState | null>(null);
    const actionTables = useMemo(() => {
        return Object.fromEntries(
            Object.entries(tables).map(([groupKey, tablesInGroup]) => {
                const typedGroupKey = groupKey as keyof TablesColumnsType;
                return [
                    groupKey,
                    tablesInGroup.map(table => ({
                        ...table,
                        ref: React.createRef(),
                        columns: JSON.parse(JSON.stringify(COLUMNS[typedGroupKey]))
                    }))
                ];
            })
        ) as Record<TablesGroup, ActionTableType[]>;
    }, [tables]);
    const mergedArray: ActionTableType[] = useMemo(() =>
            Object.values(actionTables).flat(),
        [actionTables]
    );
    return (
        <div>
            {Object.entries(actionTables).map(tableGroup=>{
                const groupKey=tableGroup[0] as keyof typeof layoutRules
                return (<Grid sx={{ mb: 2 }} container spacing={2}>
                    {tableGroup[1].map((table) => {
                        return (
                            <Grid
                                item
                                xs={layoutRules[groupKey]?.xs || 12}
                                md={layoutRules[groupKey]?.md || 12}
                                sm={layoutRules[groupKey]?.sm || 12}
                                key={table.id}
                            >
                                <ActionTable isClient={isClient} tableKey={tableGroup[0]} queryKeys={queryKeys} table={table}/>
                            </Grid>
                        );
                    })}
                </Grid>)
            })}
            <TablesSummary tables={mergedArray}
                           setCalculation={(values)=>setCalculations(calculationFunctions[measurementType](values as any))}
                           clientOnly={isClient} type={measurementType} />
            {calculations && <Box sx={{mt:2}}>
                <DefaultCalculationValues additionalValues={calculations.basicValues} />
                <DefaultCalculators calculators={calculations.calculators}/>
            </Box>}
        </div>
    );
};

export default TablesLayout;
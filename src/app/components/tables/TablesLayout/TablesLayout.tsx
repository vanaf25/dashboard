import React, {useEffect, useMemo, useState} from 'react';
import TablesSummary from "@/app/components/tables/TablesSummary/TablesSummary";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import {Box} from "@mui/system";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
import {
    ActionTableType,
    TableData, TableProperty,
    TablesColumnsType, TablesPropertiesIntegrated,
} from "@/app/types/tablesTypes";
import {Grid} from "@mui/material";
import ActionTable from "@/app/components/tables/ActionTable/ActionTable";
import {
    COLUMNS
} from "@/app/consts/formletters/system99Calculator";
import generateBlankRows from "@/app/utils/tables/generateBlankRows";
import {calculationFunctions, LayoutRules, TablesProperties} from "@/app/consts/tables/tables";
interface TablesLayoutProps{
    isClient:boolean
    tables:Record<string,TableData[]>,
    queryKeys:any[]
    measurementType:MeasurementsType
}

interface CalculationsState{
    basicValues:any,
    calculators:any,
}

const TablesLayout:React.FC<TablesLayoutProps> = ({isClient,tables,
                                                      queryKeys,measurementType,}) => {
    const [calculations,setCalculations]=useState<CalculationsState | null>(null);
    const [properties,setProperties]=useState<TablesPropertiesIntegrated[]>([])

    const actionTables:Record<string, ActionTableType[]> = useMemo(() => {
        return Object.fromEntries(
            Object.entries(tables).map(([groupKey, tablesInGroup]) => {
                const typedGroupKey = groupKey as keyof TablesColumnsType;
                const columns=COLUMNS[typedGroupKey]
               /* setProperties(prevState =>({...prevState,[typedGroupKey]
                        :TablesProperties[typedGroupKey]?.map(el=>({name:el.name,value:""}))}) )*/
                return [
                    groupKey,
                    tablesInGroup.map(table => {
                        const tableId=table.id ? table.id:Math.random()
                        const selectedProperties=TablesProperties[typedGroupKey]?.map(el=>({...el,
                            value:table.properties?.find(prop=>el.name===prop.name)?.value || ""}))
                            if(selectedProperties){
                            setProperties(prevState =>([...prevState,{tableId,properties:selectedProperties}]))
                        }
                            return {
                        ...table,
                        id:tableId,
                        group:table.group ? table.group:groupKey,
                        rows:table.rows ? table.rows:JSON.parse(JSON.stringify(generateBlankRows(columns,3))),
                        ref: React.createRef(),
                        columns: JSON.parse(JSON.stringify(columns))
                    }
                    }
                    )
                ];
            })
        )
    }, [tables]);
    const mergedArray: ActionTableType[] = useMemo(() =>
            Object.values(actionTables).flat(),
        [actionTables]
    );
    useEffect(()=>{
        console.log('properties:',properties);
    },[properties])
    return (
        <div>
            {Object.entries(actionTables).map(tableGroup=>{
                const groupKey=tableGroup[0] as keyof typeof LayoutRules
                return (<Grid key={groupKey} sx={{ mb: 2 }} container spacing={2}>
                    {tableGroup[1].map((table) => {
                        return (
                            <Grid
                                item
                                xs={LayoutRules[groupKey]?.xs || 12}
                                md={LayoutRules[groupKey]?.md || 12}
                                sm={LayoutRules[groupKey]?.sm || 12}
                                key={table.id}
                            >
                                <ActionTable isClient={isClient}
                                             setProperties={setProperties}
                                             properties={properties.find(el=>el.tableId===table.id)?.properties  || []}
                                             tableKey={tableGroup[0]}
                                             queryKeys={queryKeys} table={table}/>
                            </Grid>
                        );
                    })}
                </Grid>)
            })}
            <TablesSummary tables={mergedArray}
                           properties={properties}
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
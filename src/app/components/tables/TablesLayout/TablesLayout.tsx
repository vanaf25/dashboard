import React, {useEffect, useMemo, useState} from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import TablesSummary from "@/app/components/tables/TablesSummary/TablesSummary";
import {MeasurementsType} from "@/app/types/measurementsTypes";
import {Box} from "@mui/system";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/DefaultCalculators/DefaultCalculators";
import {
    ActionTableType,
    TableData,
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
                        const currentProperties=table.customProperties || TablesProperties[typedGroupKey]
                        const selectedProperties=currentProperties?.map(el=>({...el,
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
    return (
        <div>
            {Object.entries(actionTables).map(([groupKey, tables]) => {
                const layout = LayoutRules[groupKey as keyof typeof LayoutRules];
                return (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6" fontWeight="bold">
                                {groupKey}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                {tables.map((table) => (
                                    <Grid
                                        item
                                        xs={layout?.xs || 12}
                                        sm={layout?.sm || 12}
                                        md={layout?.md || 12}
                                        key={table.id}
                                    >
                                        <ActionTable
                                            isClient={isClient}
                                            setProperties={setProperties}
                                            properties={
                                                properties.find((el) => el.tableId === table.id)?.properties || []
                                            }
                                            tableKey={groupKey}
                                            queryKeys={queryKeys}
                                            table={table}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            <TablesSummary
                tables={mergedArray}
                properties={properties}
                setCalculation={(values) =>
                    setCalculations(calculationFunctions[measurementType](values as any))
                }
                clientOnly={isClient}
                type={measurementType}
            />

            {calculations && (
                <Box sx={{mt: 2}}>
                    <DefaultCalculationValues additionalValues={calculations.basicValues}/>
                    <DefaultCalculators calculators={calculations.calculators}/>
                </Box>
            )}
        </div>
    );
};

export default TablesLayout;
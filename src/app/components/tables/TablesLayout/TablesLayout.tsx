import React, {useMemo, useState} from 'react';
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
import DefaultCalculationValues from "@/app/components/system99/DefaultCalculationValues/DefaultCalculationValues";
import DefaultCalculators from "@/app/components/system99/DefaultCalculators/DefaultCalculators";
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
import SubMeasurementPopup from "@/app/components/tables/TablesLayout/SubMeasurementPopup/SubMeasurementPopup";
import SubTablesLayout from './SubTablesLayout/SubTablesLayout';
import TableName from '../../letters/TableName/TableName';
import Link from "next/link";
import BlankCard from "@/app/components/shared/BlankCard";
import Button from "@mui/material/Button";
interface TablesLayoutProps{
    name?:string  | null,
    isClient:boolean,
    tables:Record<string,TableData[]>,
    queryKeys:any[],
    measurementType:MeasurementsType,
    isSubMeasurement?:boolean,
    defaultSubMeasurements?:{id:number,name:string}[],
    parentId?:number | null
}
export  interface SubMeasurementType{
    tables:Record<string,ActionTableType[]>,
    id:number,
    name:string
}
interface CalculationsState{
    basicValues:any,
    calculators:any,
}

const TablesLayout:React.FC<TablesLayoutProps> = ({isClient,tables,
                                                      queryKeys,measurementType
                                                      ,isSubMeasurement
                                                      ,defaultSubMeasurements,name,parentId}) => {
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
                        ref:table.ref ? table.ref:React.createRef(),
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
        [actionTables]);
    const [subMeasurements, setSubMeasurements] = useState<SubMeasurementType[]>([]);
    const onAddHandle = (name: string) =>
        setSubMeasurements(prevState => ([
            ...prevState,
            {
                id: Date.now(),
                name,
                tables: Object.fromEntries(
                    Object.entries(actionTables).map(([key, value]) => [
                        key,
                        value.map(table=>({...table,id:Math.random(),
                            rows:JSON.parse(JSON.stringify(generateBlankRows(table.columns,3))),
                            columns:JSON.parse(JSON.stringify(table.columns)),
                            ref:React.createRef()}))
                    ]))}]))
    const deleteSubMeasurementHandle=(id:number)=>setSubMeasurements(prevState =>(prevState.filter(el=>el.id!==id)))
    return (
        <div>
            {parentId ? <BlankCard sx={{mb:2}}>
                <Link href={`/measurements/${parentId}`}>
                    <Button size={"large"}>Back to  root measurement</Button>
                </Link>
            </BlankCard>:<></>}
            {name && <TableName sx={{mb:2}}>{name}</TableName>}
            {Object.entries(actionTables).map(([groupKey, tables]) => {
                const layout = LayoutRules[groupKey as keyof typeof LayoutRules];
                return (
                    <Accordion sx={{borderRadius:0}}>
                        <AccordionSummary sx={{borderRadius:0}} expandIcon={<ExpandMoreIcon />}>
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
            {subMeasurements.map((sm) => (
                <SubTablesLayout
                    onDelete={()=>deleteSubMeasurementHandle(sm.id)}
                    key={sm.id}
                    name={sm.name}
                    props={{ isClient, tables:sm.tables, queryKeys, measurementType }}
                />
            ))}
            {defaultSubMeasurements?.length ? <Box sx={{my:2}}>
                <BlankCard sx={{mb:2}}>
                    <Typography sx={{textAlign:"center",mb:2}} gutterBottom variant={"h3"} >Another buildings</Typography>
                    <>
                        {defaultSubMeasurements.map(el=><Link key={el.id} href={`/measurements/${el.id}`} passHref>
                                <TableName sx={{mb:2}}>{el.name}</TableName>
                            </Link>
                        )}
                    </>
                </BlankCard>
            </Box>:<></>}
            {!isSubMeasurement && <>
               <TablesSummary
                   tables={mergedArray}
                   subMeasurements={subMeasurements}
                   properties={properties}
                   setCalculation={(values) =>
                       setCalculations(calculationFunctions[measurementType](values as any))
                   }
                   clientOnly={isClient}
                   type={measurementType}
               />
                <SubMeasurementPopup onAdd={onAddHandle} />
               {calculations && (
                   <Box sx={{mt: 2}}>
                       <DefaultCalculationValues additionalValues={calculations.basicValues}/>
                       <DefaultCalculators calculators={calculations.calculators}/>
                   </Box>
               )}
           </>}
        </div>
    );
};

export default TablesLayout;
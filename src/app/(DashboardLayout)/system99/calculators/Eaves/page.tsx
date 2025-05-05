"use client";
import {useMemo} from "react";
import { ColDef } from 'ag-grid-community';
import {DOWNSPOUT_COLUMNS, EAVES_COLUMNS, GUTTER_COLUMNS} from "@/app/consts/formletters/system99Calculator";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";
import {TableData} from "@/app/types/tablesTypes";

const generateBlankRow = (columns:ColDef[]) => {
    const row:Record<string,any> = {};
    columns.forEach(column => {
        if (column.field) {
            // Initialize each field based on its type
            if (column.cellEditor === 'agSelectCellEditor'  || column.cellEditor==="agTextCellEditor") {
                row[column.field] = column.cellEditorParams?.values[0] || '';
            } else {
                row[column.field] = 0;
            }
        }
    });
    return row;
};

// Define initial data for the tables
const Page = () => {
    const initialGutterData = useMemo(
        () => Array.from({ length: 3 }, () => generateBlankRow(GUTTER_COLUMNS)),
        []
    );
    const initialDownspoutData = useMemo(
        () => Array.from({ length: 3 }, () => generateBlankRow(DOWNSPOUT_COLUMNS)),
        []
    );
    const soffitNames=["Front Soffit","Left Soffit","Rear Soffit","Right Soffit"]
    const fasciaNames=["Front Fascia","Left Fascia","Rear Fascia","Right Fascia"]
    const initialFasciaData=useMemo(()=>(Array.from({length:3},()=>generateBlankRow(EAVES_COLUMNS["eaves_fascia"]))),[])
    const initialSoffitData=useMemo(()=>(Array.from({length:3},()=>generateBlankRow(EAVES_COLUMNS["eaves_soffit"]))),[])
    const initialPorchData=useMemo(()=>(Array.from({length:3},()=>generateBlankRow(EAVES_COLUMNS["eaves_porch"]))),[])

    const tableData:Record<string,TableData[]> = useMemo(() => ({
        [TablesGroup.EAVES_FASCIA]:fasciaNames.map(el=>({id:Math.random(),name:el,rows:JSON.parse(JSON.stringify(initialFasciaData)),group:TablesGroup.EAVES_FASCIA})),
        [TablesGroup.EAVES_SOFFIT]:soffitNames.map(el=>({id:Math.random(),name:el,rows:JSON.parse(JSON.stringify(initialSoffitData)),group:TablesGroup.EAVES_SOFFIT})),
        [TablesGroup.EAVES_PORCH]:[{id:Math.random(),name:"Porch ceiling",rows:initialPorchData,group:TablesGroup.EAVES_PORCH}],
        [TablesGroup.GUTTER_FRONT]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialGutterData)), name: "Front Gutter", group: TablesGroup.GUTTER_FRONT }],
        [TablesGroup.DOWNSPOUT_FRONT]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialDownspoutData)), name: "Front Downspout", group: TablesGroup.DOWNSPOUT_FRONT }],
        [TablesGroup.GUTTER_LEFT]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialGutterData)), name: "Left Gutter", group: TablesGroup.GUTTER_LEFT }],
        [TablesGroup.DOWNSPOUT_LEFT]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialDownspoutData)), name: "Left Downspout", group: TablesGroup.DOWNSPOUT_LEFT }],
        [TablesGroup.GUTTER_REAR]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialGutterData)), name: "Rear Gutter", group: TablesGroup.GUTTER_REAR }],
        [TablesGroup.DOWNSPOUT_REAR]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialDownspoutData)), name: "Rear Downspout", group: TablesGroup.DOWNSPOUT_REAR }],
        [TablesGroup.DOWNSPOUT_RIGHT]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialDownspoutData)), name: "Right Downspout", group: TablesGroup.DOWNSPOUT_RIGHT }],
        [TablesGroup.GUTTER_RIGHT]: [{ id: Math.random(), rows: JSON.parse(JSON.stringify(initialGutterData)), name: "Right Gutter", group: TablesGroup.GUTTER_RIGHT }],
    }), [initialGutterData, initialDownspoutData]);

    return (
        <div>
            <TablesLayout measurementType={MeasurementsType.EAVES} isClient queryKeys={[]} tables={tableData} />
        </div>
    );
};

export default Page;
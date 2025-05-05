"use client"
import React, {useMemo} from 'react';
import {TableData} from "@/app/types/tablesTypes";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const tableNames = [
    "Front SIDING",
    "Rear SIDING",
    "1st side SIDING",
    "2nd side SIDING",
    "Siding for Extra building",
    "Siding for Extra building 2"
];
const cornersTableNames=["Inside Corners","Outside Corners"]
const Page = () => {
    const initialSidingData=useMemo(()=>Array.from({length: 6}, () => ({length: 0, height: 0,id:Math.random()})),[]);
    const initialCornersData=useMemo(()=>Array.from({length: 6}, () => ({length12: 0, length12_24: 0,id:Math.random()})),[]);
    const initialSidingTables: TableData[] =useMemo(()=>(tableNames.map((name, i) => ({
        name,
        rows: JSON.parse(JSON.stringify(initialSidingData)),
        id: i + 1,
        group:TablesGroup.SIDING
    }))),[])
    const initialCornersTable:TableData[] = useMemo(() =>cornersTableNames.map((name, i) => ({
            id: i + 1,
            name,
            group:TablesGroup.CORNERS,
            rows: JSON.parse(JSON.stringify(initialCornersData)),
        })),
        []);
    const tableData=useMemo(()=>({siding:initialSidingTables,corners:initialCornersTable}),[])
    return (
        <div>
            <TablesLayout measurementType={MeasurementsType.EXTERIOR_SIDING} queryKeys={[]} isClient tables={tableData} />
        </div>
    );
};

export default Page;
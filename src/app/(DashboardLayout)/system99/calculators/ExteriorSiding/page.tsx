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
    const tableData=useMemo(()=>({
        [TablesGroup.SIDING]:tableNames.map(el=>({name:el})),
        [TablesGroup.CORNERS]:cornersTableNames.map(el=>({name:el}))}),[])
    return (
        <div>
            <TablesLayout measurementType={MeasurementsType.EXTERIOR_SIDING} queryKeys={[]} isClient tables={tableData} />
        </div>
    );
};

export default Page;
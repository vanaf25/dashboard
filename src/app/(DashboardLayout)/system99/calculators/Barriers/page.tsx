"use client";
import React, {useMemo} from 'react';
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const Page = () => {
    const tableData=useMemo(()=>({
        [TablesGroup.BARRIERS_FENCE]:[{name:"Fence, Retanige wall, Stone or brick wall"}],
        [TablesGroup.BARRIERS_GATES]:[{name:"Gates"}]}),[])
    return (
        <div>
            <TablesLayout measurementType={MeasurementsType.BARRIERS} isClient queryKeys={[]} tables={tableData} />
        </div>
    );
};

export default Page;
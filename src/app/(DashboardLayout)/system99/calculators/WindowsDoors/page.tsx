"use client";
import React, {useMemo} from 'react';
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const Page = () => {
    const tableData=useMemo(()=>({
        [TablesGroup.APERTURES_WINDOWS]:[{name:"Windows"}],
        [TablesGroup.APERTURES_DOORS]:[{name:"Doors"}],
    }),[]);
    return (
        <div>
            <TablesLayout measurementType={MeasurementsType.APERTURES}
                          tables={tableData} queryKeys={[]} isClient />
        </div>
    );
};

export default Page;
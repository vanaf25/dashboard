"use client";
import React, {useMemo} from 'react';
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const Page = () => {
    const tables=useMemo(()=>({
        [TablesGroup.ROOF_ASSORYS]:[{name:"Roof Assorys"}],
        [TablesGroup.ROOF_MAIN]:[
            "Gable Roof",
            "Cliped Gable Roof",
            "Dutch Gable Roof",
            "Gambal Roof",
            "Hip Roof",
            "Mansord Roof",
            "Shed Roof",
            "Flat Roof",
        ].map(el=>({name:el})),
    }),[])
    return (
        <div>
        <TablesLayout queryKeys={[]}
                      isClient tables={tables}
                      measurementType={MeasurementsType.ROOF} />
        </div>
    );
};

export default Page;
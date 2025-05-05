"use client";
import React, {useMemo} from 'react';
import {TableData} from "@/app/types/tablesTypes";
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const Page = () => {
    const initialFenceData=useMemo(()=>Array.from({length: 3}, () => ({length: 0, height: 0,corners:0,id:Math.random()})),[]);
    const initialGateData=useMemo(()=>Array.from({length: 3}, () => ({gateQuantity: 0, gateSize: 0,id:Math.random()})),[]);
   const initialFenceTable:TableData[]=useMemo(()=>([{id:Math.random(),
       rows:initialFenceData,name:"Fence, Retanige wall, Stone or brick wall",
       group:TablesGroup.BARRIERS_FENCE}]),[])
    const initialGateTable:TableData[]=useMemo(()=>([{id:Math.random(),
        rows:initialGateData,name:"Gates",group:TablesGroup.BARRIERS_GATES}]),[])
    const tableData=useMemo(()=>({
        [TablesGroup.BARRIERS_FENCE]:initialFenceTable,[TablesGroup.BARRIERS_GATES]:initialGateTable}),[])
    return (
        <div>
            <TablesLayout measurementType={MeasurementsType.BARRIERS} isClient queryKeys={[]} tables={tableData} />
        </div>
    );
};

export default Page;
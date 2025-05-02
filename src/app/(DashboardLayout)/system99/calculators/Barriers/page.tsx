"use client";
import React, {useMemo} from 'react';
import {TableData} from "@/app/types/tablesTypes";
import BarriersTables from "@/app/components/tables/TablePages/BariersTables/BariersTables";
import {TablesGroup} from "@/app/types/measurementsTypes";

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
            <BarriersTables tables={tableData} isClient queryKeys={[]}/>
        </div>
    );
};

export default Page;
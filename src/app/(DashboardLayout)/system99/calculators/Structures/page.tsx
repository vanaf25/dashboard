"use client";
import React, {useMemo} from 'react';
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";
import {roofPitchOptions} from "@/app/consts/tables/tables";

const Page = () => {
    const tableData=useMemo(()=>({
      [TablesGroup.STRUCTURES_COVERED]:[
          "Free Standing Cover",
          "Shed",
          "Porch",
          "Pergola"
      ].map(el=>({name:el,customProperties:el==="Pergola" ?
        [{name:"roofPitch",
            label:"Roof Pitch",
            type:"select",options:roofPitchOptions}]:undefined})),
      [TablesGroup.STRUCTURES_CONCRETE]:[{name:"Concrete Patio, Side Walk, Drive Way"}],
      [TablesGroup.STRUCTURES_EXCAVATION]:[{name:"Excavation"}],
      [TablesGroup.STRUCTURES_BUILDING_WALL]:[{name:"Building wall"}],
      [TablesGroup.STRUCTURES_DECK_MEASUREMENTS]:[{name:"Deck mesurments"}],
      [TablesGroup.STRUCTURES_DECK_STAIRS]:[{name:"Deck stairs"}],
    }),[])
    return (
        <div>
            <TablesLayout isClient tables={tableData} queryKeys={[]} measurementType={MeasurementsType.STRUCTURES} />
        </div>
    );
};

export default Page;
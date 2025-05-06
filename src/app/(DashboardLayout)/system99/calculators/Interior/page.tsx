"use client";
import React, { useMemo } from 'react';
import { TableData } from "@/app/types/tablesTypes";
import { MeasurementsType, TablesGroup } from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const roomNames = [
    "Living Room",
    "Dining Room",
    "Bed Room 1",
    "Bed Room 2",
    "Bed Room 3",
    "Bed Room 4",
    "Hall",
    "Bath",
    "Kitchen"
];

const serviceOptions = ["drywall", "flooring", "tile", "paint"];
const closetServiceOptions = ["paint", "replace"];
const trimServiceOptions = ["paint", "stain", "replace"];

const Page = () => {
    // Generate room data with length, width, height and service
    const generateRoomData = () => Array.from({length: 3}, () => ({
        length: 0,
        width: 0,
        height: 0,
        service: "",
        id: Math.random()
    }));

    // Generate trim and casing data
    const generateTrimData = () => Array.from({length: 3}, () => ({
        baseBoardLength: 0,
        chairRailLength: 0,
        crownMoldingLength: 0,
        service: "",
        id: Math.random()
    }));

    // Generate door/window casing data
    const generateDoorWindowData = () => Array.from({length: 3}, () => ({
        size: "",
        service: "",
        id: Math.random()
    }));

    // Generate closet shelving data
    const generateClosetData = () => Array.from({length: 3}, () => ({
        length: 0,
        width: 0,
        height: 0,
        service: "",
        id: Math.random()
    }));
    const roomTables: TableData[] = useMemo(() => (
        roomNames.map((name) => ({
            name,
            rows: JSON.parse(JSON.stringify(generateRoomData())),
            id: Math.random(),
            group: TablesGroup.INTERIOR_ROOM
        }))
    ), []);
    const trimCasingTable: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Trim and Casing",
            rows: generateTrimData(),
            group: TablesGroup.INTERIOR_TRIM_CASING
        }
    ]), []);

    // Door and Window Casing table
    const doorWindowTable: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Door and Window Casing",
            rows: generateDoorWindowData(),
            group: TablesGroup.INTERIOR_DOOR_WINDOW
        }
    ]), []);
    const closetTable: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Closet Shelving",
            rows: generateClosetData(),
            group: TablesGroup.INTERIOR_CLOSET
        }
    ]), []);
    const tableData = useMemo(() => ({
        [TablesGroup.INTERIOR_ROOM]: roomTables,
        [TablesGroup.INTERIOR_TRIM_CASING]: trimCasingTable,
        [TablesGroup.INTERIOR_DOOR_WINDOW]: doorWindowTable,
        [TablesGroup.INTERIOR_CLOSET]: closetTable
    }), [
        roomTables,
        trimCasingTable,
        doorWindowTable,
        closetTable
    ]);

    return (
        <div>
            <TablesLayout
                queryKeys={[]}
                tables={tableData}
                isClient
                measurementType={MeasurementsType.INTERIOR}
            />
        </div>
    );
};

export default Page;
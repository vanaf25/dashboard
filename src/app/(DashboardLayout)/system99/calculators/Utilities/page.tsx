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

const Page = () => {
    const generateRoomData = () => Array.from({length: 3}, () => ({
        length: 0,
        height: 0,
        width: 0,
        id: Math.random()
    }));

    const generateStandardData = () => Array.from({length: 3}, () => ({
        quantity: 0,
        service: "",
        id: Math.random()
    }));
    const generateReplacementData = () => Array.from({length: 3}, () => ({
        quantity: 0,
        item: "",
        id: Math.random()
    }));
    const generateHouseReplacementData = () => Array.from({length: 3}, () => ({
        length: 0,
        width: 0,
        height: 0,
        service: "",
        id: Math.random()
    }));
    const generateHouseItemReplacementData = () => Array.from({length: 3}, () => ({
        quantity: 0,
        service: "",
        id: Math.random()
    }));
    const initialRoomTables: TableData[] = useMemo(() => (
        roomNames.map((name) => ({
            name,
            rows: generateRoomData(),
            id: Math.random(),
            group: TablesGroup.UTILITIES_ROOM
        }))
    ), []);

    // Standard tables
    const initialStandardTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Stand alone service",
            rows: generateStandardData(),
            group: TablesGroup.UTILITIES_STANDARD
        }
    ]), []);

    // Bath replacement tables
    const bathReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Bath Replacement",
            rows: generateRoomData(),
            group: TablesGroup.UTILITIES_BATH_REPLACEMENT
        }
    ]), []);

    // Bath item replacement tables
    const bathItemReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Bath Item Replacement",
            rows: generateReplacementData(),
            group: TablesGroup.UTILITIES_BATH_ITEM_REPLACEMENT
        }
    ]), []);

    // Kitchen replacement tables
    const kitchenReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Kitchen Replacement",
            rows: generateRoomData(),
            group: TablesGroup.UTILITIES_KITCHEN_REPLACEMENT
        }
    ]), []);

    // Kitchen item replacement tables
    const kitchenItemReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Kitchen Item Replacement",
            rows: generateReplacementData(),
            group: TablesGroup.UTILITIES_KITCHEN_ITEM_REPLACEMENT
        }
    ]), []);

    // Accessory item replacement tables
    const accessoryItemReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "Accessory Item Replacement",
            rows: generateReplacementData(),
            group: TablesGroup.UTILITIES_ACCESSORY_ITEM_REPLACEMENT
        }
    ]), []);

    // House replacement tables
    const houseReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "House Replacement",
            rows: generateHouseReplacementData(),
            group: TablesGroup.UTILITIES_HOUSE_REPLACEMENT
        }
    ]), []);

    // House item replacement tables
    const houseItemReplacementTables: TableData[] = useMemo(() => ([
        {
            id: Math.random(),
            name: "House Item Replacement",
            rows: generateHouseItemReplacementData(),
            group: TablesGroup.UTILITIES_HOUSE_ITEM_REPLACEMENT
        }
    ]), []);

    // Combined table data
    const tableData = useMemo(() => ({
        [TablesGroup.UTILITIES_ROOM]: roomNames.map(el=>({name:el})),
        [TablesGroup.UTILITIES_STANDARD]: initialStandardTables,
        [TablesGroup.UTILITIES_BATH_REPLACEMENT]: bathReplacementTables,
        [TablesGroup.UTILITIES_BATH_ITEM_REPLACEMENT]: bathItemReplacementTables,
        [TablesGroup.UTILITIES_KITCHEN_REPLACEMENT]: kitchenReplacementTables,
        [TablesGroup.UTILITIES_KITCHEN_ITEM_REPLACEMENT]: kitchenItemReplacementTables,
        [TablesGroup.UTILITIES_ACCESSORY_ITEM_REPLACEMENT]: accessoryItemReplacementTables,
        [TablesGroup.UTILITIES_HOUSE_REPLACEMENT]: houseReplacementTables,
        [TablesGroup.UTILITIES_HOUSE_ITEM_REPLACEMENT]: houseItemReplacementTables
    }), [
        initialRoomTables,
        initialStandardTables,
        bathReplacementTables,
        bathItemReplacementTables,
        kitchenReplacementTables,
        kitchenItemReplacementTables,
        accessoryItemReplacementTables,
        houseReplacementTables,
        houseItemReplacementTables
    ]);

    return (
        <div>
            <TablesLayout
                queryKeys={[]}
                tables={tableData}
                isClient
                measurementType={MeasurementsType.UTILITIES}
            />
        </div>
    );
};

export default Page;
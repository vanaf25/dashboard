"use client";
import { useMemo } from "react";
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
    const tableData: Record<string, { name: string }[]> = useMemo(() => ({
        [TablesGroup.INTERIOR_ROOM]: roomNames.map(name => ({ name })),
        [TablesGroup.INTERIOR_TRIM_CASING]: [{ name: "Trim and Casing" }],
        [TablesGroup.INTERIOR_DOOR_WINDOW]: [{ name: "Door and Window Casing" }],
        [TablesGroup.INTERIOR_CLOSET]: [{ name: "Closet Shelving" }]
    }), []);

    return (
        <div>
            <TablesLayout
                measurementType={MeasurementsType.INTERIOR}
                isClient
                queryKeys={[]}
                tables={tableData}
            />
        </div>
    );
};

export default Page;

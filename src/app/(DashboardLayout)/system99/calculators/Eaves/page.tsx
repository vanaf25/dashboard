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
        [TablesGroup.EAVES_SOFFIT]: [
            "Front Soffit",
            "Left Soffit",
            "Rear Soffit",
            "Right Soffit"
        ].map(name => ({ name })),
        [TablesGroup.EAVES_FASCIA]:["Front Fascia", "Left Fascia",
            "Rear Fascia", "Right Fascia"].map(el=>({name:el})),
        [TablesGroup.EAVES_PORCH]:[{name:"Porch Ceiling"}],
        [TablesGroup.GUTTER_FRONT]: [{ name: "Gutter Front" }],
        [TablesGroup.DOWNSPOUT_FRONT]: [{ name: "Downspout Front" }],
        [TablesGroup.GUTTER_LEFT]: [{ name: "Left Gutter" }],
        [TablesGroup.DOWNSPOUT_LEFT]: [{ name: "Downspout Left" }],
        [TablesGroup.GUTTER_REAR]: [{ name: "Rear Gutter" }],
        [TablesGroup.DOWNSPOUT_REAR]: [{ name: "Downspout Rear" }],
        [TablesGroup.GUTTER_RIGHT]: [{ name: "Right Gutter" }],
        [TablesGroup.DOWNSPOUT_RIGHT]: [{ name: "Downspout Right" }],
    }), []);

    return (
        <div>
            <TablesLayout
                measurementType={MeasurementsType.UTILITIES}
                isClient
                queryKeys={[]}
                tables={tableData}
            />
        </div>
    );
};

export default Page;

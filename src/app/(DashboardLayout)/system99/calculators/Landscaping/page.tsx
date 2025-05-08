"use client";
import { useMemo } from "react";
import { MeasurementsType, TablesGroup } from "@/app/types/measurementsTypes";
import TablesLayout from "@/app/components/tables/TablesLayout/TablesLayout";

const landscapingTables = [
    { group: TablesGroup.LANDSCAPING_YARD, names: ["Front Yard", "Left Yard", "Rear Yard", "Right Yard"] },
    { group: TablesGroup.LANDSCAPING_FLOWER_BEDS, names: ["Flower Beds"] },
    { group: TablesGroup.LANDSCAPING_SCRUBS, names: ["Srubs, Bushes & Greenary Beds"] },
    { group: TablesGroup.LANDSCAPING_TREES, names: ["Trees"] },
    { group: TablesGroup.LANDSCAPING_IRRIGATION, names: ["Irigation"] },
    { group: TablesGroup.LANDSCAPING_EXCAVATE_GRASS, names: ["Exovate grass and dirt"] },
    { group: TablesGroup.LANDSCAPING_LAWN_MOWING, names: ["Lawn mowing"] },
];

const Page = () => {
    const tableData = useMemo(() => {
        const data: Record<string, { name: string }[]> = {};
        landscapingTables.forEach(({ group, names }) => {
            data[group] = names.map(name => ({ name }));
        });
        return data;
    }, []);

    return (
        <div>
            <TablesLayout
                measurementType={MeasurementsType.LANDSCAPING}
                isClient
                queryKeys={[]}
                tables={tableData}
            />
        </div>
    );
};

export default Page;

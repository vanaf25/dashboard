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
        [TablesGroup.UTILITIES_ROOM]: roomNames.map(name => ({ name })),
        [TablesGroup.UTILITIES_STANDARD]: [{ name: "Stand alone service" }],
        [TablesGroup.UTILITIES_BATH_REPLACEMENT]: [{ name: "Bath Replacement" }],
        [TablesGroup.UTILITIES_BATH_ITEM_REPLACEMENT]: [{ name: "Bath Item Replacement" }],
        [TablesGroup.UTILITIES_KITCHEN_REPLACEMENT]: [{ name: "Kitchen Replacement" }],
        [TablesGroup.UTILITIES_KITCHEN_ITEM_REPLACEMENT]: [{ name: "Kitchen Item Replacement" }],
        [TablesGroup.UTILITIES_ACCESSORY_ITEM_REPLACEMENT]: [{ name: "Accessory Item Replacement" }],
        [TablesGroup.UTILITIES_HOUSE_REPLACEMENT]: [{ name: "House Replacement" }],
        [TablesGroup.UTILITIES_HOUSE_ITEM_REPLACEMENT]: [{ name: "House Item Replacement" }],
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

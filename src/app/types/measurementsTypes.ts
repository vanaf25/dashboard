import {TableData, TableDtoType} from "@/app/types/tablesTypes";

export interface CreateMeasurementsDto{
    type: string;
    userId: string;
    documentId?: string;
    customerId:string;
    tables:TableDtoType[]
}
/*
interface Measurement<T extends Record<string, TableData>> {
    measurementDetails: {
        service: string;
        clientName: string;
    };
    tables: T;
}

interface Row {
    id: number;
    [key: string]: number; // Allows different row properties (length, height, etc.)
}

// Example usage with specific keys
type Tables = {
    siding: Table;
    corners: Table;
};

const exampleMeasurement: Measurement<Tables> = {
    measurementDetails: {
        service: "Paint",
        clientName: "Elon Musk",
    },
    tables: {
        siding: {
            tableName: "Front SIDING",
            rows: [{ id: 106, height: 0, length: 0 }],
            id: 10,
        },
        corners: {
            tableName: "Inside corners",
            rows: [{ id: 142, length12: 0, length12_24: 0 }],
            id: 16,
        },
    },
};
*/
export interface Measurement{
    measurementDetails: {
        service: string;
        clientName: string;
    };
    group:string,
    tables:Record<string,TableData[]>
}
export enum TablesGroup{
    SIDING="siding",
    CORNERS="corners",
    BARRIERS_GATES="barriers_gates",
    BARRIERS_FENCE="barriers_fence",

    UTILITIES_ROOM="utilities_room",
    UTILITIES_STANDARD="utilities_standard",
    UTILITIES_BATH_REPLACEMENT = "bathReplacement",
    UTILITIES_BATH_ITEM_REPLACEMENT = "bathItemReplacement",
    UTILITIES_KITCHEN_REPLACEMENT = "kitchenReplacement",
    UTILITIES_KITCHEN_ITEM_REPLACEMENT = "kitchenItemReplacement",
    UTILITIES_ACCESSORY_ITEM_REPLACEMENT = "accessoryItemReplacement",
    UTILITIES_HOUSE_REPLACEMENT = "houseReplacement",
    UTILITIES_HOUSE_ITEM_REPLACEMENT = "houseItemReplacement",

    EAVES_FASCIA="eaves_fascia",
    EAVES_SOFFIT="eaves_soffit",
    EAVES_PORCH="eaves_porch",

    // New gutter and downspout groups
    GUTTER_FRONT = "gutter_front",
    GUTTER_LEFT = "gutter_left",
    GUTTER_REAR = "gutter_rear",
    GUTTER_RIGHT = "gutter_right",

    DOWNSPOUT_FRONT = "downspout_front",
    DOWNSPOUT_LEFT = "downspout_left",
    DOWNSPOUT_REAR = "downspout_rear",
    DOWNSPOUT_RIGHT = "downspout_right",

    INTERIOR_ROOM = "interior_room",
    INTERIOR_TRIM_CASING = "interior_trim_casing",
    INTERIOR_DOOR_WINDOW = "interior_door_window",
    INTERIOR_CLOSET = "interior_closet",

    LANDSCAPING_YARD="landscaping_yard",
    LANDSCAPING_FLOWER_BEDS="landscaping_flower_beds",
    LANDSCAPING_SCRUBS="landscaping_scrubs",
    LANDSCAPING_TREES="landscaping_trees",
    LANDSCAPING_IRRIGATION = "irrigation",
    LANDSCAPING_EXCAVATE_GRASS = "excavate_grass",
    LANDSCAPING_LAWN_MOWING = "lawn_mowing",
}
export enum MeasurementsType{
    BARRIERS="Barriers",
    EXTERIOR_SIDING="Exterior Siding",
    UTILITIES="utilities",
    EAVES="eaves",
    INTERIOR="interior",
    LANDSCAPING="landscaping"
}
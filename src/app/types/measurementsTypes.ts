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
    tables:{
        [key:string]:TableData[]
    }
}
export enum TablesGroup{
    SIDING="siding",
    CORNERS="corners",
    BARRIERS_GATES="barriers_gates",
    BARRIERS_FENCE="barriers_fence"
}
export enum MeasurementsType{
    BARRIERS="Barriers",
    EXTERIOR_SIDING="Exterior Siding"
}
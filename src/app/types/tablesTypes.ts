import {MutableRefObject, RefObject} from "react";
import { ColDef } from "ag-grid-community";
import {TablesGroup} from "@/app/types/measurementsTypes";

export type TableData<T = Record<string, any>> = {
    name: string;
    key?:string,
    id?: number;
    group?:string;
    rows?: T[];
    properties?:{id:number,name:string,value:string}[]
};
export type ActionTableType = {
    name: string;
    id: number;
    group?:string;
    rows: { [key: string]: any }[];
    ref: MutableRefObject<any>;
    columns: ColDef[];
};
export type TableDtoType={
    columns:{field:string,headerName:string}[],
    rows: { [key: string]: any }[];
    tableName: string;
}
export type TableProperty={
    name:string,
    value?:string
    label:string
    type?:string
    options?:string[]
}
export type TablesColumnsType = {
    [K in (typeof TablesGroup)[keyof typeof TablesGroup]]?: any;
};
export type TalesPropertiesType={
    [K in (typeof TablesGroup)[keyof typeof TablesGroup]]?:TableProperty[]
}
export type TablesPropertiesIntegrated={tableId:number,properties:TableProperty[]}
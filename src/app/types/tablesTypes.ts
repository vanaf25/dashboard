import {MutableRefObject, RefObject} from "react";
import { ColDef } from "ag-grid-community";

export type TableData<T = Record<string, any>> = {
    name: string;
    id?: number;
    group?:string;
    rows?: T[];
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
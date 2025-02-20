import {ListCardElem} from "@/app/components/ReactPdf/PDFListCard/PDFListCard";
import {RefObject} from "react";
import {AgGridReact} from "ag-grid-react";

export enum ElementType {
    H3 = "h3",
    H2 = "h2",
    P = "p",
    SECTION = "section",
    TABLE="table",
    H4="h4",
    IMG="img",
    FLEX="flex",
    ListCard="listCard",
}
export  interface PDFColumn {
    field: string,
    headerName?:string,
    flex?: number,
    [key: string]: any
}
export type AdditionalStyling={[key:string]:string | number }
export interface PDFElem{
    type:ElementType,
    additionalStyling?:AdditionalStyling,
    flexboxElems?:string[]
    content?:string |  string[],
    title?:string,
    rows?:any[],
    tableRef?:RefObject<AgGridReact>
    src?:string,
    columns?:PDFColumn[],
    cardListRows?:ListCardElem[]
}

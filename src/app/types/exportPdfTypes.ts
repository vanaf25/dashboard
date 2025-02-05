export enum ElementType {
    H3 = "h3",
    H2 = "h2",
    P = "p",
    SECTION = "section",
    TABLE="table",
    H4="h4",
    IMG="img"
}
export  interface PDFColumn {
    field: string,
    flex: number,

    [key: string]: any
}
export interface PDFElem{
    type:ElementType,
    content:string,
    title?:string,
    rows?:any[],
    src?:string,
    columns?:PDFColumn[]
}

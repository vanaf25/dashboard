export enum ElementType {
    H3 = "h3",
    H2 = "h2",
    P = "p",
    SECTION = "section"
}
export interface PDFElem{
    type:ElementType,
    content:string,
    title?:string
}
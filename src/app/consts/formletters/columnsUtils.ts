import { ColDef, ValueParserParams } from 'ag-grid-community';
export const generateNumberColumn=(name:string,anotherOptions?:ColDef)=>({flex:1,
    headerName:name.charAt(0).toUpperCase() + name.slice(1),
    field:name,
    editable:true,
    cellEditor: "agNumberCellEditor",
    valueParser: (params:ValueParserParams) => {
        const parsed = parseFloat(params.newValue);
        return isNaN(parsed) ? null : parsed;
    },
    ...(anotherOptions  || {} )})
export const GENERAL_LENGTH_COLUMN=generateNumberColumn("length")
export const GENERAL_WIDTH_COLUMN=generateNumberColumn("width")
export const GENERAL_HEIGHT_COLUMN=generateNumberColumn("height")
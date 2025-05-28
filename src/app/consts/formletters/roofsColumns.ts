import {TablesGroup} from "@/app/types/measurementsTypes";
import {GENERAL_LENGTH_COLUMN, GENERAL_WIDTH_COLUMN} from "@/app/consts/formletters/columnsUtils";
const roofPitchOptions=["Low Pitch",
    "4/12 Pitch",
    "6/12 Pitch",
    "8/12 Pitch",
    "10/12 Pitch"]
export const ROOFS_COLUMNS={
    [TablesGroup.ROOF_MAIN]:[
        {
            headerName: "Zone",
            field: "zone",
            editable: true,
            flex: 1,
            cellEditor: "agTextCellEditor",
        },
        GENERAL_LENGTH_COLUMN,
        GENERAL_WIDTH_COLUMN,
        {
            headerName: "Roof pitch ",
            field: "roofPitch",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: roofPitchOptions,
            }
        }
    ],
    [TablesGroup.ROOF_ASSORYS]:[
        {
            headerName: "Ridge Vent Total Lengths",
            field: "ridgeVentTotalLengths",
            editable: true,
            flex: 1,
            cellEditor: "agNumberCellEditor",
        },
        {
            headerName: "Chimney Flashing",
            field: "chimneyFlashing",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["none", "small", "medium", "large"],
            },
        },
        {
            headerName: "Total Wall Flashing Lengths",
            field: "totalWallFlashingLengths",
            editable: true,
            flex: 1,
            cellEditor: "agNumberCellEditor",
        },
        {
            headerName: "Plumbing Stacks Quantity",
            field: "plumbingStacksQuantity",
            editable: true,
            flex: 1,
            cellEditor: "agNumberCellEditor",
        },
        {
            headerName: "Plumbing Stack Size",
            field: "plumbingStackSize",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["2 inch", "3 inch", "4 inch"],
            },
        },
    ]
}
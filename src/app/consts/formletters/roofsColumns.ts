import {TablesGroup} from "@/app/types/measurementsTypes";

export const ROOFS_COLUMNS={
    [TablesGroup.ROOF_MAIN]:[
        {
            headerName: "Zone",
            field: "zone",
            editable: true,
            flex: 1,
            cellEditor: "agTextCellEditor",
        },
        {
            headerName: "Length",
            field: "length",
            editable: true,
            flex: 1,
            cellEditor: "agNumberCellEditor",
        },
        {
            headerName: "Width",
            field: "width",
            editable: true,
            flex: 1,
            cellEditor: "agNumberCellEditor",
        },
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
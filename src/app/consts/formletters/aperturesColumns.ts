import {TablesGroup} from "@/app/types/measurementsTypes";
import {
    GENERAL_HEIGHT_COLUMN,
    GENERAL_WIDTH_COLUMN,
    generateNumberColumn
} from "@/app/consts/formletters/columnsUtils";

export const APERTURES_COLUMNS= {
    [TablesGroup.APERTURES_DOORS]: [{
        headerName: "LOCATION #",
        field: "location",
        editable: true,
        flex: 1,
        cellEditor: "agTextCellEditor",
    },
      generateNumberColumn("quantity"), GENERAL_WIDTH_COLUMN,
      GENERAL_HEIGHT_COLUMN,
        {
            headerName: "Type",
            field: "type",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: [
                    "None",
                    "Single Hung",
                    "Double Hung",
                    "Picture",
                    "Awning",
                    "Casment Left",
                    "Casemet Right",
                    "Slider",
                    "Double Slider",
                ],
            },
        },
        {
            headerName: "Nail Fn",
            field: "nailFn",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Yes", "None", "Removable"],
            },
        },
        {
            headerName: "Screen",
            field: "screen",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["None", "Full window", "Half window"],
            },
        },
        {
            headerName: "Mullins",
            field: "mullins",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Yes", "No"],
            },
        },
        {
            headerName: "Glass Type",
            field: "glassType",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Clear", "Tinted", "Frosted", "Tempered"],
            },
        },
        {
            headerName: "Glass Style",
            field: "glassStyle",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["None", "Rain", "Frost", "Reeded", "Seeded", "Custom"],
            },
        },
        {
            headerName: "Custom",
            field: "custom",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["YES", "NO"],
            },
        }
    ],
    [TablesGroup.APERTURES_WINDOWS]:[{
        headerName: "LOCATION #",
        field: "location",
        editable: true,
        flex: 1,
        cellEditor: "agTextCellEditor",
    },
        generateNumberColumn("quantity"),
        GENERAL_WIDTH_COLUMN,
        GENERAL_HEIGHT_COLUMN,
        {
            headerName: "Type",
            field: "type",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Single", "Double", "Sliding", "French"],
            },
        },
        {
            headerName: "Swing",
            field: "swing",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Left hand", "Right Hand"],
            },
        },
        {
            headerName: "Windows",
            field: "windows",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["Full", "Half", "Quarter", "none", "custom", "Windows"],
            },
        },
        {
            headerName: "Nail Fn",
            field: "nailFn",
            editable: true,
            flex: 1,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["YES", "None", "Removable"],
            },
        },
    ]
}
console.log('columns:',APERTURES_COLUMNS);
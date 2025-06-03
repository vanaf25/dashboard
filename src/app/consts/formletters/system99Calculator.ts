import {TablesGroup} from "@/app/types/measurementsTypes";
import {INTERIOR_COLUMNS} from "@/app/consts/formletters/interiorColumns";
import {EAVES_COLUMNS} from "@/app/consts/formletters/eavesColumns";
import {UTILITIES_COLUMNS} from "@/app/consts/formletters/utilitiesColumns";
import {BARRIERS_COLUMNS} from "@/app/consts/formletters/barriersColumns";
import {LANDSCAPING_COLUMNS} from "@/app/consts/formletters/landscapingColumns";
import {ROOFS_COLUMNS} from "@/app/consts/formletters/roofsColumns";
import {STRUCTURES_COLUMNS} from "@/app/consts/formletters/structuresColumns";
import {APERTURES_COLUMNS} from "@/app/consts/formletters/aperturesColumns";
import {GENERAL_HEIGHT_COLUMN, GENERAL_LENGTH_COLUMN} from "@/app/consts/formletters/columnsUtils";


const valueParser = (params: any) => params.newValue === "" ? 0 : Number(params.newValue);

/*
export const sidingColumns = [
    {
        headerName: 'Length',
        cellDataType: "number",
        cellEditor: 'agNumberCellEditor',
        field: 'length',
        editable: true,
        valueParser: valueParser,
    },
    {
        headerName: 'Height',
        cellDataType: "number",
        cellEditor: 'agNumberCellEditor',
        field: 'height',
        editable: true,
        valueParser: valueParser
    },
    {
        headerName: "Height (inches) (C)",
        field: "height_in_inches",
        editable: false,
        valueGetter: (params: ValueGetterParams) => params.data.height * 12,
    },
    {
        headerName: "Total Sq. Footage (Siding) (D)",
        field: "total_sq_footage_siding",
        editable: false,
        valueGetter: (params: ValueGetterParams) => params.data.length * params.data.height,
    },
    {
        headerName: "Length (Hardie) (E)",
        field: "length_hardie",
        editable: false,
        valueGetter: (params: ValueGetterParams) => params.data.length / 12,
    },
    {
        headerName: '4" Reveal Rows (#) (F)',
        field: 'four_inch_reveal_rows',
        editable: false,
        valueGetter: (params: ValueGetterParams) => (params.data.height * 12) / 4,
    },
    {
        headerName: '7" Reveal Rows (#) (G)',
        field: 'seven_inch_reveal_rows',
        editable: false,
        valueGetter: (params: ValueGetterParams) => (params.data.height * 12) / 7,
    },
    {
        headerName: '10.5" Reveal Rows (#) (H)',
        field: 'ten_half_inch_reveal_rows',
        editable: false,
        valueGetter: (params: ValueGetterParams) => (params.data.height * 12) / 10.25,
    },
    {
        headerName: '4" Planks (#) (I)',
        field: 'four_inch_planks',
        editable: false,
        valueGetter: (params: ValueGetterParams) => (params.data.length / 12) * 8,
    },
    {
        headerName: '7" Planks (#) (J)',
        field: 'seven_planks',
        editable: false,
        valueGetter: (params: ValueGetterParams) =>
            (params.data.length / 12) * ((params.data.height * 12) / 7),
    },
    {
        headerName: '10.5" Planks (#) (K)',
        field: 'ten_half_inch_planks',
        editable: false,
        valueGetter: (params: ValueGetterParams) =>
            (params.data.length / 12) * ((params.data.height * 12) / 10.25),
    },
    {
        headerName: 'Length Vinyl',
        field: 'length_vinyl',
        valueGetter: (params: ValueGetterParams) => params.data.length / 16,
    },
    {
        headerName: '12 Rows',
        valueGetter: (params: ValueGetterParams) => params.data.height,
        field: 'twelve_rows',
        sortable: false,
        filter: false,
        editable: false,
    },
    {
        headerName: '7 Rows',
        valueGetter: (params: ValueGetterParams) => params.data.height_in_inches / 7,
        field: 'seven_rows',
        sortable: false,
        filter: false,
        editable: false,
    },
    {
        headerName: 'Double 6',
        valueGetter: (params: ValueGetterParams) =>
            params.data.length_vinyl * params.data.twelve_rows,
        field: 'double_six',
    },
    {
        headerName: 'Dutch Lap',
        valueGetter: (params: ValueGetterParams) =>
            params.data.length_vinyl * params.data.twelve_rows,
        field: 'dutch_lap',
        sortable: false,
        filter: false,
        editable: false,
    },
    {
        headerName: '7 Rows (Dutch Lap)',
        valueGetter: (params: ValueGetterParams) =>
            params.data.length_vinyl * params.data.seven_rows,
        field: 'seven_rows_repeat',
        sortable: false,
        filter: false,
        editable: false,
    },
];
*/
export const EXTERIOR_SIDING_COLUMNS=[
    GENERAL_LENGTH_COLUMN,
    GENERAL_HEIGHT_COLUMN
]
    .map((col) => ({ ...col, flex: 1 }))
export const CORNERS_COLUMNS=[
    {
        headerName: '12 feet and under',
        field: 'length12',
        flex: 1,
        cellEditor: 'agNumberCellEditor',
        editable: true,
    },
    {
        headerName: 'between 12 & 24 long',
        field: 'length12_24',
        flex: 1,
        cellEditor: 'agNumberCellEditor',
        editable: true,
    },
]
export const COLUMNS={
    ...EAVES_COLUMNS,
    ...UTILITIES_COLUMNS,
    ...BARRIERS_COLUMNS,
    ...INTERIOR_COLUMNS,
    ...LANDSCAPING_COLUMNS,
    ...ROOFS_COLUMNS,
    ...STRUCTURES_COLUMNS,
    ...APERTURES_COLUMNS,
  [TablesGroup.SIDING]: EXTERIOR_SIDING_COLUMNS,
  [TablesGroup.CORNERS]: CORNERS_COLUMNS,
}
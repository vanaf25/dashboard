import {ValueGetterParams} from 'ag-grid-community'
import {MeasurementsType, TablesGroup} from "@/app/types/measurementsTypes";

const valueParser = (params: any) => params.newValue === "" ? 0 : params.newValue;
const selectValueParser = (params: any) => params.newValue === 0 ? "" : params.newValue;

const selectValueGetter = (params: ValueGetterParams) => {
  const value = params.data[params.colDef.field as string];
  console.log('val:',value == 0 ? "" : value);
  return value == 0 ? "" : value;
};

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
export const EXTERIOR_SIDING_COLUMNS=sidingColumns
    .filter((c) => c.field === "length" || c.field === "height")
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

const PLUMBING_COLUMNS = [
  {
    headerName: 'Length',
    field: 'length',
    editable: true,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Width',
    field: 'width',
    editable: true,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Height',
    field: 'height',
    editable: true,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Service',
    field: 'service',
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: [
        'replace all pipes',
        'replace water lines only'
      ],
    },
  },
]
 const REPLACEMENT_COLUMNS = [
  {
    headerName: 'Quantity',
    field: 'quantity',
    editable: true,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Item',
    field: 'item',
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: ['toilet', 'sink', 'tubshower', 'fixtures'],
    },
  },
];

export const BARRIERS_COLUMNS={
  [TablesGroup.BARRIERS_FENCE]:[
    {
      headerName: 'Length',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'length',
      editable: true,
    },
    {
      headerName: 'Height',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'height',
      editable: true,
    },
    {
      headerName: 'Corners',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'corners',
      editable: true,
    }
  ],
  [TablesGroup.BARRIERS_GATES]: [
    {
      headerName: 'Gate Quantity',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'gateQuantity',
      editable: true,
      flex:1,
      cellEditorParams: { min: 0, precision: 0 }
    },
    {
      flex:1,
      headerName: 'Gate Size',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'gateSize',
      editable: true,
      cellEditorParams: { min: 0, step: 0.1 }
    }
  ]
}
export const UTILITIES_COLUMNS = {
  [TablesGroup.UTILITIES_ROOM]: [
    {
      headerName: 'Length',
      field: 'length',
      editable: true,
      flex: 1,
      type: 'numberColumn',
      cellEditor: "agNumberCellEditor",
    },
    {
      headerName: 'Width',
      flex: 1,
      field: 'width',
      editable: true,
      type: 'numberColumn',
      cellEditor: "agNumberCellEditor",
    },
    {
      headerName: 'Height',
      field: 'height',
      editable: true,
      type: 'numberColumn',
      flex: 1,
      cellEditor: "agNumberCellEditor",
    },
  ],
  [TablesGroup.UTILITIES_STANDARD]: [
    {
      headerName: 'Quantity',
      field: 'quantity',
      editable: true,
      flex: 1,
      type: 'numberColumn',
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Service',
      field: 'service',
      flex: 1,
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          'replace outlets',
          'replace service panel',
          'replace fuse',
          'replace lights',
          'add outlet or switch',
          'add light',
        ],
      },
    },
  ],
  [TablesGroup.UTILITIES_BATH_REPLACEMENT]: PLUMBING_COLUMNS,
  [TablesGroup.UTILITIES_BATH_ITEM_REPLACEMENT]: REPLACEMENT_COLUMNS,
  [TablesGroup.UTILITIES_KITCHEN_REPLACEMENT]: PLUMBING_COLUMNS,
  [TablesGroup.UTILITIES_KITCHEN_ITEM_REPLACEMENT]: [
    {
      headerName: 'Quantity',
      field: 'quantity',
      editable: true,
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Item',
      field: 'item',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['sink', 'Ice maker', 'water filter', 'fixtures'],
      },
    },
  ],
  [TablesGroup.UTILITIES_ACCESSORY_ITEM_REPLACEMENT]: [
    {
      headerName: 'Quantity',
      field: 'quantity',
      editable: true,
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Item',
      field: 'item',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['water heater', 'whole house water filter', 'hose bib'],
      },
    },
  ],
  [TablesGroup.UTILITIES_HOUSE_REPLACEMENT]: [
    {
      headerName: 'Length',
      field: 'length',
      editable: true,
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Width',
      field: 'width',
      editable: true,
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Height',
      field: 'height',
      editable: true,
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Service',
      field: 'service',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          'install new system',
          'replace existing system',
          'replace air handler and condensor only',
        ],
      },
    },
  ],
  [TablesGroup.UTILITIES_HOUSE_ITEM_REPLACEMENT]: [
    {
      headerName: 'Quantity',
      field: 'quantity',
      editable: true,
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Service',
      field: 'service',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      valueGetter: selectValueGetter,
      valueParser: selectValueParser,
      cellEditorParams: {
        values: [
          'replace rejesters',
          'add 25ft of line',
          'replace plenum',
          'replace termostat',
          'replace blower motor',
          'clean system',
          'replace water lines only',
        ],
      },
    },
  ],
};
export const GUTTER_COLUMNS=[
  {
    headerName: 'Length',
    field: 'length',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Inside Corners',
    field: 'insideCorners',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Outside Corners',
    field: 'outsideCorners',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'End Caps',
    field: 'endCaps',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Left, Right or Pair',
    field: 'orientation',
    editable: true,
    flex: 1,
    cellEditor: 'agSelectCellEditor',
    cellEditorParams: {
      values: ['Left', 'Right', 'Pair'],
    },
  },
];
export const DOWNSPOUT_COLUMNS=[
  {
    headerName: 'Length',
    field: 'length',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'A Elbow',
    field: 'aElbow',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'B Elbow',
    field: 'bElbow',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: '30 degree elbow',
    field: 'thirtyDegreeElbow',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
  {
    headerName: 'Drain Tile Connect',
    field: 'drainTileConnect',
    editable: true,
    type: 'numberColumn',
    flex: 1,
    cellEditor: 'agNumberCellEditor',
  },
]
export const EAVES_COLUMNS={
    [TablesGroup.EAVES_SOFFIT]:[
        {
            headerName: 'Length',
            field: 'length',
            editable: true,
          flex:1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Size',
            field: 'size',
            editable: true,
            flex:1,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['6', '8', '10', '12'],
            },
        }
    ],
    [TablesGroup.EAVES_FASCIA]:[
        {
            headerName: 'Length',
            field: 'length',
          flex:1,
            editable: true,
            cellEditor: 'agNumberCellEditor',
        },
        {
        headerName: 'Size',
        field: 'size', flex:1,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: ['12 or less', '18', '24', '36', '48'],
        },
    },],
    [TablesGroup.EAVES_PORCH]:[
      {
        headerName: 'Location',
        field: 'location',
        editable: true,
        cellEditor: "agTextCellEditor",
        flex: 1,
      },
      {
        headerName: 'Length',
        field: 'length',
        editable: true,
        type: 'numberColumn',
        flex: 1,
        cellEditor: 'agNumberCellEditor',
      },
      {
        headerName: 'Width',
        field: 'width',
        editable: true,
        type: 'numberColumn',
        flex: 1,
        cellEditor: 'agNumberCellEditor',
      },
      {
        headerName: 'Height',
        field: 'height',
        editable: true,
        flex: 1,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['1st story', '2nd story', '3rd story'],
        },
      },
    ],
    [TablesGroup.GUTTER_FRONT]:GUTTER_COLUMNS,
  [TablesGroup.GUTTER_LEFT]:GUTTER_COLUMNS,
  [TablesGroup.GUTTER_REAR]:GUTTER_COLUMNS,
  [TablesGroup.GUTTER_RIGHT]:GUTTER_COLUMNS,
  [TablesGroup.DOWNSPOUT_FRONT]:DOWNSPOUT_COLUMNS,
  [TablesGroup.DOWNSPOUT_LEFT]:DOWNSPOUT_COLUMNS,
  [TablesGroup.DOWNSPOUT_REAR]:DOWNSPOUT_COLUMNS,
  [TablesGroup.DOWNSPOUT_RIGHT]:DOWNSPOUT_COLUMNS,
}
export const COLUMNS={
    ...EAVES_COLUMNS,
    ...UTILITIES_COLUMNS,
    ...BARRIERS_COLUMNS,
  [TablesGroup.SIDING]: EXTERIOR_SIDING_COLUMNS,
  [TablesGroup.CORNERS]: CORNERS_COLUMNS,
}
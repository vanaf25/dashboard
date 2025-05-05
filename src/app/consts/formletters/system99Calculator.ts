import { ValueGetterParams } from 'ag-grid-community'
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
  fence:[
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
  gates: [
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
export const UTILITIES_COLUMNS ={
  rooms:[
    {
      headerName: 'Length',
      field: 'length',
      editable: true,
      flex:1,
      type: 'numberColumn',
      cellEditor:"agNumberCellEditor"
    },
    {
      headerName: 'Width',
      flex:1,
      field: 'width',
      editable: true,
      type: 'numberColumn',
      cellEditor:"agNumberCellEditor"
    },
    {
      headerName: 'Height',
      field: 'height',
      editable: true,
      type: 'numberColumn',
      flex:1,
      cellEditor:"agNumberCellEditor"
    },
  ],
  standardAlone:[
    {
      headerName: 'Quantity',
      field: 'quantity',
      editable: true,
      flex:1,
      type: 'numberColumn',
      cellEditor: 'agNumberCellEditor',
    },
    {
      headerName: 'Service',
      field: 'service',
      flex:1,
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
  bathReplacement:PLUMBING_COLUMNS,
  bathItemReplacement:REPLACEMENT_COLUMNS,
  kitchenReplacement:PLUMBING_COLUMNS,
 kitchenItemReplacement: [
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
     }
   }
 ],
 accessoryItemReplacement:[
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
  houseReplacement:[
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
          "replace existing system",
          "replace air handler and condensor only"
        ],
      },
    },
  ],
 houseItemReplacement:[
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
     valueGetter:selectValueGetter,
     valueParser:selectValueParser,
     cellEditorParams: {
       values: [
         'replace rejesters',
         "add 25ft of line",
         "replace plenum",
         "replace termostat",
         "replace blower motor",
         "clean system",
         'replace water lines only'
       ],
     },
   },
 ]
}
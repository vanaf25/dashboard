export const sidingColumns= [
  {
    headerName: 'Length',
    cellDataType: "number",
    cellEditor: 'agNumberCellEditor',
    field: 'length',
    editable: true,
  },
  {
    headerName: 'Height',
    cellDataType: "number",
    cellEditor: 'agNumberCellEditor',
    field: 'height',
    editable: true,
  },
  {
    headerName: "Height (inches) (C)",
    field: "height_in_inches", // Matching the column name
    editable: false,
    valueGetter: (params) => params.data.height * 12
  },
  {
    headerName: "Total Sq. Footage (Siding) (D)",
    field: "total_sq_footage_siding", // Matching the column name
    editable: false,
    valueGetter: (params) => params.data.length * params.data.height,
  },
  {
    headerName: "Length (Hardie) (E)",
    field: "length_hardie", // Matching the column name
    editable: false,
    valueGetter: (params) => params.data.length / 12
  },
  {
    headerName: '4" Reveal Rows (#) (F)',
    field: 'four_inch_reveal_rows', // Matching the column name
    editable: false,
    valueGetter: (params) => (params.data.height * 12) / 4
  },
  {
    headerName: '7" Reveal Rows (#) (G)',
    field: 'seven_inch_reveal_rows', // Matching the column name
    editable: false,
    valueGetter: (params) => (params.data.height * 12) / 7
  },
  {
    headerName: '10.5" Reveal Rows (#) (H)',
    field: 'ten_half_inch_reveal_rows', // Matching the column name
    editable: false,
    valueGetter: (params) => (params.data.height * 12) / 10.25
  },
  {
    headerName: '4" Planks (#) (I)',
    field: 'four_inch_planks', // Matching the column name
    editable: false,
    valueGetter: (params) => (params.data.length / 12) * 8
  },
  {
    headerName: '7" Planks (#) (J)',
    field: 'seven_planks', // Matching the column name
    editable: false,
    valueGetter: (params) => (params.data.length / 12) * ((params.data.height * 12) / 7)
  },
  {
    headerName: '10.5" Planks (#) (K)',
    field: 'ten_half_inch_planks', // Matching the column name
    editable: false,
    valueGetter: (params) => (params.data.length / 12) * ((params.data.height * 12) / 10.25)
  },
  { headerName: 'Length Vinyl',
    field: 'length_vinyl',
    valueGetter:(params)=>params.data.length/16 },
  { headerName: '12 Rows',valueGetter:(params)=>params.data.height,field: 'twelve_rows', sortable: false, filter: false, editable: false },
  { headerName: '7 Rows',
    valueGetter:(params)=>params.data.height_in_inches/7,
    field: 'seven_rows', sortable: false, filter: false, editable: false },
  { headerName: 'Double 6',valueGetter:(params)=>params.data.length_vinyl*params.data.twelve_rows,
    field: 'double_six', },
  { headerName: 'Dutch Lap'
    ,valueGetter:(params)=>params.data.length_vinyl*params.data.twelve_rows
    , field: 'dutch_lap', sortable: false, filter: false, editable: false },
  { headerName: '7 Rows (Dutch Lap)',
    valueGetter:(params)=>params.data.length_vinyl*params.data.seven_rows,
    field: 'seven_rows_repeat', sortable: false, filter: false, editable: false }
]

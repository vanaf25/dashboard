import {TablesGroup} from "@/app/types/measurementsTypes";
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
                values: ['6ft', '8ft', '10ft', '12ft'],
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
                values: ['12 or less', '18ft', '24ft', '36ft', '48ft'],
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
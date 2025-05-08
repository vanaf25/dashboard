import {TablesGroup} from "@/app/types/measurementsTypes";
import {ValueGetterParams} from 'ag-grid-community'
const selectValueParser = (params: any) => params.newValue === 0 ? "" : params.newValue;
const selectValueGetter = (params: ValueGetterParams) => {
    const value = params.data[params.colDef.field as string];
    return value == 0 ? "" : value;
};
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
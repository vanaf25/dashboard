import {TablesGroup} from "@/app/types/measurementsTypes";
const serviceOptions = ["drywall", "flooring", "tile", "paint"];
const closetServiceOptions = ["paint", "replace"];
const trimServiceOptions = ["paint", "stain", "replace"];
export const INTERIOR_COLUMNS = {
    [TablesGroup.INTERIOR_ROOM]: [
        {
            headerName: 'Length',
            field: 'length',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Width',
            field: 'width',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Height',
            field: 'height',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Service',
            field: 'service',
            editable: true,
            flex: 1,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: serviceOptions,
            },
        }
    ],
    [TablesGroup.INTERIOR_TRIM_CASING]: [
        {
            headerName: 'Base board length',
            field: 'baseBoardLength',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Chair rail length',
            field: 'chairRailLength',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Crown Molding length',
            field: 'crownMoldingLength',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Service',
            field: 'service',
            editable: true,
            flex: 1,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: trimServiceOptions,
            },
        }
    ],
    [TablesGroup.INTERIOR_DOOR_WINDOW]: [
        {
            headerName: 'Size of door or window',
            field: 'size',
            editable: true,
            flex: 1,
            cellEditor: 'agTextCellEditor',
        },
        {
            headerName: 'Service',
            field: 'service',
            editable: true,
            flex: 1,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: trimServiceOptions,
            },
        }
    ],
    [TablesGroup.INTERIOR_CLOSET]: [
        {
            headerName: 'Length',
            field: 'length',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Width',
            field: 'width',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Height',
            field: 'height',
            editable: true,
            flex: 1,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Service',
            field: 'service',
            editable: true,
            flex: 1,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: closetServiceOptions,
            },
        }
    ]
};
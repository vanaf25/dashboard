import {TablesGroup} from "@/app/types/measurementsTypes";

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
import {TablesGroup} from "@/app/types/measurementsTypes";
const serviceOptions = [
    'Hard Scape',
    'Pavement',
    'Mulch & Dirt',
    'Grass & Turf',
    'Garden'
];
const generateColumns=(options:string[],dropdownName="Service",idName="Zone")=>([
    { headerName: idName, field: idName.toLowerCase(), editable: true, flex: 1, width: 90 },
    {
        headerName: 'Length',
        field: 'length',
        editable: true,
        cellEditor: 'agNumberCellEditor',
        flex: 1
    },
    {
        headerName: 'Width',
        field: 'width',
        editable: true,
        cellEditor: 'agNumberCellEditor',
        flex: 1
    },
    {
        headerName: dropdownName,
        field: dropdownName.toLowerCase(),
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: options,
        },
        flex: 1
    }
])

export const LANDSCAPING_COLUMNS={
    [TablesGroup.LANDSCAPING_YARD]:generateColumns(serviceOptions),
    [TablesGroup.LANDSCAPING_FLOWER_BEDS]:generateColumns(["small flower line",  "large flower line", "scatered flowers"]),
    [TablesGroup.LANDSCAPING_SCRUBS]:generateColumns([
        'Low Shrubs',
        'Short Bush Line',
        'Large Shrubs', 'Large Bush Line',
        'Scattered Shrubs', 'Greenery']),
    [TablesGroup.LANDSCAPING_TREES]:[
    {
        headerName: 'Location #',
        field: 'location',
        editable: true,
        flex: 1,
    },
    {
        headerName: 'Quantity',
        field: 'quantity',
        editable: true,
        cellEditor: 'agNumberCellEditor',
        flex: 1,
    },
    {
        headerName: 'Temperature Zone',
        field: 'temperatureZone',
        editable: true,
        flex: 1,
    },
    {
        headerName: 'Excavation for Placement',
        field: 'excavation',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: ['Large Tree', 'Medium Tree', 'Small bush or Tree'],
        },
        flex: 1,
    }],
    [TablesGroup.LANDSCAPING_IRRIGATION]:generateColumns(['Drip Irrigation', 'Garden Irrigation', 'Surface Irrigation'],"Type","Location"),
    [TablesGroup.LANDSCAPING_EXCAVATE_GRASS]:[
        {
            headerName: 'Location #',
            field: 'location',
            flex: 1,
            editable: true,
            cellEditor: 'agTextCellEditor',
        },
        {
            headerName: 'Length',
            field: 'length',
            flex: 1,
            editable: true,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Width',
            field: 'width',
            flex: 1,
            editable: true,
            cellEditor: 'agNumberCellEditor',
        },
        {
            headerName: 'Debth in inches',
            field: 'debth',
            flex: 1,
            editable: true,
            cellEditor: 'agNumberCellEditor',
        },
    ],
    [TablesGroup.LANDSCAPING_LAWN_MOWING]:generateColumns(["low grass", "medum grass", "high grass"],"zones")
}
import {TablesGroup} from "@/app/types/measurementsTypes";

export const STRUCTURES_COLUMNS={
    [TablesGroup.STRUCTURES_COVERED]:[ {
        headerName: "Length",
        field: "length",
        editable: true,
        cellEditor: "agNumericCellEditor",
        flex:1,
        filter: "agNumberColumnFilter"
    },
        {
            headerName: "Width",
            field: "width",
            editable: true,
            cellEditor: "agNumericCellEditor",
            flex:1,
            filter: "agNumberColumnFilter"
        },
        {
            headerName: "Height",
            field: "height",
            editable: true,
            cellEditor: "agNumericCellEditor",
            filter: "agNumberColumnFilter",
            flex:1
        }],
  [TablesGroup.STRUCTURES_CONCRETE]:[
      {
          headerName: "Length",
          field: "length",
          editable: true,
          cellEditor: "agNumericCellEditor",
          filter: "agNumberColumnFilter"
      },
      {
          headerName: "Width",
          field: "width",
          editable: true,
          cellEditor: "agNumericCellEditor",
          filter: "agNumberColumnFilter"
      },
      {
          headerName: "Height off Ground (inches)",
          field: "heightOffGround",
          editable: true,
          cellEditor: "agNumericCellEditor",
          filter: "agNumberColumnFilter"
      },
      {
          headerName: "Surface Thickness (in)",
          field: "surfaceThickness",
          editable: true,
          cellEditor: "agSelectCellEditor",
          cellEditorParams: {
              values: ["1.5in", "1.75in", "2in", "2.5in", "3in", "4in"]
          }
      }
  ],
  [TablesGroup.STRUCTURES_EXCAVATION]:[
      { headerName: "Length", field: "length", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
      { headerName: "Width", field: "width", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
      { headerName: "Depth", field: "depth", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" }
  ],
   [TablesGroup.STRUCTURES_BUILDING_WALL]:[
       { headerName: "Length", field: "length", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
       { headerName: "Height", field: "height", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
       { headerName: "Corner", field: "corner", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" }
   ],
    [TablesGroup.STRUCTURES_DECK_MEASUREMENTS]:[
        {
            headerName: "Length",
            field: "length",
            editable: true,
            cellEditor: "agNumericCellEditor",
        },
        {
            headerName: "Width",
            field: "width",
            editable: true,
            cellEditor: "agNumericCellEditor",
        },
        {
            headerName: "Height",
            field: "height",
            editable: true,
            cellEditor: "agNumericCellEditor",

        },
        {
            headerName: "Railing",
            field: "railing",
            editable: true,
            cellEditor: "agNumericCellEditor",
        },
        {
            headerName: "Deck Under Skirting",
            field: "deckUnderSkirting",
            editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: { values: ["YES", "NO"] }
        }
    ],
    [TablesGroup.STRUCTURES_DECK_STAIRS]:[
    { headerName: "Length of steps", field: "lengthOfSteps", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
    { headerName: "Width of steps", field: "widthOfSteps", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
    { headerName: "Railing", field: "railing", editable: true, cellEditor: "agSelectCellEditor", cellEditorParams: { values: ["none", "both sides", "one side only"] } },
    { headerName: "Deck seats", field: "deckSeats", editable: true, cellEditor: "agNumericCellEditor", filter: "agNumberColumnFilter" },
    { headerName: "Size", field: "size", editable: true, cellEditor: "agSelectCellEditor", cellEditorParams: { values: ["Small", "Medium", "Large"] } }
],
}
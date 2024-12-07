"use client";
import {useMemo, useState} from 'react';
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Cover = () => {
  const columnDefs =  useMemo(()=>([
    { headerName: 'Length',cellDataType: "number",cellEditor: 'agNumberCellEditor', field: 'length', editable: true,flex:1 },
    { headerName: 'Width',cellDataType: "number",cellEditor: 'agNumberCellEditor', field: 'width', editable: true,flex:1 }
  ]),[])
  const [roofPitch, setRoofPitch] = useState('');
  const [coverHeight, setCoverHeight] = useState('');
  return (
    <div>
      <TableName>
        Cover
      </TableName>
      <Table columns={columnDefs} rows={[
        { length: 10, width: 10 },
        { length: 10, width:10 },
        { length: 10, width: 10 },
        { length: 10, width: 10 },
        { length: 10, width: 10 },
        { length: 10, width: 10 },
      ]}/>
      <Box sx={{ display: 'flex', flexDirection: 'column',mb:2, gap: 2, width: 300 }}>
      <TextField
        label="Roof Pitch"
        variant="outlined"
        value={roofPitch}
        onChange={(e) => setRoofPitch(e.target.value)}
        type="number" // Use number type for pitch
        InputProps={{
          endAdornment: <span>°</span>, // Optional: Add degree symbol
        }}
      />
      <TextField
        label="Cover Height"
        variant="outlined"
        value={coverHeight}
        onChange={(e) => setCoverHeight(e.target.value)}
        type="number" // Use number type for height
        InputProps={{
          endAdornment: <span>m</span>, // Optional: Add unit symbol (e.g., meters)
        }}
      />
    </Box>
      <TableName>
        Soffit
      </TableName>
      <Table withOutMargin columns={[
        {
          headerName: 'Style',
          cellDataType: 'string',
          cellEditor: 'agTextCellEditor',
          field: 'style',
          editable: true,
          flex: 1,
        },
        {
          headerName: 'Ceiling length in feet',
          cellDataType: 'number',
          cellEditor: 'agNumberCellEditor',
          field: 'ceilingLengthFeet',
          editable: true,
          flex: 1,
        },
        {
          headerName: 'Ceiling width in feet',
          cellDataType: 'number',
          cellEditor: 'agNumberCellEditor',
          field: 'ceilingWidthFeet',
          editable: true,
          flex: 1,
        }
      ]} rows={[
        { style: 'Solid Non Vented', ceilingLengthFeet: null, ceilingWidthFeet: null },
        { style: 'Open no paint', ceilingLengthFeet: null, ceilingWidthFeet: null },
        { style: 'Open Painted', ceilingLengthFeet: null, ceilingWidthFeet: null },
      ]}/>
      <div  style={{height:95,marginBottom:20}} className={"ag-theme-quartz"}>
        <AgGridReact domLayout={"autoHeight"}
                     columnDefs={[
                       {
                         headerName: 'Over hang Length in feet',
                         cellDataType: 'string',
                         cellEditor: 'agTextCellEditor',
                         field: 'style',
                         editable: true,
                         flex: 1,
                       },
                       {
                         headerName: 'Over hang Width in inches',
                         cellDataType: 'number',
                         cellEditor: 'agNumberCellEditor',
                         field: 'ceilingLengthFeet',
                         editable: true,
                         flex: 1,
                       },
                     ]} rowData={[
          { style: '', ceilingLengthFeet: null, },
        ]}/>
      </div>

      <Table columns={[
        {
          headerName: 'Posts & Beams',
          cellDataType: 'string',
          cellEditor: 'agTextCellEditor',
          field: 'postsAndBeams',
          editable: true,
          flex: 1,
        },
        {
          headerName: 'Quantity',
          cellDataType: 'number',
          cellEditor: 'agNumberCellEditor',
          field: 'quantity',
          editable: true,
          flex: 1,
        }
      ]} rows={[
        { postsAndBeams: 'blocking 2x4x12', quantity: null },
        { postsAndBeams: 'blocking 2x6x12', quantity: null },
        { postsAndBeams: '2x8x12', quantity: null },
        { postsAndBeams: '2x12x12', quantity: null },
        { postsAndBeams: '4x4x8', quantity: null },
        { postsAndBeams: '4x4x12', quantity: null },
        { postsAndBeams: '4x6x12', quantity: null },
      ]} />
      <TableName>
        Cedar Posts & Beams
      </TableName>
      <Table columns={[
        {
          headerName: 'Posts & Beams',
          cellDataType: 'string',
          cellEditor: 'agTextCellEditor',
          field: 'postsAndBeams',
          editable: true,
          flex: 1,
        },
        {
          headerName: 'Quantity',
          cellDataType: 'number',
          cellEditor: 'agNumberCellEditor',
          field: 'quantity',
          editable: true,
          flex: 1,
        }
      ]} rows={[
        { postsAndBeams: '2x12x12', quantity: null },
        { postsAndBeams: '6x6x8', quantity: null },
        { postsAndBeams: '6x6x12', quantity: null }
      ]}/>
    </div>
  );
};

export default Cover;

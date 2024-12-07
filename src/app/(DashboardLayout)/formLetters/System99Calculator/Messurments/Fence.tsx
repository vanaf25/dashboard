"use client";
import TableName from "../../../../components/letters/TableName/TableName";
import {useCallback, useMemo, useRef, useState} from "react";
import lengthAndWidthColumns from "../../../../consts/LengthAndWidthColumns";
import Table from "../../../../components/letters/Table/Table";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import {Grid, Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const Fence = () => {
  const columns = useMemo(
    () =>(lengthAndWidthColumns.
    filter(el=>el.field==="length")), []);
  const tableWidthRef=useRef(null)
  const [linerFeet,setLinerFeet]=useState(0)
  const onCellValueChanged=useCallback((params)=>{
    const newValue = params.newValue;
    const oldValue = params.oldValue;
    if (newValue <= 0) {
      console.log('lessThen 0');
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    }
    else {
      setLinerFeet(calculateTotalAmount(tableWidthRef,"length"))
    }
  },[])
  const rows = useMemo(() =>([{length:10},{length:10},{length:10},{length:10},{length:10},{length:10},{length:10},{length:10},{length:10},]), []);
  const cornersColumns = useMemo(() => [
    {
      headerName: 'Corners Quantity',
      field: 'cornersQuantity',
      flex:1,
      editable: true,
      type: 'number',
    },
    {
      headerName: 'Ends Quantity',
      field: 'endsQuantity',
      flex: 1,
      editable: true,
      type: 'number',
    },
  ], []);

  const cornersRowData = useMemo(() => [
    { cornersQuantity: 0, endsQuantity: 0 },
    { cornersQuantity: 1, endsQuantity: 2 },
  ], []);
  const gateColumns = useMemo(() => [
    {
      headerName: 'Gate Size',
      field: 'gateSize',
      flex:1,
      editable: true, // Set to true if you want to allow editing
      type: 'text', // Optional: specify the data type
    },
    {
      headerName: 'Quantity',
      flex:1,
      field: 'quantity',
      editable: true, // Set to true if you want to allow editing
      type: 'number', // Optional: specify the data type
    },
  ], []); // No dependencies, so this will only run once on mount
  const gateRowData = useMemo(() => [
    { gateSize: '4 ft', quantity: 2 },
    { gateSize: '6 ft', quantity: 3 },
    { gateSize: '8 ft', quantity: 1 },
    { gateSize: '10 ft', quantity: 4 },
  ], []);
  return (
    <div>
      <TableName>
        Fence
      </TableName>
    <Grid container>
      <Grid xs={12} sm={6} >
        <Table customRef={tableWidthRef}
               columns={columns}
               onGridReady={()=>setLinerFeet(calculateTotalAmount(tableWidthRef,"length"))}
               onCellValueChanged={onCellValueChanged}
               rows={rows}/>
      </Grid>
      <Grid xs={12} sm={6}>
        <Table columns={cornersColumns} rows={cornersRowData}  withOutMargin/>
        <Table columns={gateColumns} rows={gateRowData} withOutMargin/>
      </Grid>
    </Grid>

      <Box sx={{ padding: 2 }}>
        {/* Header with Blue Background */}
        <Paper elevation={3} sx={{ backgroundColor: 'blue', padding: 2, marginBottom: 2 }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Fence Area Calculations
          </Typography>
        </Paper>

        {/* Flex Container for Square Feet Calculations */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="body1">
            Liner Feet: {linerFeet} sq ft
          </Typography>
          <Typography variant="body1">
            Square Feet for 6 Foot Fence: {linerFeet * 6} sq ft
          </Typography>
          <Typography variant="body1">
            Square Feet for 4 Foot Fence: {linerFeet * 4} sq ft
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Fence;

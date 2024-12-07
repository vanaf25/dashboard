"use client";
import Table from "../../../../components/letters/Table/Table";
import {Grid} from "@mui/material";
import {useCallback, useMemo} from "react";
import TableName from "../../../../components/letters/TableName/TableName";

const Deck = () => {
  const deckSurfaceColumns = [
    {
      headerName: 'Deck Surface',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'deckSurface',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'All Levels',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'allLevels',
      editable: true,
      flex: 1,
    }
  ];
  const deckFrameColumns = [
    {
      headerName: 'Deck Frane',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'deckSurface',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Level 1',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'allLevels',
      editable: true,
      flex: 1,
    }
  ];
  const deckFrame2Columns =
    [
    {
      headerName: 'Deck Frane',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'deckSurface',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Level 2',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'allLevels',
      editable: true,
      flex: 1,
    }
  ];
  const getDeckSurfaceRowData=useCallback(()=>[
    { deckSurface: '', allLevels: null },
    { deckSurface: '', allLevels: null },
    { deckSurface: '', allLevels: null },
  ],[]);
  const deckSurfaceRowData1 =useMemo(()=>getDeckSurfaceRowData(),[]);
  const deckSurfaceRowData2 =useMemo(()=>getDeckSurfaceRowData(),[]);
  const deckSurfaceRowData3 =useMemo(()=>getDeckSurfaceRowData(),[]);
  const railingColumns = [
    {
      headerName: 'Deck Railing',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'deckRailing',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Angled Railing',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'angledRailing',
      editable: true,
      flex: 1,
    }
  ];
   const railingRows=useMemo(
  ()=>(
    Array(15).fill(()=>
      ({deckRailing:"",angledRailing:""}))
  ),[])
  const lumberColumns =
    useMemo(() =>(  [
    {
      headerName: 'Extra Treated Lumber',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'extraTreatedLumber',
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
  ]),[]);

  return (
    <div>
      <Grid sx={{mb:2}} container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Table withOutMargin columns={deckSurfaceColumns} rows={deckSurfaceRowData1}/>
          <Table withOutMargin columns={deckFrameColumns} rows={deckSurfaceRowData2}/>
          <Table withOutMargin columns={deckFrame2Columns} rows={deckSurfaceRowData3}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Table withOutMargin columns={railingColumns} rows={railingRows}/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Table columns={lumberColumns} rows={[
            { extraTreatedLumber: '2x4x12', quantity: null },
            { extraTreatedLumber: '2x6x12', quantity: null },
            { extraTreatedLumber: '2x8x12', quantity: null },
            { extraTreatedLumber: '2x12x12', quantity: null },
            { extraTreatedLumber: '4x4x8', quantity: null },
            { extraTreatedLumber: '4x4x12', quantity: null },
            { extraTreatedLumber: '4x6x12', quantity: null },
          ]}/>
          <TableName>
            Cedar
          </TableName>
          <Table columns={lumberColumns} rows={[
            { extraTreatedLumber: '2x12x12', quantity: null },
            { extraTreatedLumber: '6x6x8', quantity: null },
            { extraTreatedLumber: '6x6x12', quantity: null },
          ]}/>
        </Grid>
        <Grid item xs={12} sm={4}>

        </Grid>
        <Grid item xs={12} sm={8}>
          <Table withOutMargin rows={[
            { distance: 'Distance between Deck surface 1', stairsMeasurement: null, stairWidth: null },
            { distance: 'Distance between Deck surface 2', stairsMeasurement: null, stairWidth: null },
            { distance: 'Distance between Deck surface 3', stairsMeasurement: null, stairWidth: null },
          ]} columns={[
            {
              headerName: 'Distance',
              cellDataType: 'string',
              cellEditor: 'agTextCellEditor',
              field: 'distance',
              editable: true,
              flex: 1,
            },
            {
              headerName: 'Stairs (note: Measurements in whole Inches)',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'stairsMeasurement',
              editable: true,
              flex: 1,
            },
            {
              headerName: 'Stair Width',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'stairWidth',
              editable: true,
              flex: 1,
            }
          ]}/>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Table withOutMargin columns={[
            {
              headerName: 'Level',
              cellDataType: 'string',
              cellEditor: 'agTextCellEditor',
              field: 'level',
              editable: true,
              flex: 1,
            },
            {
              headerName: 'Deck height in feet',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'deckHeightFeet',
              editable: true,
              flex: 1,
            },
            {
              headerName: '# Deck Legs needed',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'deckLegsNeeded',
              editable: true,
              flex: 1,
            },
            {
              headerName: 'Length of legs',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'lengthOfLegs',
              editable: true,
              flex: 1,
            }
          ]} rows={[
            { level: 'level 1', deckHeightFeet: null, deckLegsNeeded: null, lengthOfLegs: null },
            { level: 'level 2', deckHeightFeet: null, deckLegsNeeded: null, lengthOfLegs: null },
            { level: 'level 3 (custom)', deckHeightFeet: null, deckLegsNeeded: null, lengthOfLegs: null },
            { level: 'level 4 (custom)', deckHeightFeet: null, deckLegsNeeded: null, lengthOfLegs: null },
          ]}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Deck;

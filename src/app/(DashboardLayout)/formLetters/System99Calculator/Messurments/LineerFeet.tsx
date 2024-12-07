"use client";
import {useMemo} from 'react';
import Table from "../../../../components/letters/Table/Table";

const LineerFeet = () => {
  const columns = useMemo(() =>([
    {
      headerName: 'GUTTER liner feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'gutterLinerFeet',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'DOWNSPOUT liner feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'downspoutLinerFeet',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'A Elbow',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'aElbow',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'B Elbow',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'bElbow',
      editable: true,
      flex: 1,
    },
    {
      headerName: '30 degree elbow',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'degreeElbow30',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Inside corners',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'insideCorners',
      editable: true,
      flex: 1,
    }]
), []);
  const rows=useMemo(()=>([
    { gutterLinerFeet: null, downspoutLinerFeet: null, aElbow: null, bElbow: null, degreeElbow30: null, insideCorners: null },
    { gutterLinerFeet: null, downspoutLinerFeet: null, aElbow: null, bElbow: null, degreeElbow30: null, insideCorners: null },
    { gutterLinerFeet: null, downspoutLinerFeet: null, aElbow: null, bElbow: null, degreeElbow30: null, insideCorners: null },
  ]),[])
  return (
    <div>
      <Table columns={columns} rows={rows}/>
    </div>
  );
};

export default LineerFeet;

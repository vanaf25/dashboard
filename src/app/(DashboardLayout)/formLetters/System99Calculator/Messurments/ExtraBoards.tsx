"use client";
import {useMemo} from 'react';
import Table from "../../../../components/letters/Table/Table";

const ExtraBoards = () => {
  const boardsColumns = useMemo(() => [
    {
      headerName: 'Extra boards',
      cellDataType: 'string',
      cellEditor: 'agTextCellEditor',
      field: 'extraBoards',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Pine liner footage',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'pineLinerFootage',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Pine Quantity at 12 feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'pineQuantityAt12Feet',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Cedar liner footage',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'cedarLinerFootage',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Cedar Quantity at 12 feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'cedarQuantityAt12Feet',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Hardie liner footage',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'hardieLinerFootage',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Hardie Quantity at 12 Feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'hardieQuantityAt12Feet',
      editable: true,
      flex: 1,
    },
  ], []);

  const boardsRowData = useMemo(() => [
    { extraBoards: '1x2', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '1x4', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '1x6', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '1x8', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '1x12', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '2x4', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '2x6', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '2x8', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
    { extraBoards: '2x12', pineLinerFootage: null, pineQuantityAt12Feet: null, cedarLinerFootage: null, cedarQuantityAt12Feet: null, hardieLinerFootage: null, hardieQuantityAt12Feet: null },
  ], []);

  return (
    <div>
      <Table columns={boardsColumns} rows={boardsRowData}/>
    </div>
  );
};

export default ExtraBoards;

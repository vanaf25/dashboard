"use client"
import React, {useMemo, useRef} from 'react';
import Table from "../../../../../components/letters/Table/Table";
import TableName from "../../../../../components/letters/TableName/TableName";
import {updateRowChanged} from "@/app/apis/tablesApi";
interface Table{
  tableName:string,
  rows:any[]
}
const ItemTable:React.FC<Table> = ({tableName,rows}) => {
  // Parse input to allow only positive numbers
  const numberParser = (params:any) => {
    const newValue = parseFloat(params.newValue);
    return isNaN(newValue) || newValue < 0 ? null : newValue;
  };
const tableRef=useRef();
  // Value getter for calculating the average of editable columns
  const averageValueGetter = (params:any) => {
    const fields = ['lowes', 'builders_first_source', 'abc_supply',
      'home_depot', 'mccoys', 'lumber_84'];
    const values = fields
      .map(field => params.data[field])
      .filter(value => typeof value === 'number' && value >= 0);
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return values.length ? sum / values.length : 0;
  };

  // Value getter for rounding the average column
  const averageCostValueGetter = (params:any) => {
    return Math.round(params.getValue('average'));
  };
  const columnDefs = useMemo(() => {
    const lightBlueStyle = {
      backgroundColor: '#ADD8E6', color: '#000000' }; // Light blue background with black text

    const columns = [
      { headerName: 'Item Number', field: 'item_number', editable: false, flex: 1 },
      { headerName: 'Item Name', field: 'item_name', editable: false, flex: 1 },
      { headerName: 'Size', field: 'size', editable: false, flex: 1 },
      { headerName: 'Lowes', field: 'lowes', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: "Builder's First Source", field: 'builders_first_source', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: 'ABC Supply', field: 'abc_supply', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: 'Home Depot', field: 'home_depot', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: "McCoy's", field: 'mccoys', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: '84 Lumber', field: 'lumber_84', editable: true, valueParser: numberParser, flex: 1 },
      {
        headerName: 'Average',
        field: 'average',
        flex: 1,
        valueGetter: averageValueGetter,
        editable: false,
      },
      {
        headerName: 'Average Cost',
        field: 'average_cost',
        flex: 1,
        valueGetter: averageCostValueGetter,
        editable: false,
      },
    ];

    // Apply the dark blue style to editable columns
    return columns.map(column => ({
      ...column,
      cellStyle: column.editable ? lightBlueStyle : null,
    }));
  }, []);
  const handleCellEditCommit = async (params:any) => {
    const rowId=params.data.id;
    await updateRowChanged(rowId,params.data)
  };
  return (
    <div>
      <TableName>{tableName}</TableName>
    <Table rows={rows} customRef={tableRef} onCellValueChanged={handleCellEditCommit} columns={columnDefs}/>
    </div>
  );
};

export default ItemTable;

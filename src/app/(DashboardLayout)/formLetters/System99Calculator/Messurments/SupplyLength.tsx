"use client";
import React, { FC } from "react";
import { ColDef } from "ag-grid-community";
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";

// Define interfaces for the row data
interface OperationRowData {
  input1: number | null;
  input2: number | null;
  operation: string;
}

interface LengthRowData {
  length: number | null;
}

const App: FC = () => {
  // Sample data for the tables
  const data: OperationRowData[] = [
    { input1: 0, input2: 0, operation: "Added" },
    { input1: 0, input2: 0, operation: "Subtracted" },
    { input1: 0, input2: 0, operation: "Multiplied" },
    { input1: 0, input2: 0, operation: "Divided" },
  ];

  const lengthMultipliers: number[] = [8, 12, 16, 18, 20];

  const createColumnDefs = (operation: string): ColDef[] => [
    {
      headerName: "Input 1",
      field: "input1",
      editable: true,
      type: "number",
    },
    {
      headerName: "Input 2",
      field: "input2",
      editable: true,
      type: "number",
    },
    {
      headerName: operation,
      field: "operation",
      valueGetter: (params) => {
        const { input1, input2 } = params.data as OperationRowData;
        if (input1 == null || input2 == null || isNaN(input1) || isNaN(input2)) return "";

        switch (operation) {
          case "Added":
            return input1 + input2;
          case "Subtracted":
            return input1 - input2;
          case "Multiplied":
            return input1 * input2;
          case "Divided":
            return input2 !== 0 ? (input1 / input2).toFixed(2) : "N/A";
          default:
            return "";
        }
      },
    },
  ];

  const createLengthColumn = (number: number): ColDef[] => [
    {
      headerName: "Length",
      field: "length",
      editable: true,
      type: "number",
    },
    {
      headerName: `Divided by ${number}`,
      field: "divide",
      valueGetter: (params) => {
        const { length } = params.data as LengthRowData;
        if (length == null || isNaN(length)) return "";
        return length === 0 ? "N/A" : (length / number).toFixed(2);
      },
    },
    {
      headerName: `Multiplied by ${number}`,
      field: "multiply",
      valueGetter: (params) => {
        const { length } = params.data as LengthRowData;
        if (length == null || isNaN(length)) return "";
        return length * number;
      },
    },
  ];

  return (
      <div style={{ width: 500 }}>
        <TableName>Calculator for standard supply lengths</TableName>
        {data.map((item) => (
            <div key={item.operation}>
              <Table
                  rows={[{ input1: null, input2: null, operation: item.operation }]}
                  columns={createColumnDefs(item.operation)}
                  defaultColDef={{ flex: 1, minWidth: 100 }}
              />
            </div>
        ))}
        {lengthMultipliers.map((item) => (
            <div key={item}>
              <Table
                  rows={[{ length: null }]}
                  columns={createLengthColumn(item)}
                  defaultColDef={{ flex: 1, minWidth: 100 }}
              />
            </div>
        ))}
      </div>
  );
};

export default App;

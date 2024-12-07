"use client";
import { useCallback, useMemo } from "react";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";

const LinealFinishTrimParts = () => {
  const createColumns = useCallback((headerName:string) => ([
    {
      headerName: headerName,
      field: 'item',
      flex: 4,
      cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' }, // Background color for first column
    },
    {
      headerName: 'FAUX',
      field: 'quantity',
      flex: 1,
      cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' }, // Background color for second column
    }
  ]), []);

  const generateRowsForFirstTable = useCallback(() => ([
    { item: 'Lineal 3 1/2', quantity: 0 },
    { item: "Finish trim", quantity: 0 }
  ]), []);

  const generateRowsForSecondTable = useCallback(() => ([
    {item:"Lineal 5 1/2",quantity: 0},
    { item: 'Finish trim', quantity: 0 }
  ]), []);
  const tables = useMemo(() => ([
    {
      name: "Lineal 3 1/2",
      rows: generateRowsForFirstTable()
    },
    {
      name: "Lineal 5 1/2",
      rows: generateRowsForSecondTable()
    }
  ]), [createColumns, generateRowsForFirstTable, generateRowsForSecondTable]);
  return (
    <div>
          {tables.map((table) => (
              <TableWithFalseColumn
                withOutMargin
                key={table.name}
                itemHeaderName={table.name}
                rows={table.rows}
              />)
          )}
    </div>
  );
};

export default LinealFinishTrimParts;

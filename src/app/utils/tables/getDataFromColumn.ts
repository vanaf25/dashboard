import { GridApi, IRowNode } from 'ag-grid-community';
import React from "react";

export default (ref: React.RefObject<any>, key: string): number[] => {
  const gridApi: GridApi | undefined = ref?.current?.api;
  const values: number[] = [];

  if (gridApi) {
    gridApi.forEachNode((rowNode: IRowNode<any>) => {
      const value = gridApi.getCellValue({ rowNode, colKey: key });
      values.push(value);
    });
    return values;
  }

  return [];
};

import { MutableRefObject } from 'react';
import { GridApi } from 'ag-grid-community';
export default ( ref:MutableRefObject<any>, key:string):  number => {
  const gridApi = ref?.current?.api as GridApi | undefined;
  const values: number[] = [];

  if (gridApi) {
    gridApi.forEachNode((rowNode: any) => {
      const value = gridApi.getCellValue({ rowNode, colKey: key });
      values.push(value ?? 0);
    });

    const amount = values.reduce((sum, node) => sum + (+node || 0), 0);
    return amount ? amount : 0;
  }
  return 0;
};

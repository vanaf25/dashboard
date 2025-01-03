import { updateRowChanged } from "../apis/tablesApi";
import { GridApi, IRowNode, Column } from 'ag-grid-community';

interface RowData {
  [key: string]: any;
}

export default async (api: GridApi | null, rowIndex: number, rowId: string): Promise<RowData> => {
  const row: RowData = {};

  if (api) {
    api.forEachNode((rowNode: IRowNode<any>, index: number) => {
      if (rowNode.rowIndex === rowIndex) {
        const columns: Column<any>[] | null = api.getColumns();
        if (columns) {
          columns.map(c => c.getColId()).forEach(columnId => {
            const value = api.getCellValue({ rowNode, colKey: columnId });
            row[columnId] = value;
          });
        }
      }
    });
  }

  console.log('actualData:', row);
  await updateRowChanged(rowId, { ...row });
  return row;
};

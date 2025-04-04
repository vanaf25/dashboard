import { IRowNode, Column } from 'ag-grid-community';
import {RefObject} from "react";
import {AgGridReact} from "ag-grid-react";

interface RowData {
    [key: string]: any;
}
const filteredColumns=["delete"]
export default  (ref: RefObject<AgGridReact> | null,): RowData[] => {
    const rows: RowData[] = [];
    const api=ref?.current?.api
    if (api) {
        api.forEachNode((rowNode: IRowNode<any>) => {
            const row:RowData={}
                const columns: Column<any>[] | null = api.getColumns();
                if (columns) {
                    columns.map(c => c.getColId()).filter(id=>!filteredColumns.includes(id)).forEach(columnId => {
                        const value = api.getCellValue({ rowNode, colKey: columnId });
                        row[columnId] = value;
                    });
                }
                rows.push(row);
        });
    }
    return rows;
};

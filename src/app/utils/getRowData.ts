import { GridApi, IRowNode, Column } from 'ag-grid-community';

interface RowData {
    [key: string]: any;
}

export default  (api: GridApi | null, rowIndex: number  | null) : RowData => {
    const row: RowData = {};

    if (api && rowIndex!==null) {
        if(rowIndex===0) console.log('finded!');
        api.forEachNode((rowNode: IRowNode<any>) => {
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
    return row;
};

import { ColDef } from 'ag-grid-community';
const generateBlankRow = (columns:ColDef[],rowsCount:number) => {
    const rows=[]
    for(let i=0;i<rowsCount;i++){
        const row:Record<string,any> = {id:Math.random()};
        columns.forEach(column => {
            if (column.field) {
                if (column.cellEditor === 'agSelectCellEditor'  || column.cellEditor==="agTextCellEditor") {
                    row[column.field] = column.cellEditorParams?.values[0] || '';
                } else {
                    row[column.field] = 0;
                }
            }
        });
        rows.push(row)
    }
    return rows
};
export default generateBlankRow
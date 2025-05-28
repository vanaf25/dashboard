import { ICellEditorParams } from 'ag-grid-community';

interface Params extends ICellEditorParams {
  newValue: number;
  oldValue: number;
}

export default (params: any): void => {
  const { newValue, oldValue } = params;
  if(params?.api.getRowNode){
    if (newValue <= 0 ) {
      // @ts-ignore
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    } else {
      // @ts-ignore
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, newValue);
    }
  }

};

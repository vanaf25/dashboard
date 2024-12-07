import React, {useCallback, useMemo} from 'react';
import Box from "@mui/material/Box";
import Table from "../../../../components/letters/Table/Table";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import TableName from "../../../../components/letters/TableName/TableName";
import {Grid} from "@mui/material";
interface CalculatingItemsProps{
  setTotal:(arg:any)=>void
}
const CalculatingItems:React.FC<CalculatingItemsProps>= ({setTotal}) => {
  const createLengthColumn = useCallback((name:string) => {
    return [
      {
        headerName: name,
        cellDataType: "string",
        flex:2,
        field: 'name',
        editable: true,
      },
      {
        headerName: "Amount",
        cellEditor: "agNumberCellEditor",
        flex:1,
        cellDataType: "number",
        field: 'amount',
        editable: true,
      },
    ];
  }, []);
  const itemsArray = useMemo(() => {
    const items = [
      'Siding',
      'Soffit',
      'Fascia',
      'Paint',
      'Windows',
      'Decks',
      'Stairs',
      'Railing',
      'Fence',
      'Cover',
      'Concrete Slab',
      'Gutters',
    ];

    return items.map(item => ({
      name: item,
      rows:[{name:"",amount:null}
        ,{name:"",amount:null}
        ,{name:"",amount:null}
        ,{name:"",amount:null}],
      ref: React.createRef(), // Create a ref for each item
    }));
  }, []);
  const onCellValueChanged = useCallback((params:any) => {
    const newValue = params.newValue;
    const oldValue = params.oldValue;
    if (newValue <= 0) {
      console.log('lessThen 0');
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    }
    else {
      setTotal(itemsArray.reduce(
        (accumulator, currentValue) => accumulator +
          Number(calculateTotalAmount(currentValue.ref,"amount")),
        0,
      ))
    }
  }, []);
  return (
    <Box>
      <TableName>
        Commission Calculator
      </TableName>
      <Grid container mb={2} spacing={2} >
        {itemsArray.map(el=><Grid  item key={el.name}
                                                   xs={12} sm={4}>
          <Table withOutMargin  onCellValueChanged={onCellValueChanged}
                 columns={createLengthColumn(el.name)}
                 rows={el.rows} customRef={el.ref}  />
        </Grid>)}

      </Grid>
    </Box>

  );
};

export default CalculatingItems;

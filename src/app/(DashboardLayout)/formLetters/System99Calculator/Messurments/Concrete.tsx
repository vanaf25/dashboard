"use client";
import React, {useEffect, useMemo, useState} from 'react';
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import lengthAndWidthColumns from "../../../../consts/LengthAndWidthColumns";
import { TextField, Box } from '@mui/material';
interface ConcreteProps{
    onCellValueChanged?:(p:any)=>void,
    customRef?:React.MutableRefObject<any>,
    additionalColumns:any[]
}
const Concrete:React.FC<ConcreteProps> = ({onCellValueChanged,customRef,additionalColumns}) => {
  const [thickness1, setThickness1] = useState('');
  const [thickness2, setThickness2] = useState('');
  const columns=useMemo(()=>([...lengthAndWidthColumns,...additionalColumns]),[lengthAndWidthColumns,additionalColumns])
  const rows =
    useMemo(()=>(
    [
      {length:0,width:0,lengthMultiply:0,widthMultiply:0,totalMultiply:0,slab1:0,slab2:0},
      {length:0,width:0,lengthMultiply:0,widthMultiply:0,totalMultiply:0,slab1:0,slab2:0},
      {length:0,width:0,lengthMultiply:0,widthMultiply:0,totalMultiply:0,slab1:0,slab2:0},
      {length:0,width:0,lengthMultiply:0,widthMultiply:0,totalMultiply:0,slab1:0,slab2:0},
    ]),
    []
  );
  useEffect(()=>{

  },[])
  /*const [isCreated,setIsCreated]=useState(false);
  useEffect(() => {
    if(!isCreated){
      createTable({name:"Concrete",type:"concrete",columns:columns.map(column=>column.field),rows}).then(res=>{
        setIsCreated(true)
        console.log('res:',res);
      })
    }
  }, [rows,columns]);*/
  return (
    <div>
      <TableName>
        Concrete Patio
      </TableName>
      <Table
             columns={columns} rows={rows} onCellValueChanged={onCellValueChanged} customRef={customRef} />
      {/* Input Fields for Thickness */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,
        marginBottom:2,
        width: 300, marginTop: 2 }}>
        <TextField
          label="Thickness in Inches 1"
          variant="outlined"
          value={thickness1}
          onChange={(e) => setThickness1(e.target.value)}
          type="number"
        />
        <TextField
          label="Thickness in Inches 2"
          variant="outlined"
          value={thickness2}
          onChange={(e) => setThickness2(e.target.value)}
          type="number"
        />
      </Box>
    </div>
  );
};

export default Concrete;

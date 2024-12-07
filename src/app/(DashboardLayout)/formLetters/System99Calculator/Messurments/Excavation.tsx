"use client";
import {useMemo} from 'react';
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import lengthAndWidthColumns from "../../../../consts/LengthAndWidthColumns";

const Concrete = ({additionalColumns,additionalRow,onCellValueChanged,customRef}) => {
  const columns=useMemo(()=>([...lengthAndWidthColumns,...additionalColumns]),[]);
  const rows = useMemo(
    ()=>{
      const defaultArray= [
        {length:0,width:0,},
        {length:0,width:0,},
        {length:0,width:0,}

      ]
      if (additionalRow){
        return defaultArray.map(el=>({...el,...additionalRow}))
      }
      return defaultArray
    }, [])
  return (
    <div>
      <TableName>
        Excavation
      </TableName>
      <Table  columns={columns}
              customRef={customRef}
              onCellValueChanged={onCellValueChanged}
             rows={rows}/>
    </div>
  );
};

export default Concrete;

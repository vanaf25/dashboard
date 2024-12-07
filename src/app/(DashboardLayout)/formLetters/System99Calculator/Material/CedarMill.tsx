"use client";
import {useCallback} from "react";
import Box from "@mui/material/Box";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";

const CedarMill = () => {
  const generateRows=useCallback(
    ()=>([{item:"Per piece",quantity:0}]),[])
  const tables=[{
    name:"Color Plus Cedar Mill 8 1/4 ",
    rows:generateRows()
  },
  {
    name:"Cedar 8 1/4",
    rows:generateRows()
  },{
    name: "Smooth  8 1/4",
    rows:generateRows()
  },{
    name: "Beaded 8 1/4",
    rows:generateRows()
  },{
    name: "Colonel 8 1/4",
    rows:generateRows()}];
  return (
    <Box sx={{mb:10}}>
      {tables.map(el=><TableWithFalseColumn
        key={el.name}
        withOutMargin
        itemHeaderName={el.name}
                             rows={el.rows}
                             />)}
    </Box>
  );
};

export default CedarMill;

"use client";
import {useCallback} from "react";
import {Grid} from "@mui/material";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";
import TableName from "../../../../components/letters/TableName/TableName";

const DeckSurface = () => {
  const generateRows=useCallback(()=>([
    { item: '1x6x12', quantity: 0 },
    { item: '1x6x16', quantity: 0 },
    { item: '1x6x20', quantity: 0 },
    { item: 'Hidden fasteners', quantity: 0 }
  ]),[])
  const generateRows2 = useCallback(() =>([
    { item: '1 1/2 x 6 x 12', quantity: 0 },
    { item: '1 1/2 x 6 x 16', quantity: 0 },
    { item: '1 1/2 x 6 x 20', quantity: 0 },
    { item: 'Exterior Screws', quantity: 0 }
  ]) , []);
  const tablesNames=[{
    name:"Trex transend",
  },
    {name:"Trex enhansed"},
    {name:"Trex select"},
    {name:"Trext base"}
  ].map(el=>({...el,rows:generateRows()}))
  const tableNames2=[{
    name:"Cedar 1 1/2",
  },
    {name:"Cedar 5/4"},
    {name:"Treated 5/4"},
  ].map(el=>({...el,rows:generateRows2()}))
  return (
    <div>
      <TableName>
        Duck surface
      </TableName>
      <Grid spacing={2} container>
        <Grid xs={12} item sm={6}>
          {tablesNames.map(el=><TableWithFalseColumn withOutMargin key={el.name} itemHeaderName={el.name}
                                                     rows={el.rows}
          />)}
        </Grid>
        <Grid xs={12} item sm={6}>
          {tableNames2.map(el=><TableWithFalseColumn withOutMargin key={el.name} itemHeaderName={el.name}
                                                     rows={el.rows}
          />)}
        </Grid>
      </Grid>
    </div>
  );
};

export default DeckSurface;

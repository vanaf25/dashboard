"use client";
import {useCallback, useMemo} from "react";
import {Grid} from "@mui/material";
import TableName from "../../../../components/letters/TableName/TableName";
import Box from "@mui/material/Box";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";

const Trim = () => {
  const cedarRowData = useMemo(() => [
    { item: '1x2x12', quantity: 0 },
    { item: '1x4x12', quantity: 0 },
    { item: '1x6x12', quantity: 0 },
    { item: '1x8x12', quantity: 0 },
    { item: '1x12x12', quantity: 0 }
  ], []);
  const pineRowData = useMemo(() => [
    { item: '1x2x12', quantity: 0 },
    { item: '1x4x12', quantity: 0 },
    { item: '1x6x12', quantity: 0 },
    { item: '1x8x12', quantity: 0 },
    { item: '1x12x12', quantity: 0 }
  ], []);
  const woodingRowData = useMemo(() => [
    { item: 'Painters caulk white', quantity: 0 },
    { item: 'Painters caulk clear', quantity: 0 },
    { item: 'Quad Caulk white', quantity: 0 },
    { item: 'Quad Caulk clear', quantity: 0 },
    { item: 'Mortar repair caulk', quantity: 0 },
    { item: 'Z Flashing 1/2 by 5/8 by 1/2', quantity: 0 },
    { item: 'Z Flashing 1/2 by 3/8 by 1/2', quantity: 0 },
    { item: 'Over window flashing', quantity: 0 },
    { item: 'Turnback flashing', quantity: 0 },
    { item: 'Exterior trim nails 16 Gage 2" 1/2', quantity: 0 },
    { item: '2" Exterior screws 1 lb box', quantity: 0 },
    { item: '3 1/2" Exterior screws 1 lb box', quantity: 0 },
    { item: '2 1/2" Loose hand nails 5 lb box', quantity: 0 },
    { item: 'Exterior nail gun nails per box', quantity: 0 },
    { item: 'T 50 staples per box', quantity: 0 }
  ], []);
  const generateRows=useCallback(()=>([{ item: 'Per Piece', quantity: 0 }]),[])
  const tables=useMemo(()=>([
    {name:"105 pattern",rows:generateRows(),},
    {name:"Ship lap", rows:generateRows(),}
    ,{name: "T111  8 Inch OC,",rows:generateRows(),}
    ,{name:"T111  4 Inch OC",rows:generateRows(),}]),[])
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TableWithFalseColumn itemHeaderName={"Cedar Trim"} rows={cedarRowData}/>
          <TableWithFalseColumn itemHeaderName={"Pine Trim"} rows={pineRowData}/>
          <TableName>
            WoodingSiding
          </TableName>
          <Box sx={{mb:2}}>
            {tables.map((table)=>
                <TableWithFalseColumn
                  key={table.name}
                  itemHeaderName={table.name}
                  rows={table.rows}
                />
            )}
          </Box>
        </Grid>
        <Grid xs={12} sm={6} item>
          <TableWithFalseColumn itemHeaderName={"Wood Siding Parts"} rows={woodingRowData}/>
        </Grid>
      </Grid>

    </div>
  );
};

export default Trim;

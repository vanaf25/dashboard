"use client";
import {useMemo} from 'react';
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";
import {Grid} from "@mui/material";
const WindowsParts = () => {
  const rows = useMemo(() => [
    { item: 'Painters Caulk white', quantity: 0 },
    { item: 'Painters Caulk clear', quantity: 0 },
    { item: 'Quad caulk white', quantity: 0 },
    { item: 'Quad caulk clear', quantity: 0 },
    { item: 'Mortar repair Caulk', quantity: 0 }
  ], []);
  const rows2 = useMemo(() => [
    { item: 'Hardie trim 1x4x12', quantity: 0 },
    { item: 'Hardie trim 1x6x12', quantity: 0 }
  ], []);
  const rows3 = useMemo(() => [
    { item: 'Cedar trim 1x4x12', quantity: 0 },
    { item: 'Cedar trim 1x6x12', quantity: 0 }
  ], []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6}>
          <TableWithFalseColumn rows={rows}
                                itemHeaderName={"Windows parts"}/>
        </Grid>
        <Grid xs={12} sm={6}>
          <TableWithFalseColumn withOutMargin
                                rows={rows2} itemHeaderName={"Windows trim Hardie"}/>
          <TableWithFalseColumn withOutMargin
                                rows={rows3} itemHeaderName={"Windows trim cedar"}/>
        </Grid>
        <Grid xs={12} sm={6}>
          <TableWithFalseColumn itemHeaderName={"Symington"} withOutMargin rows={[{item:"1809",quantity:0}]}/>
          <TableWithFalseColumn itemHeaderName={"Plygem"} withOutMargin rows={[{item:"1810",quantity:0}]}/>
          <TableWithFalseColumn itemHeaderName={"Atrium"}  withOutMargin rows={[{item:"1811",quantity:0}]}/>

        </Grid>
      </Grid>


    </div>
  );
};

export default WindowsParts;

"use client";
import {useMemo} from 'react';
import {Grid} from "@mui/material";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";

const Paint = () => {
  const rows = useMemo(() => [
    { item: 'Gallons of base paint', quantity: 0 },
    { item: 'Gallons of trim paint', quantity: 0 },
    { item: 'Gallons of soffit paint', quantity: 0 },
    { item: 'Gallons of fascia paint', quantity: 0 },
    { item: 'Painters rags', quantity: 0 },
    { item: 'Painters tape', quantity: 0 },
    { item: 'Disposable drop cloth 9 by 500', quantity: 0 }
  ], []);
  const rows2 = useMemo(() => [
    { item: 'Soffit paint in gallons', quantity: 0 },
    { item: 'Fascia paint in gallons', quantity: 0 },
    { item: 'Painters rags', quantity: 0 },
    { item: 'Painters tape', quantity: 0 }
  ], []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TableWithFalseColumn itemHeaderName={"Paint Whole Home"} rows={rows}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableWithFalseColumn itemHeaderName={"Paint Soffit / Fascia"} rows={rows2}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Paint;

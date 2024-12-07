"use client";
import Table from "../../../../components/letters/Table/Table"; // Adjust the path as needed
import { useMemo } from "react";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";
import {Grid} from "@mui/material";

const HardieFasciaTable = () => {
  const columns = useMemo(() => [
    { headerName: 'Hardie Color Plus Fascia', field: 'hardieColorPlusFascia', flex: 2 },
    { headerName: 'False', field: 'colorPlusQuantity', flex: 1 },
    { headerName: 'Hardie Fascia', field: 'hardieFascia', flex: 2 },
    { headerName: 'False', field: 'fasciaQuantity', flex: 1 }
  ], []);
  const rows = useMemo(() => [
    { hardieColorPlusFascia: '2" Exterior screws 1 lb box', colorPlusQuantity: 0, hardieFascia: '2" Exterior screws 1 lb box', fasciaQuantity: 0 },
    { hardieColorPlusFascia: 'Quad Caulk clear', colorPlusQuantity: 0, hardieFascia: 'Quad Caulk clear', fasciaQuantity: 0 },
    { hardieColorPlusFascia: 'Color plus 1x6x12', colorPlusQuantity: 0, hardieFascia: 'Hardie primed 1x6x12', fasciaQuantity: 0 },
    { hardieColorPlusFascia: 'Color plus 1x8x12', colorPlusQuantity: 0, hardieFascia: 'Hardie primed 1x8x12', fasciaQuantity: 0 },
    { hardieColorPlusFascia: 'Color plus 1x12x12', colorPlusQuantity: 0, hardieFascia: 'Hardie primed 1x12x12', fasciaQuantity: 0 }
  ], []);
  const rows2 = useMemo(() => [
    { item: '2" Exterior screws 1 lb box', quantity: 0 },
    { item: 'Quad Caulk clear', quantity: 0 },
    { item: 'Hardie primed 1x6x12', quantity: 0 },
    { item: 'Hardie primed 1x8x12', quantity: 0 },
    { item: 'Hardie primed 1x12x12', quantity: 0 }
  ], []);
  const rows3 = useMemo(() => [
    { item: `Cedar mill primed 4'x8' sheet`, quantity: 0 },

  ], []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Table
            columns={columns}
            rows={rows}
          />
          <TableWithFalseColumn itemHeaderName={"Hardie Fascia"} rows={rows2}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableWithFalseColumn itemHeaderName={"Hardie Soffit"} rows={rows2}/>
          <TableWithFalseColumn itemHeaderName={"Hardie Porch Ceiling Cedar Mill"} rows={rows3}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HardieFasciaTable;

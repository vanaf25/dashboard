"use client";
import Table from "../../../../components/letters/Table/Table";
import {Box, Grid, Typography} from "@mui/material";
import {useMemo} from "react";

const Size = () => {
  const fasciaColumns = [
    {
      headerName: 'Size',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'size',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'FASCIA liner feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'fasciaLinerFeet',
      editable: true,
      flex: 1,
    }
  ];
  const soffitColumns=[
    {
      headerName: 'Size',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'size',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Soffit liner feet',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'soffitLinerFeet',
      editable: true,
      flex: 1,
    }
  ]
  const porchCeilingColumns =
    useMemo(()=>([
    { headerName: 'Length',cellDataType: "number",cellEditor: 'agNumberCellEditor', field: 'length', editable: true,flex:1 },
    { headerName: 'Height',cellDataType: "number",cellEditor: 'agNumberCellEditor', field: 'height', editable: true,flex:1 }
  ]),[])

  return (
    <div>
      <Grid sx={{mb:2}} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Table columns={fasciaColumns} rows={[
            { size: 6, fasciaLinerFeet: null },
            { size: 8, fasciaLinerFeet: null },
            { size: 10, fasciaLinerFeet: null },
            { size: 12, fasciaLinerFeet: null }]
          }  />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Box sx={{backgroundColor: '#4caf50', padding: '8px', textAlign: 'center'}}>
              <Typography variant="h6" component="h2" sx={{color: '#fff'}}>
                Porch Ceiling
              </Typography>
            </Box>
            <Table columns={porchCeilingColumns} rows={[
              { length: null, width: null },
              { length: null, width: null },
              { length: null, width: null },
              ]
            }  />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Table columns={soffitColumns} rows={[
            { size: 12, soffitLinerFeet: null },
            { size: 18, soffitLinerFeet: null },
            { size: 24, soffitLinerFeet: null },
          ]
          }  />
        </Grid>
      </Grid>
    </div>
  );
};

export default Size;

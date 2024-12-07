"use client";
import { useMemo } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Box from "@mui/material/Box";
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";
const ExtraItems = () => {
  // Supplies Data
  const suppliesColumns = useMemo(() => [
    { headerName: 'Supplies', field: 'supply', flex: 1 },
    { headerName: 'Value', field: 'value', flex: 1 },
  ], []);

  const suppliesRowData = useMemo(() => [
    { supply: 'Z flashing 3/4', value: null },
    { supply: 'Z flashing 5/8', value: null },
    { supply: 'H channel', value: null },
    { supply: 'Drip Edge', value: null },
    { supply: 'Over window flashing', value: null },
    { supply: '2 inch L counter flashing', value: null },
    { supply: 'Turn Back Flashing 4"x5"x10\'', value: null },
    { supply: 'Extra J Channel', value: null },
    { supply: '3 1/2 Inch Exterior Screws', value: null },
    { supply: 'Sheeting nails for nail gun 1000 count', value: null },
    { supply: 'Trim nails 2.5 inch pin nails', value: null },
    { supply: 'Exterior screws 2 inch 1LB', value: null },
    { supply: 'Extra siding and fence nails 2 1/2 inch 3000 count', value: null },
  ], []);

  // Transition Data
  const transitionColumns = useMemo(() => [
    { headerName: 'Transition', field: 'transition', flex: 1 },
    { headerName: 'Value', field: 'value', flex: 1 },
  ], []);

  const transitionRowData = useMemo(() => [
    { transition: 'Clear Painters Caulk', value: null },
    { transition: 'Quad White Caulk', value: null },
    { transition: 'Quad Clear Caulk', value: null },
    { transition: 'Motor Repair caulk', value: null },
    { transition: 'Extra White Painters caulk', value: null },
    { transition: 'Hardie COLOR PLUS caulk base color', value: null },
    { transition: 'Hardie COLOR PLUS caulk Trim color', value: null },
    { transition: 'Color match touch UP kit base color', value: null },
    { transition: 'Color match touch UP kit Trim', value: null },
    { transition: 'Vinyl Color match caulk base Color', value: null },
    { transition: 'Vinyl Color match caulk trim Color', value: null },
  ], []);

  // Flashing Data
  const flashingColumns = useMemo(() => [
    { headerName: 'Flashing', field: 'flashing', flex: 1 },
    { headerName: 'Value', field: 'value', flex: 1 },
  ], []);

  const flashingRowData = useMemo(() => [
    { flashing: 'Extra Painters plastic', value: null },
    { flashing: 'Extra Painters tape', value: null },
    { flashing: 'Sand paper 40 grit 10 pack', value: null },
    { flashing: 'Sand paper 60 grit 10 pack', value: null },
    { flashing: 'Patch and Paint 16oz', value: null },
    { flashing: 'Goof off paint remover 8oz', value: null },
    { flashing: 'Painters rags 5 lb.', value: null },
    { flashing: 'DAP plastic wood fill', value: null },
  ], []);

  return (
    <Box>
      <TableName>
        Extra supplies, transitions & flashing
      </TableName>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Table
            columns={suppliesColumns}
            domLayout='autoHeight'
            rows={suppliesRowData}
          />
          <Table
            domLayout='autoHeight'
            columns={transitionColumns}
            rows={transitionRowData}
          />
          <Table
            domLayout='autoHeight'
            columns={flashingColumns}
            rows={flashingRowData}
          />
        </div>
    </Box>
  );
};

export default ExtraItems;

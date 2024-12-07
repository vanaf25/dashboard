"use client";
import Table from "../../../../components/letters/Table/Table"; // Adjust the path as needed
import { useMemo } from "react";
import Box from "@mui/material/Box";

const HomeWrapTables = () => {
  // Define columns for both tables
  const columns1 = useMemo(() => [
    { headerName: 'Generic Home Wrap', field: 'genericHomeWrap', flex: 2,
      cellStyle:{background:"#cf5a39"} },
    { headerName: 'Quantity', field: 'genericQuantity', flex: 1,cellStyle:{background:"lightBlue"} },
    { headerName: 'Grip Right Home Wrap', field: 'gripRightHomeWrap', flex: 2,cellStyle:{background:"#cf5a39"} },
    { headerName: 'Quantity', field: 'gripRightQuantity', flex: 1 ,cellStyle:{background:"lightBlue"}}
  ], []);

  const columns2 = useMemo(() => [
    { headerName: 'Tyvek Home Wrap', field: 'tyvekHomeWrap', flex: 2,cellStyle:{background:"#cf5a39"} },
    { headerName: 'Quantity', field: 'tyvekQuantity', flex: 1,cellStyle:{background:"lightBlue"} },
    { headerName: 'Solar Home Wrap', field: 'solarHomeWrap', flex: 2,cellStyle:{background:"#cf5a39"} },
    { headerName: 'Quantity', field: 'solarQuantity', flex: 1,cellStyle:{background:"lightBlue"} }
  ], []);

  // Define rows for both tables
  const rows1 = useMemo(() => [
    { genericHomeWrap: 'Per Piece', genericQuantity: 0, gripRightHomeWrap: 'Per Piece', gripRightQuantity: '' }
  ], []);

  const rows2 = useMemo(() => [
    { tyvekHomeWrap: 'Per Piece', tyvekQuantity: 0, solarHomeWrap: 'Per Piece', solarQuantity: '' }
  ], []);

  return (
    <Box sx={{mb:2}}>
        <Table
          columns={columns1}
          rows={rows1}
          withOutMargin
        />
        <Table
          withOutMargin
          columns={columns2}
          rows={rows2}
        />
    </Box>
  );
};

export default HomeWrapTables;

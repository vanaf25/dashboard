"use client";
import {Grid} from "@mui/material";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";
import Table from "../../../../components/letters/Table/Table";
import Box from "@mui/material/Box";
import TableName from "../../../../components/letters/TableName/TableName";

const ExtraParts = () => {
  const extraLumber=[
    {
      name: "Extra lumber",
      rows: [
        { item: "Treated 2x4x12", quantity: 0 },
        { item: "Treated 2x6x12", quantity: 0 },
        { item: "Treated 2x8x12", quantity: 0 },
        { item: "Treated 2x12x12", quantity: 0 },
        { item: "Treated 4x4x8", quantity: 0 },
        { item: "Treated 4x4x12", quantity: 0 },
        { item: "Treated 4x6x12", quantity: 0 },
        { item: "Cedar 2x12x12", quantity: 0 },
        { item: "Cedar 6x6x8", quantity: 0 },
        { item: "Cedar 6x6x12", quantity: 0 }
      ]
    },
  ]
  const inputData = [
    "1201\t0\t1511\t0",
    "1200\t0\t1512\t0",
    "1203\t0\t1513\t0",
    "1204\t0\t1414\t0",
    "1205\t0\t1510\t0",
    "1202\t0\t1515\t0",
    "1206\t0\t1516\t0",
    "1401\t0\t1412\t0",
    "2504\t0\t1413\t0",
    "2501\t0\t1517\t0",
    "2502\t0\t1518\t0",
    "2504\t0\t1600\t0",
    "2511\t0\t1601\t0",
    "1607\t0\t1602\t0",
    "1606\t0\t1603\t0",
    "1605\t0\t1604\t0"
  ];
  const rows = inputData.map(line => {
    const parts = line.split('\t');
    return {
      part1: parts[0],
      part2: parts[1],
      part3: parts[2],
      part4: parts[3]
    };
  });

  // Define column definitions
  const columnDefs = [
    { headerName: "Part 1", field: "part1",flex:1 },
    { headerName: "Part 2", field: "part2",flex:1 },
    { headerName: "Part 3", field: "part3",flex:1 },
    { headerName: "Part 4", field: "part4",flex:1}
  ];
  return (
    <Box mt={2}>
      <Grid spacing={2} container>
        <Grid item xs={12} sm={5}>
          {extraLumber.map(el=><TableWithFalseColumn
            rows={el.rows} key={el.name}
                                                    itemHeaderName={el.name}/>)}
        </Grid>
        <Grid item xs={12} sm={7}>
          <TableName>Extra parts</TableName>
          <Table rows={rows} columns={columnDefs} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExtraParts;

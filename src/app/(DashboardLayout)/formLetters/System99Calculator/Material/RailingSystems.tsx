"use client";
import {Grid} from "@mui/material";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";
import TableName from "../../../../components/letters/TableName/TableName";

const RailingSystems = () => {
  const data1 = [
    { item: '4x4x8 treated pine', quantity: 0 },
    { item: 'Cedar 2x4x8', quantity: 0 },
    { item: 'Cedar 2x8x12', quantity: 0 },
    { item: 'Lagg bolts 4"', quantity: 0 },
    { item: 'Washers', quantity: 0 },
    { item: 'Metal Balusters', quantity: 0 },
  ];

  const data2 = [
    { item: '4x4x8 treated pine', quantity: 0 },
    { item: 'Cedar 2x4x8', quantity: 0 },
    { item: 'Cedar 2x8x12', quantity: 0 },
    { item: 'Lagg bolts 4"', quantity: 0 },
    { item: 'Washers', quantity: 0 },
    { item: 'Cedar Balusters', quantity: 0 },
  ];
  const data3=[ { item: '4x4x8 treated pine', quantity: 0 },
    { item: 'Treated 2x4x8', quantity: 0 },
    { item: 'Treated 2x8x8', quantity: 0 },
    { item: 'Lagg bolts 4"', quantity: 0 },
    { item: 'Washers', quantity: 0 },
    {item:"2320",quantity: 0}
  ]
  const data4 = [
    { item: 'Fe26 adjustable railing 34" x 8\'', quantity: 0 },
    { item: 'Fe26 Railing 34" x 8\'', quantity: 0 },
    { item: 'Fe26 Post base 2" x 39.5 x 4\'', quantity: 0 },
    { item: 'FE26-UB-04-1" bracket', quantity: 0 },
    { item: 'FE26-UB-04-1" Angle Bracket', quantity: 0 },
    { item: 'FE26-PRESSED DOME CAP', quantity: 0 },
  ];
  return (
    <div>
      <TableName>Railing Systemm</TableName>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TableWithFalseColumn rows={data1} itemHeaderName={"Metal Balusters Cedar Railing"}/>
          <TableWithFalseColumn rows={data2} itemHeaderName={"Standard Cedar Railing"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TableWithFalseColumn rows={data3} itemHeaderName={"Standard Treated Railing"}/>
          <TableWithFalseColumn rows={data4} itemHeaderName={"Fortress Metal Railing"}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default RailingSystems;

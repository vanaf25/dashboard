"use client";
import TableName from "../../../../components/letters/TableName/TableName";
import {useCallback, useMemo} from "react";
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";
import {Grid} from "@mui/material";

const DeckFrame = () => {
  const getRows = useCallback(() => [
    { item: 'Treated 2x6x12', quantity: 0 },
    { item: 'Treated 2x6x16', quantity: 0 },
    { item: 'Treated 2x6x20', quantity: 0 },
    { item: 'Treated 4x4x8', quantity: 0 },
    { item: 'Treated 4x4x12', quantity: 0 },
    { item: 'Joist Hangers for 6 inch', quantity: 0 },
  ], []);
  const rows1=useMemo(()=>getRows(),[])
  const rows2=useMemo(()=>getRows(),[])
  const generateRows3=useCallback(
    ()=>([{item:"Treated 2x12x12",quantity:0}]),[])
  const generateRows4=useCallback(
    ()=>([{item:"Cedar 2x12x12",quantity:0}]),[])
  const deckWoodTables=[{
    title:"36 inch Treated",
    rows:generateRows3()
  },
    {title: "48 Inch Treated stairs",rows:generateRows3(),},
    {title: "72 inch Treated Stairs",rows: generateRows3()},
    {title: "36 Inch Cedar Stairs",rows: generateRows4()},
    {title: "48 Inch cedar stairs",rows: generateRows4()},
    {title: "72 Inch cedar stairs",rows: generateRows4()},
    {title: "Stair Frame 36 and 48 inch",rows:[
      {item:"Treated 2x12x12",quantity:0},
        {item:"Cedar 2x12x12",quantity:0}
      ]},
    {title:"72 inch frame",rows:[
        {item:"Treated 2x12x12",quantity:0},
        {item:"Cedar 2x12x12",quantity:0}
      ]}
  ];
  const deckStairsTrexTables=[
    {
    headerName:"36 Inch Trex G1",
      rows:[{item:"Trex 1x6x12",quantity:0}]
  },
    {
      headerName:"48 Inch Trex G1",
      rows:[{item:"Trex 1x6x12",quantity:0}]
    },
    {
      headerName:"72 Inch Trex G1",
      rows:[{item:"Trex 1x6x12",quantity:0}]
    }
  ]
  return (
    <div>
      <Grid container>
        <Grid xs={12} sm={4.5} item>
          <TableName>Deck Frame</TableName>
          <TableWithFalseColumn itemHeaderName={"Deck Frame Grade 1"}  rows={rows1}/>
          <TableWithFalseColumn itemHeaderName={"Deck Frame Grade 2"}  rows={rows2}/>
        </Grid>
        <Grid xs={12} sm={4.5} item>
          <TableName>Deck Stairs Wood</TableName>
          {deckWoodTables.map(
            el=>
              <TableWithFalseColumn withOutMargin key={el.title} itemHeaderName={el.title} rows={el.rows}/>)}
        </Grid>
        <Grid xs={12} sm={3}>
          <TableName>Deck Stairs Trex</TableName>
          {deckStairsTrexTables.map(el=><TableWithFalseColumn withOutMargin key={el.headerName}
                                                              itemHeaderName={el.headerName} rows={el.rows}/>)}

        </Grid>
      </Grid>

    </div>
  );
};

export default DeckFrame;

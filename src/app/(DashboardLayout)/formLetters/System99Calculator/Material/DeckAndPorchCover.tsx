"use client";
import Box from "@mui/material/Box";
import TableName from "../../../../components/letters/TableName/TableName";
import TableGrid from "../../../../components/letters/TableGrid/TableGrid";

const DeckAndPorchCover = () => {
  const tables=[{
    name:"Cover Frame",
    rows:[
      { item: "Framing lumber 2x8x12", quantity: 0 },
      { item: "Framing lumber 2x8x16", quantity: 0 },
      { item: "Framing lumber 2x8x20", quantity: 0 },
      { item: "Joist hangers for 8\"", quantity: 0 },
      { item: "Synthetic Felt", quantity: 0 }
    ]
  },
    {
      name:"3 Tab Shingle",
      rows:[
        { item: "Standard 3 tab shingles", quantity: 0 }
      ]
    },
    {
      name:"Architectural Shingle",
      rows:[{item: "Standared Archectural shingles",quantity: 0}]
    },
    {name:"Rolled Modified",
      rows:[
        { item: "Modified Rolled roofing", quantity: 0 },
        { item: "Torch down Base sheet", quantity: 0 }
      ]}
  ]
  const tables2 = [
    {
      name: "OSB Roof Sheeting",
      rows: [{ item: "1106", quantity: 0 }]
    },
    {
      name: "Ply Wood Sheeting",
      rows: [{ item: "1108", quantity: 0 }]
    },
    {
      name: "Hardie Soffit",
      rows: [
        { item: "2601", quantity: 0 },
        { item: "1701", quantity: 0 },
        { item: "1702", quantity: 0 },
        { item: "1703", quantity: 0 }
      ]
    },
    {
      name: "Plywood Soffit",
      rows: [{ item: "1108", quantity: 0 }]
    },
    {
      name: "Bead Board Soffit",
      rows: [{ item: "1110", quantity: 0 }]
    },
    {
      name: "Paint to Match",
      rows: [{ item: "1518", quantity: 0 }]
    }
  ];
  const guttersTable = {
    name: "Gutters",
    rows: [
      { item: "2610", quantity: 0 },
      { item: "2611", quantity: 0 },
      { item: "2612", quantity: 0 },
      { item: "2613", quantity: 0 },
      { item: "2614", quantity: 0 },
      { item: "2615", quantity: 0 },
      { item: "2616", quantity: 0 },
      { item: "2617", quantity: 0 },
      { item: "2618", quantity: 0 }
    ]
  };
  const arrayOfTables=[tables,tables2,[guttersTable]]
  return (
    <Box mt={2}>
      <TableName>DeckAnd Porch Covering</TableName>
     <TableGrid tables={arrayOfTables}/>
    </Box>
  );
};

export default DeckAndPorchCover;

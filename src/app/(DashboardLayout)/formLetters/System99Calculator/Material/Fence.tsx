"use client";
import TableGrid from "../../../../components/letters/TableGrid/TableGrid";
import TableName from "../../../../components/letters/TableName/TableName";
import Box from "@mui/material/Box";

const Fence = () => {
  const tables=[
    [
      {
        name: "Forever Frame 6 ft.",
        rows: [
          { item: "Treated 2x4x12", quantity: 0 },
          { item: "16 Ga Galvanized Line Post 8'", quantity: 0 },
          { item: "12 Ga Pipe Grip Tie 2\"", quantity: 0 },
          { item: "Aluminum Post Cap 2 3/8\"", quantity: 0 },
          { item: "12 Ga Pipe Grip Tie 1 1/2\"", quantity: 0 },
          { item: "12 Ga Galvanized Corner Pipe Tie 2\"", quantity: 0 },
          { item: "Galvanized Post Cap 1 5/8\"", quantity: 0 },
          { item: "80 lb. Concrete Mix", quantity: 0 }
        ]
      },
      {
        name: "Composite Picket 5 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      },
      {
        name: "Cedar Fence Picket 5 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      },
      {
        name: "Cedar Fence Picket 3 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      },
      {
        name: "Cedar 4 foot 3 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      }
    ],
    [
      {
        name: "Forever Frame 4 ft.",
        rows: [
          { item: "Treated 2x4x12", quantity: 0 },
          { item: "16 Ga Galvanized Line Post 8'", quantity: 0 },
          { item: "12 Ga Pipe Grip Tie 1 1/2\"", quantity: 0 },
          { item: "Aluminum Post Cap 2 3/8\"", quantity: 0 },
          { item: "12 Ga Pipe Grip Tie 2\"", quantity: 0 },
          { item: "12 Ga Galvanized Corner Pipe Tie 2\"", quantity: 0 },
          { item: "Galvanized Post Cap 1 5/8\"", quantity: 0 },
          { item: "80 lb. Concrete Mix", quantity: 0 }
        ]
      },
      {
        name: "Treated Picket 5 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      },
      {
        name: "Treated Picket 3 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      },
      {
        name: "Treated 4 foot 3 1/2",
        rows: [
          { item: "Per piece", quantity: 0 }
        ]
      }
    ],
    [
      {
        name: "Wood Frame 6 ft.",
        rows: [
          { item: "Treated 2x4x12", quantity: 0 },
          { item: "Treated 4x4x8", quantity: 0 },
          { item: "80 lb. Concrete Mix", quantity: 0 }
        ]
      }
    ]

]
  return (
    <Box mt={2}>
      <TableName>Fence</TableName>
      <TableGrid tables={tables}/>
    </Box>
  );
};

export default Fence;

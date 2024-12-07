"use client";
import TableGrid from "../../../../components/letters/TableGrid/TableGrid";
const ConcreteSlab = () => {
  const tables=[
    {
      name: "Concrete Slab 4 inch",
      rows: [
        { item: "Ready mix concrete per yard", quantity: 0 },
        { item: "Treated 2x4x12", quantity: 0 },
        { item: "1/2 Rebar per piece", quantity: 0 }
      ]
    },
    {
      name: "Concrete Slab 6 inch",
      rows: [
        { item: "Ready mix concrete per yard", quantity: 0 },
        { item: "Treated 2x4x12", quantity: 0 },
        { item: "3/4 rebar per piece", quantity: 0 }
      ]
    }
  ]
  return (
    <div>
      <TableGrid  tables={[tables]}/>
    </div>
  );
};

export default ConcreteSlab;

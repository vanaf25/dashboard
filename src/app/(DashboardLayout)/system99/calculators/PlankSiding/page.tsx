"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const PlankSiding = () => {
  const inputFields = [
    { label: "Wall Length (LF)", name: "A", id: "outlined-basic1" },
    { label: "Wall Height (LF)", name: "B", id: "outlined-basic2" },
    { label: "Reveal Height (li)", name: "R", id: "outlined-basic3" },
  ];
  const result = [
    { id: 'WallHeight', value: 0, label: 'Wall Height (li)' },
    { id: 'WallArea', value: 0, label: 'Wall Area (SF)' },
    { id: 'PlanksPerRowQuantity', value: 0, label: 'Planks per Row Quantity (ea)' },
    { id: 'RowsPerWall4InchRevealQuantity', value: 0, label: 'Rows per Wall 4" Reveal Quantity (ea)' },
    { id: 'RowsPerWall7InchRevealQuantity', value: 0, label: 'Rows per Wall 7" Reveal Quantity (ea)' },
    { id: 'RowsPerWall10_5InchRevealQuantity', value: 0, label: 'Rows per Wall 10.5" Reveal Quantity (ea)' },
    { id: 'PlankTotalQuantity', value: 0, label: 'Plank Total Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"plankSiding"}/>
    </div>
  );
};

export default PlankSiding;

"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const SheetSiding = () => {
  const inputFields = [
    { label: "Wall Height (LF)", name: "A", id: "outlined-basic4" },
    { label: "Wall Length (LF)", name: "B", id: "outlined-basic5" },
  ];
  const result = [
    { id: 'WallAreaSF', value: 0, label: 'Wall Area (SF)' },
    { id: 'SidingPanel4x8Quantity', value: 0, label: 'Siding Panel 4x8 Quantity (ea)' },
    { id: 'SidingPanel4x10Quantity', value: 0, label: 'Siding Panel 4x10 Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"sheetSiding"}/>
    </div>
  );
};

export default SheetSiding;

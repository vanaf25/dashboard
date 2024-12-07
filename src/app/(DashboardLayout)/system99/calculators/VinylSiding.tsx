"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";
const VinylSiding = () => {
  const inputFields = [
    { label: "Wall Length (LF)", name: "A", id: "outlined-basic1" },
    { label: "Wall Height (LF)", name: "B", id: "outlined-basic2" },
    { label: "Vinyl Coverage Height (li)", name: "M", id: "outlined-basic3" },
    { label: "Starter/Frieze Size Length (LF)", name: "N", id: "outlined-basic4" }
  ];
  const result = [
    { id: 'Siding12InchCoverageQuantity', value: 0, label: 'Siding 12" Coverage Quantity (ea)' },
    { id: 'SidingVariableCoverageQuantity', value: 0, label: 'Siding Variable Coverage Quantity (ea)' },
    { id: 'StarterFriezeTrim12ftQuantity', value: 0, label: 'Starter/Frieze Trim 12\' Quantity (ea)' },
    { id: 'StarterFriezeTrimVariableQuantity', value: 0, label: 'Starter/Frieze Trim Variable Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"vinylSiding"}/>
    </div>
  );
};

export default VinylSiding;

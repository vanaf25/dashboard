"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const StuccoWallCovering = () => {
  const inputFields = [
    { label: "Wall Length (LF)", name: "L", id: "wall-length" },
    { label: "Wall Height (LF)", name: "W", id: "wall-height" },
    { label: "Basecoat Coverage Area (SF)", name: "T", id: "basecoat-coverage" }
  ];
  const result = [
    { id: 'Basecoat80lbQuantity', value: 0, label: 'Basecoat 80lb Quantity (ea)' },
    { id: 'Topcoat80lbQuantity', value: 0, label: 'Topcoat 80lb Quantity (ea)' },
    { id: 'Fastener1inQuantity', value: 0, label: 'Fastener 1in Quantity (ea)' },
    { id: 'SealerQuantity', value: 0, label: 'Sealer Quantity (G)' },
    { id: 'PaintAndSealerQuantity', value: 0, label: 'Paint & Sealer Quantity (G)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"stuccoWallCovering"}/>
    </div>
  );
};

export default StuccoWallCovering;

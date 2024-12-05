"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const PergolaShade = () => {
  const inputFields = [
    { label: "Pergola Length (LF)", name: "L", id: "outlined-basic1" },
    { label: "Pergola Width (LF)", name: "W", id: "outlined-basic2" },
    { label: "Sheet Length (LF)", name: "A", id: "outlined-basic3" },
    { label: "Sheet Width (LF)", name: "B", id: "outlined-basic4" },
    { label: "Seam Cover Length (LF)", name: "D", id: "outlined-basic5" }
  ];
  const result = [
    { id: 'ImperviousPolycarbonateQuantity', value: 0, label: 'Impervious Polycarbonate Quantity (ea)' },
    { id: 'EdgeCoverQuantity', value: 0, label: 'Edge Cover Quantity (ea)' },
    { id: 'SeamCoverQuantity', value: 0, label: 'Seam Cover Quantity (ea)' },
    { id: 'ScrewQuantity', value: 0, label: 'Screw Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"pergolaShade"}/>
    </div>
  );
};

export default PergolaShade;

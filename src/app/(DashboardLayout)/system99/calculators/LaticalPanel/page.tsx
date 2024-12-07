"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const LaticalPanel = () => {
  const result = [
    { id: 'LatticePanelTrimTotalQuantity', value: 0, label: 'Lattice Panel Trim Total Quantity' },
    { id: 'LatticePanelScrewTotalQuantity', value: 0, label: 'Lattice Panel Screw Total Quantity' }
    // Add more result fields as needed
  ];
  const inputFields=[
  { label: "Lattice Length (LF)", name: "L", id: "outlined-basic1" },
  { label: "Lattice Width (LF)", name: "W", id: "outlined-basic2" }]
  return (
    <div>
        <FormCreator url={"laticalPanel"} result={result} inputFields={inputFields}/>
    </div>
  );
};

export default LaticalPanel;

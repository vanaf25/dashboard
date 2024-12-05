"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const StairFraming = () => {
  const inputFields = [
    { label: "Stairs Length (L)", name: "L", id: "outlined-basic1" },
    { label: "Stairs Width (W)", name: "W", id: "outlined-basic2" },
    { label: "Board Length (P)", name: "P", id: "outlined-basic3" },
    { label: "Board Width (A)", name: "A", id: "outlined-basic4" },
    { label: "Step Depth (M)", name: "M", id: "outlined-basic5" },
    { label: "Riser Height (J)", name: "J", id: "outlined-basic6" },
    { label: "Stair Finish Height (F)", name: "F", id: "outlined-basic7" },
    { label: "Riser Quantity (Z)", name: "Z", id: "outlined-basic8" }
  ];
  const result = [
    { id: 'StringerJoistHangerQuantity', value: 0, label: 'Stringer Joist Hanger Quantity (ea)' },
    { id: 'StringerJoistHangerNailQuantity', value: 0, label: 'Stringer Joist Hanger Nail Quantity (ea)' },
    { id: 'TreadFastenerQuantity', value: 0, label: 'Tread Fastener Quantity (ea)' },
    { id: 'RiserFastenerQuantity', value: 0, label: 'Riser Fastener Quantity (ea)' },
    { id: 'SkirtingBothSidesArea', value: 0, label: 'Skirting Both Sides Area (si)' },
    { id: 'SkirtingOneSideArea', value: 0, label: 'Skirting One Side Area (si)' }
  ];
  return (
    <div>
      <FormCreator result={result} inputFields={inputFields} url={"stairFraming"}/>
    </div>
  );
};

export default StairFraming;

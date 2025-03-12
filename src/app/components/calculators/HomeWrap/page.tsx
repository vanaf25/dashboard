"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const HomeWrap = () => {
  const inputFields = [
    { label: "Wall Length", name: "A", id: "WallLength",default:true },
    { label: "Wall Width", name: "B", id: "WallWidth" },
    { label: "Trim Length", name: "L", id: "TrimLength" },
    { label: "Trim Width", name: "M", id: "TrimWidth" }
  ];
  const result = [
    { id: 'ThermoplasticWrapRollQuantity', value: 0, label: 'Thermoplastic Wrap Roll Quantity (ea)' },
    { id: 'OSBSheathingNailQuantity', value: 0, label: 'OSB Sheathing Nail Quantity (ea)' },
    { id: 'PaintNewSidingBareQuantity', value: 0, label: 'Paint New Siding Bare Quantity (G)' },
    { id: 'PaintExistingSidingBareQuantity', value: 0, label: 'Paint Existing Siding Bare Quantity (G)' },
    { id: 'PaintTrimQuantity', value: 0, label: 'Paint Trim Quantity (G)' }
  ];


  return (
    <div>
    <FormCreator result={result} inputFields={inputFields} url={"homeWrap"}/>
    </div>
  );
};

export default HomeWrap;

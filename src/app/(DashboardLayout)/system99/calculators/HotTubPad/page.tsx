"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";
const HotTubPad = () => {
  const inputFields = [
    { label: "Wall Length", name: "L", id: "outlined-basic1" },
    { label: "Wall Width", name: "W", id: "outlined-basic2" },
    {label: "Tab Size (Width)",name:"S",id:"outlined-basic3"},
    {label: "Ground Cloth (Size)",name:"C",id:"outlined-basic3"},
  ];
  const result = [
    { id: 'LumberTotalLength', value: 0, label: '6x6 Lumber Total Length' },
    { id: 'SpikeTotalQuantity', value: 0, label: 'Spike Total Quantity' },
    { id: 'GravelFillTotalQuantityCF', value: 0, label: 'Gravel Fill Total Quantity CF' },
    { id: 'GroundClothTotalQuantitySF', value: 0, label: 'Ground Cloth Total Quantity SF' }
  ];
  return (
    <div>
      <FormCreator url={"hotTubPad"} result={result} inputFields={inputFields}/>
    </div>
  );
};
export default HotTubPad;

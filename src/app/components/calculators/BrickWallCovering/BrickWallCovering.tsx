"use client";
import FormCreator from "@/app/components/system99/calculations/Form/Form";
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
const BrickWallCovering = () => {
  const inputFields = [
    { label: "Wall Length (LF)", name: "L", id: "WallLength",default:true},
    { label: "Wall Height (LF)", name: "W", id: "WallHeight",default:true},
    {label: "Brick Area(si)",    name: "S",id:"brick",type:"select",options:["18","22","27"]}];
  const result = [
    { id: 'CinderBlockQuantity', value: 0, label: 'Cinder Block Quantity (ea)' },
    { id: 'BrickQuantity', value: 0, label: 'Brick Quantity (ea)' },
    { id: 'BrickMortarQuantity', value: 0, label: 'Brick Mortar Quantity (ea)' },
    { id: 'CinderBlockMortarQuantity', value: 0, label: 'Cinder Block Mortar Quantity (ea)' },
    { id: 'SealerQuantity', value: 0, label: 'Sealer Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator withOutDefaultValues inputFields={inputFields}
                 result={result} url={"brickWallCovering"}/>
    </div>
  );
};

export default BrickWallCovering;

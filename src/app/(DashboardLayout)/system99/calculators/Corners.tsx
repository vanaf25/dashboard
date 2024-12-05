"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const Corners = () => {
  const inputFields = [
    { label: "Corner Height (LF)", name: "H", id: "outlined-basic1" },
    { label: "Corner Quantity (ea)", name: "Q", id: "outlined-basic2" },
    { label: "Vinyl or Prefab Corner Length (LF)", name: "S", id: "outlined-basic3" }
  ];
  const result = [
    { id: 'InsideCornerQuantity', value: 0, label: 'Inside Corner Quantity (ea)' },
    { id: 'OutsideCornerWoodQuantity', value: 0, label: 'Outside Corner Wood Quantity (ea)' },
    { id: 'OutsideCornerVinylPrefabQuantity', value: 0, label: 'Outside Corner Vinyl/Prefab Quantity (ea)' }
  ];
  return (
    <div>
      <FormCreator inputFields={inputFields} url={'corners'} result={result}/>
    </div>
  );
};

export default Corners;

import FormCreator from "@/app/components/system99/calculations/Form/Form";
const BrickWallCovering = () => {
  const inputFields = [
    { label: "Wall Length (LF)", name: "L", id: "wall-length"},
    { label: "Wall Height (LF)", name: "W", id: "wall-height",},
    {label: "Brick Area(si)",    name: "S",id:"brick"}
  ];
  const result = [
    { id: 'CinderBlockQuantity', value: 0, label: 'Cinder Block Quantity (ea)' },
    { id: 'BrickQuantity', value: 0, label: 'Brick Quantity (ea)' },
    { id: 'BrickMortarQuantity', value: 0, label: 'Brick Mortar Quantity (ea)' },
    { id: 'CinderBlockMortarQuantity', value: 0, label: 'Cinder Block Mortar Quantity (ea)' },
    { id: 'SealerQuantity', value: 0, label: 'Sealer Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"brickWallCovering"}/>
    </div>
  );
};

export default BrickWallCovering;

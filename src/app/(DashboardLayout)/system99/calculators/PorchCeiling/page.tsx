"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const PorchCeiling = () => {
  const inputFields = [
    { label: "Ceiling Length (LF)", name: "A", id: "outlined-ceiling-length" },
    { label: "Ceiling Width (LF)", name: "W", id: "outlined-ceiling-width" },
    { label: "JChannel Length (LF)", name: "L", id: "outlined-jchannel-length" },
    { label: "Soffit Width (li)", name: "M", id: "outlined-soffit-width" },
  ];
  const result = [
    { id: 'Sheathing4x8Quantity', value: 0, label: 'Sheathing 4x8 Quantity (ea)' },
    { id: 'Sheathing4x10Quantity', value: 0, label: 'Sheathing 4x10 Quantity (ea)' },
    { id: 'JChannelQuantity', value: 0, label: 'J Channel Quantity (ea)' },
    { id: 'HBend4x8SheathingQuantity', value: 0, label: 'H Bend for 4x8 Sheathing Quantity (ea)' },
    { id: 'HBend4x10SheathingQuantity', value: 0, label: 'H Bend for 4x10 Sheathing Quantity (ea)' },
    { id: 'CeilingPaintQuantity', value: 0, label: 'Ceiling Paint Quantity (G)' },
    { id: 'SoffitPieceQuantity', value: 0, label: 'Soffit Piece Quantity (ea)' },
  ];

  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"porchCeiling"}/>
    </div>
  );
};

export default PorchCeiling;

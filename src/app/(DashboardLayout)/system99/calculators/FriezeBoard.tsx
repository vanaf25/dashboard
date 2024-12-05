"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const FriezeBoard = () => {
  const inputFields = [
    { label: "Wall Length (LF)", name: "A", id: "outlined-basic1" },
    { label: "Wall Height (LF)", name: "B", id: "outlined-basic2" },
    {
      label: "Board Length (LF)",
      name: "L",
      id: "outlined-basic3",
      options: [8, 12, 16]
    }
  ];
  const result = [
    { id: 'FriezeBoardNailTotalQuantity', value: 0, label: ' Frieze Board Total Nail Quantity (ea)' }
  ];
  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"friezeBoard"}/>
    </div>
  );
};

export default FriezeBoard;

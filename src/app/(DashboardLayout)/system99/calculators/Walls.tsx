"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const Walls = () => {
  const inputFields = [
    { label: "Wall Length", name: "L", id: "outlined-basic1" },
    { label: "Wall Width", name: "W", id: "outlined-basic2" },
    { label: "Board Length", name: "P", id: "outlined-basic3" },
    { label: "Stud Spacing", name: "M", id: "outlined-basic4" },
    { label: "Openings Quantity", name: "O", id: "outlined-basic5" },
    { label: "Door Width", name: "H", id: "outlined-basic6" },
    { label: "Window Width", name: "G", id: "outlined-basic7" }
  ];
  const result = [
    { id: 'StudFastenerQuantity', value: 0, label: 'Stud Fastener Quantity' },
    { id: 'SolePlateFastenerQuantity', value: 0, label: 'Sole Plate Fastener Quantity' },
    { id: 'WallPlateFastenerQuantity', value: 0, label: 'Wall Plate Fastener Quantity' },
    { id: 'HeaderNailQuantity', value: 0, label: 'Header Nail Quantity' }
    // Add more result fields as needed
  ];

  return (
    <div>
      <FormCreator url={"walls"} result={result} inputFields={inputFields}/>
    </div>
  );
};

export default Walls;

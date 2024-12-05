"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const Soffit = () => {
  const inputFields = [
    { label: "Soffit Length (LF)", name: "A", id: "outlined-basic1" },
    { label: "Soffit Piece or H Bend Length (LF)", name: "L", id: "outlined-basic2" },
    { label: "Soffit Size Width (li)", name: "M", id: "outlined-basic3" }
  ];
  const result = [
    { id: 'SoffitTotalWoodHB', value: 0, label: 'Soffit Total (Wood/HB)  (ea)' },
    { id: 'HBendTotal', value: 0, label: 'H Bend Total  (ea)' },
    { id: 'SoffitTotalVinylAl', value: 0, label: 'Soffit Total (Vinyl/Al)  (ea)' },
    { id: 'SoffitJChannelTotal', value: 0, label: 'Soffit J Channel Total  (ea)' },
    { id: 'SoffitNail', value: 0, label: 'Soffit Nail  (ea)' },
    { id: 'SoffitCaulk', value: 0, label: 'Soffit Caulk  (ea)' },
    { id: 'SoffitPaint', value: 0, label: 'Soffit Paint  (G)' }
  ];

  return (
    <div>
    <FormCreator inputFields={inputFields} result={result} url={"soffit"}/>
    </div>
  );
};

export default Soffit;

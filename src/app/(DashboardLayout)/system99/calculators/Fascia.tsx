"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const Fascia = () => {
  const inputFields = [
    { label: "Fascia Length (LF)", name: "A", id: "fascia-length" },
    { label: "Fascia Size Height (li)", name: "M", id: "fascia-height" },
    { label: "Fascia Size Width (LF)", name: "S", id: "fascia-width" }
  ];
  const result = [
    { id: 'FasciaTotalQuantity', value: 0, label: 'Fascia Total Quantity (ea)' },
    { id: 'FasciaPaintQuantity', value: 0, label: 'Fascia Paint Quantity (G)' },
    { id: 'FasciaCaulkQuantity', value: 0, label: 'Fascia Caulk Quantity (ea)' },
    { id: 'FasciaNailsQuantity', value: 0, label: 'Fascia Nails Quantity (ea)' }
  ];
  return (
    <div>
      <FormCreator inputFields={inputFields} result={result} url={"fascia"}/>
    </div>
  );
};

export default Fascia;

"use client"
import FormCreator from "@/app/components/system99/calculations/Form/Form";

const Gutters = () => {
  const inputFields = [
    { label: "Provide Gutter Length", name: "L", id: "outlined-basic1" },
    { label: "Provide Downspout Quantity", name: "O", id: "outlined-basic2" },
    { label: "Provide Downspout Height", name: "D", id: "outlined-basic3" },
    { label: "Provide Gutter Height", name: "H", id: "outlined-basic4" }
  ];
  const result=[
    { id: 'DSQ', value: 0, label: 'Downspout section quantity' },
    { id: 'DBQ', value: 0, label: 'Downspout bracket quantity' },
    { id: 'DFQ', value: 0, label: 'Downspout fastener quantity' },
    { id: 'GBQ', value: 0, label: 'Gutter Bracket Quantity' },
    { id: 'DEQ', value: 0, label: 'Downspout Extension Quantity' },
    { id: 'ZSQ', value: 0, label: 'Zip Screw Quantity' }
  ]
  return (
    <div>
        <FormCreator inputFields={inputFields} url={""} result={result}/>
    </div>
  );
};
export default Gutters;

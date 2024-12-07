"use client";
import TableGrid from "../../../../components/letters/TableGrid/TableGrid";

const VinylSoffit = () => {
  const tables=[
    [
      {
        name: "Vinyl Soffit",
        rows: [
          { item: "Vinyl soffit J chanle", quantity: 0 },
          { item: "3 1/2\" Exterior screws 1 lb box", quantity: 0 },
          { item: "Vented Cedar mill soffit 12x12", quantity: 0 },
          { item: "Vented Cedar mill soffit 16x12", quantity: 0 },
          { item: "Vented Cedar mill soffit 24x8", quantity: 0 },
          { item: "Non vented cedar mill soffit 12x12", quantity: 0 },
          { item: "Non vented cedar mill soffit 16x12", quantity: 0 },
          { item: "Non vented cedar mill soffit 24x8", quantity: 0 }
        ]
      },
      {
        name: "Aluminium Ceiling",
        rows: [
          { item: "Non vented aluminium Fascia", quantity: 0 },
          { item: "Aluminium Soffit J chanle", quantity: 0 },
          { item: "Aluminium Fascia", quantity: 0 },
          { item: "Aluminium Coil 6\" fascia", quantity: 0 },
          { item: "Aluminium Coil 8\" fascia", quantity: 0 },
          { item: "Aluminium Coil 10\" fascia", quantity: 0 }
        ]
      },
      {
        name: "Aluminium Fascia",
        rows: [
          { item: "Aluminium Coil 6\" fascia", quantity: 0 },
          { item: "Aluminium Coil 8\" fascia", quantity: 0 },
          { item: "Aluminium Coil 10\" fascia", quantity: 0 }
        ]
      }
    ],
    [
      {
        name: "Vinyl Fascia",
        rows: [
          { item: "Painters caulk white", quantity: 0 },
          { item: "Painters Caulk clear", quantity: 0 },
          { item: "Vinyl fascia 6\" by 8'", quantity: 0 },
          { item: "Vinyl fascia 8\" by 8'", quantity: 0 },
          { item: "Vinyl fascia 10\" by 8'", quantity: 0 }
        ]
      },
      {
        name: "Vinyl Ceiling",
        rows: [
          { item: "Solid Soffit panel 12\" by 12'", quantity: 0 },
          { item: "Vinyl J chanle", quantity: 0 }
        ]
      },
      {
        name: "Pre bent Aluminum Fascia",
        rows: [
          { item: "Pre bent Aluminum Fascia 6\"", quantity: 0 },
          { item: "Pre bent Aluminum Fascia 8\"", quantity: 0 }
        ]
      }
    ]
  ]
  return (
    <div>
      <TableGrid tables={tables}/>
    </div>
  );
};

export default VinylSoffit;

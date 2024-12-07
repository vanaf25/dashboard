import React, {useMemo, useRef} from 'react';
import Table from "../Table/Table";
import calculateTotalAmount from "../../../utils/calculateTotalAmount";
interface ProductTableProps{
  setTotalFromUpCharges:(arg:number)=>void
}
const ProductTable:React.FC<ProductTableProps> = ({setTotalFromUpCharges}) => {
  const columns = useMemo(() => [
    {
      headerName: "Product",
      field:"product",
      flex:1,
    },
    {
      headerName: 'Profit ',
      field: 'profit',
      flex: 1,
    },
    {
      headerName: 'Your 8%',
      field: 'your8Percent',
      flex: 1,
      valueGetter: (params:any) => {
        const profit = params.data.productProfit || 0;
        return (profit * 0.08).toFixed(2); // Calculate 8% of product profit
      },
    },
    {
      headerName: 'Up Charge NO More Than 8%',
      field: 'upCharge',
      cellEditor: 'agNumberCellEditor',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Your % of the Up Charge Total',
      field: 'yourPercentageOfUpCharge',
      valueGetter:(params:any)=>{
        return (params.data.upCharge*0.6).toFixed(2)
      },
      flex: 1,
    },
    {
      headerName: 'Total',
      field: 'total',
      valueGetter:(params:any)=>{
        return params.data.upCharge+params.data.profit
      },
      flex: 1,
    },
  ], []);
  const rows = useMemo(() => {
    const products = [
      "Hardie Cedar Mill 8 1/4",
      "Hardie Smooth 8 1/4",
      "Hardie Beaded 8 1/4",
      "Hardie Colonial 8 1/4",
      "Color Plus Cedar Mill 8 1/4",
      "Hardie 4x8 Sierra 8 on center",
      "Hardie 4x8 Stucco",
      "Hardie 4x8 Cedar mill",
      "Hardie 4x8 Smooth",
      "T 111 4x8, 8 Inch on Center",
      "T 111 4x8, 4 Inch on Center",
      "105 Pattern",
      "Ship Lap Pattern",
      "Prodigy Double 6",
      "Prodigy Dutch lap",
      "Prodigy Single 7",
      "Lineal, Window & Door 3 1/2\"",
      "Lineal, Window & Door 5 1/2\"",
      "Install New OSB Plywood",
      "Install Standard Vinyl Soffit",
      "Install Hidden Vent Soffit",
      "Install Hardie soffit",
      "Install Aluminum Fascia",
      "Install Hardie Fascia",
      "Install Cedar Fascia",
      "Install Vinyl Fascia",
      "Paint Newly Installed Siding",
      "Paint House",
      "Paint Soffit and Fascia Only",
      "Symington Windows",
      "Ply gem Windows",
      "Atrium Windows",
      "MASSARANDUBA",
      "Deck Surface Ipe",
      "Deck Surface Trex 1",
      "Deck Surface Trex 2",
      "Deck Surface Cedar 1 1/2",
      "Deck Surface Cedar 5/4",
      "Deck Surface Treated 5/4",
      "Metal Balusters Railing",
      "Standard Treated Railing",
      "Standard Cedar Railing",
      "Fortress Metal Railing",
      "36 Inch Treated Stairs",
      "48 Inch Treated Stairs",
      "72 Inch Treated Stairs",
      "36 Inch Cedar Stairs",
      "48 Inch Cedar Stairs",
      "72 Inch Cedar Stairs",
      "36 Inch Trex Stairs",
      "48 Inch Trex Stairs",
      "72 Inch Trex Stairs",
      "Deck Frame 1 2x6",
      "Deck Frame 1 2x8",
      "Composite Picket 5 1/2",
      "Cedar Fence Picket 5 1/2",
      "Cedar Fence Picket 3 1/2",
      "Treated Fence Picket 5 1/2",
      "Treated Fence Picket 3 1/2",
      "Cedar 4 Foot 3 1/2",
      "Treated 4 Foot 3 1/2",
      "Patio Cover with Flat Roof",
      "Patio Cover with 3 Tab Roof",
      "Patio cover with Architectural Roof",
      "Hardie Soffit",
      "Plywood Soffit",
      "Bead Board Soffit",
      "No Soffit Just Paint To Match",
      "Concrete Slab 4 Inch",
      "Concrete Slab 6 Inch",
      "4 Inch Gutters",
      "Porch Ceiling Aluminum",
      "Porch Ceiling Vinyl",
      "Porch Ceiling Hardie 4x8"
    ];

    return products.map(product => ({
      product,
      profit: Math.floor(Math.random() * 11),
      your8Percent: 0,
      upCharge: 0,
      yourPercentageOfUpCharge: 0
    }));
  }, []);
  const tableRef=useRef(null)
  const onCellValueChanged=(p:any)=>{
    console.log('p:',p)
    const newValue = p.newValue;
    console.log("new: ",newValue);
    if(p.colDef.field==="upCharge"){
      setTotalFromUpCharges(calculateTotalAmount(tableRef,"yourPercentageOfUpCharge"))
    }
  }
  return (
    <div>
      <Table customRef={tableRef} onCellValueChanged={onCellValueChanged} columns={columns} rows={rows}/>
    </div>
  );
};

export default ProductTable;

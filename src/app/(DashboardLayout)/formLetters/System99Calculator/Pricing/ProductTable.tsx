// ProductTable.js

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Table from "../../../../components/letters/Table/Table";
export function roundToTwoDecimalPlaces(num:number) {
  return Math.round(num * 100) / 100;
}
const ProductTable = () => {
  const rowData = [
    {
      "productName": "Hardie Cedar 8 1/4",
      "materialEstimate": 0,
      "overhead": null,
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 0,
      "profitPercentage": 0.8,
      "profit": null,
      "total": 0,
      "commissionPercentage": "0.08",
      "salesCommission": null,
      "totalCostToCustomer": 0
    },
    {
      "productName": "Metal Balusters Railing",
      "materialEstimate": 24.44,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 24.44,
      "profitPercentage": 0.8,
      "profit": 19.55,
      "total": 43.99,
      "commissionPercentage": "0.08",
      "salesCommission": 3.52,
      "totalCostToCustomer": 47.51
    },
    {
      "productName": "Siding Cement Board 8’",
      "materialEstimate": 10.88,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 10.88,
      "profitPercentage": 0.8,
      "profit": 8.7,
      "total": 19.58,
      "commissionPercentage": "0.08",
      "salesCommission": 1.57,
      "totalCostToCustomer": 21.15
    },
    {
      "productName": "Fencing Slats",
      "materialEstimate": 3.66,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 3.66,
      "profitPercentage": 0.8,
      "profit": 2.93,
      "total": 6.59,
      "commissionPercentage": "0.08",
      "salesCommission": 0.53,
      "totalCostToCustomer": 7.12
    },
    {
      "productName": "Railing 6’",
      "materialEstimate": 17.02,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 17.02,
      "profitPercentage": 0.8,
      "profit": 13.61,
      "total": 30.63,
      "commissionPercentage": "0.08",
      "salesCommission": 2.45,
      "totalCostToCustomer": 33.08
    },
    {
      "productName": "Vinyl Siding",
      "materialEstimate": 16.25,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 16.25,
      "profitPercentage": 0.8,
      "profit": 13,
      "total": 29.25,
      "commissionPercentage": "0.08",
      "salesCommission": 2.34,
      "totalCostToCustomer": 31.59
    },
    {
      "productName": "Plywood 4x8’",
      "materialEstimate": 9.54,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 9.54,
      "profitPercentage": 0.8,
      "profit": 7.63,
      "total": 17.17,
      "commissionPercentage": "0.08",
      "salesCommission": 1.37,
      "totalCostToCustomer": 18.54
    },
    {
      "productName": "Wood Paneling",
      "materialEstimate": 8.67,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 8.67,
      "profitPercentage": 0.8,
      "profit": 6.94,
      "total": 15.61,
      "commissionPercentage": "0.08",
      "salesCommission": 1.25,
      "totalCostToCustomer": 16.86
    },
    {
      "productName": "Roofing Shingles",
      "materialEstimate": 12.14,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 12.14,
      "profitPercentage": 0.8,
      "profit": 9.71,
      "total": 21.85,
      "commissionPercentage": "0.08",
      "salesCommission": 1.75,
      "totalCostToCustomer": 23.6
    },
    {
      "productName": "Concrete Blocks",
      "materialEstimate": 1.8,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 1.8,
      "profitPercentage": 0.8,
      "profit": 1.44,
      "total": 3.24,
      "commissionPercentage": "0.08",
      "salesCommission": 0.26,
      "totalCostToCustomer": 3.5
    },
    {
      "productName": "Brick Veneer",
      "materialEstimate": 7.2,
      "overhead": "",
      "laborTicker": 1,
      "laborCost": 0,
      "subTotal": 7.2,
      "profitPercentage": 0.8,
      "profit": 5.76,
      "total": 12.96,
      "commissionPercentage": "0.08",
      "salesCommission": 1.04,
      "totalCostToCustomer": 14
    }
  ];
  const columnDefs = [
    { headerName: 'Product Name', field: 'productName' },
    { headerName: 'BrickWallCovering Estimate', field: 'materialEstimate',cellRenderer:(params:any)=>{
      return `$${params.value}`
      } },
    { headerName: 'Overhead', field: 'overhead',editable:true,agCellEditor:"agNumberCellEditor" },
    { headerName: 'Labor Ticker', field: 'laborTicker' },
    { headerName: 'Labor Cost', field: 'laborCost' },
    { headerName: 'Sub Total', field: 'subTotal',valueGetter:(params:any)=>{
      const data=params.data
      return roundToTwoDecimalPlaces(
        Number(data.materialEstimate)
        +Number(data.laborCost)+Number(data.overhead))
      },
      },
    { headerName: 'Profit %', field: 'profitPercentage'},
    { headerName: 'Profit', field: 'profit',valueGetter:(params:any)=>{
        const data=params.data
        return  roundToTwoDecimalPlaces(+data.subTotal*Number(data.profitPercentage))
      },
      },
    { headerName: 'Total', field: 'total',valueGetter:({data}:any)=>roundToTwoDecimalPlaces(+data.subTotal+Number(data.profit))},
    { headerName: 'Commission %', field: 'commissionPercentage' },
    { headerName: 'Sales Commission', field: 'salesCommission',
      valueGetter:({data}:any)=>roundToTwoDecimalPlaces(
        +data.commissionPercentage*Number(data.total)) },
    { headerName: 'Total Cost to Customer', field: 'totalCostToCustomer',
      valueGetter:({data}:any)=>(+data.salesCommission+Number(data.total)).toFixed(2) },
  ];
  const cleanRowData = rowData.map((item) => ({
    ...item,
    materialEstimate: Number(item.materialEstimate),
    subTotal: Number(item.subTotal),
    profit: Number(item.profit),
    total: Number(item.total),
    salesCommission: Number(item.salesCommission),
    totalCostToCustomer:Number(item.totalCostToCustomer),
    profitPercentage:Number(item.profitPercentage),
    commissionPercentage:Number(item.commissionPercentage)
  }));

  console.log(cleanRowData);
  return (
    <div>
      <Table
        rows={rowData}
        columns={columnDefs}
        pagination={true}
        paginationPageSize={10}
        domLayout='autoHeight'/>
    </div>

  );
};

export default ProductTable;

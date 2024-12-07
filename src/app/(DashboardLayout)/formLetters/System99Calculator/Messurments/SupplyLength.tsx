"use client";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import TableName from "../../../../components/letters/TableName/TableName";

const App = () => {
  // Sample data for the tables
  const data = [
    { input1: 0, input2: 0, operation: 'Added' },
    { input1: 0, input2: 0, operation: 'Subtracted' },
    { input1: 0, input2: 0, operation: 'Multiplied' },
    { input1: 0, input2: 0, operation: 'Divided' },
  ];
  const lengthMultipliers = [8, 12, 16, 18, 20];
  const createColumnDefs = (operation) => [
    { headerName: 'Input 1',agCellEditor:"number",fieldType:"number", field: 'input1', editable: true },
    { headerName: 'Input 2',agCellEditor:"number",fieldType:"number", field: 'input2', editable: true },
    {
      headerName: operation,
      field: 'operation',
      valueGetter: (params) => {
        let { input1, input2 } = params.data;
        input1=Number(input1)
        input2=Number(input2);
        if (isNaN(input1) || isNaN(input2)) return ""
        switch (operation) {
          case 'Added':
            return  input1 + input2;
          case 'Subtracted':
            return input1 - input2;
          case 'Multiplied':
            return input1 * input2;
          case 'Divided':
            return input2 !== 0 ? (input1 / input2).toFixed(2) : 'N/A';
          default:
            return '';
        }
      },
    },
  ];
  const createLengthColumn=(number)=> {
    return [
      {
        headerName: 'Length', agCellEditor: "number",
        fieldType: "number", field: 'length', editable: true
      },
      {headerName: `divided  by ${number}`,
        field: "multiply",
        valueGetter: (p) => {
          let {length}=p.data;
          length= Number(length)
          if(isNaN(length)) return ""
          if(length===0) return  "N/A"
          return (length / number).toFixed(2)
        }
      },
      {
        headerName: `multiplied by ${number}`, field: "divide",
        valueGetter: (p) => {
          let {length}=p.data
          length=Number(length)
          if(isNaN(length)) return ""
          return length*number
        }
      }
    ]
  }
  return (
    <div style={{width:500}}>
      <TableName>
        Calculator for standard supply lengths
      </TableName>
      {data.map((item)=><div key={item.operation}  className="ag-theme-alpine"
                          style={{  width: '500px',height:93 }}>
        <AgGridReact
          rowData={Array(1).fill(()=>({input1:null,input2:null,operation:item.operation}))}
          columnDefs={createColumnDefs(item.operation)}
          defaultColDef={{ flex: 1, minWidth: 100 }}
        />
      </div>)}
      {lengthMultipliers.map(item => <div key={item.operation} className="ag-theme-alpine"
                                          style={{width: '500px', height: 93}}>
        <AgGridReact
          rowData={[{length:null}]}
          columnDefs={createLengthColumn(item)}
          defaultColDef={{flex: 1, minWidth: 100}}
        />
      </div>)}

    </div>
  );
};

export default App;

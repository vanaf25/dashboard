import React from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Define the props type
interface ReusableTableProps extends AgGridReactProps {
  withOutMargin?: boolean; // Optional boolean to determine margin behavior
  customRef?: React.Ref<AgGridReact>; // Optional reference to the AgGridReact instance
  rows: any[]; // Array of row data,
  columns:any[]
}

const ReusableTable: React.FC<ReusableTableProps> = React.memo(
    ({ withOutMargin, columns, rows, customRef, ...anotherProps }) => {
      const containerStyle = {
        height:
            rows?.length === 1
                ? "93px"
                : rows?.length < 4
                    ? rows?.length * 42 + 51
                    : undefined,
        marginBottom: withOutMargin ? "0px" : "30px",
      };

      return (
          <div className="ag-theme-quartz" style={containerStyle}>
            <AgGridReact
                rowData={rows}
                columnDefs={columns}
                ref={customRef}
                domLayout={rows?.length > 3 ? "autoHeight" : undefined}
                {...anotherProps}
            />
          </div>
      );
    }
);

export default ReusableTable;

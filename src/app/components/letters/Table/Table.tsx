import React from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useSelector} from "@/store/hooks";
import "./darkTheme.css";

// Define the props type
interface ReusableTableProps extends AgGridReactProps {
  withOutMargin?: boolean; // Optional boolean to determine margin behavior
  customRef?: React.Ref<any>; // Optional reference to the AgGridReact instance
  rows: any[]; // Array of row data,
  columns:any[]
}

const ReusableTable: React.FC<ReusableTableProps> = React.memo(
    ({ withOutMargin, columns, rows, customRef, ...anotherProps }) => {
      const containerStyle = {
        height:
            rows?.length === 1
                ? "110px"
                : rows?.length < 4
                    ? `${(rows?.length * 50)+52}px`
                    : undefined,
        marginBottom: withOutMargin ? "0px" : "30px",
      };
        const activeMode=useSelector((state:any)=>state.customizer.activeMode)
        const themeClass =
            activeMode === "light" ? "ag-theme-quartz" : "ag-theme-alpine-dark";
        return (
          <div className={themeClass} style={containerStyle}>
            <AgGridReact
                rowData={rows}
                columnDefs={columns}
                ref={customRef}
                domLayout={rows?.length>3?"autoHeight":undefined}
                {...anotherProps}
            />
          </div>
      );
    }
);

export default ReusableTable;

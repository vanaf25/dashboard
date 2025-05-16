import React from "react";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useSelector } from "@/store/hooks";
import "./darkTheme.css"; // Optional overrides for dark theme

// Define the props type
interface ReusableTableProps extends AgGridReactProps {
    withOutMargin?: boolean;
    customRef?: React.Ref<any>;
    rows: any[];
    columns: any[];
}

const ReusableTable: React.FC<ReusableTableProps> = React.memo(
    ({ withOutMargin, columns, rows, customRef, ...anotherProps }) => {
        const activeMode = useSelector((state: any) => state.customizer.activeMode);

        const themeClass =
            activeMode === "light" ? "ag-theme-quartz" : "ag-theme-alpine-dark";

       /* const containerStyle = {
           /!* height:
                rows?.length === 1
                    ? "110px"
                    : rows?.length < 4
                        ? `${rows?.length * 50 + 52}px`
                        : undefined,*!/
            marginBottom: withOutMargin ? "0px" : "0px",
        };*/

        return (
            <div className={themeClass}>
                <AgGridReact
                    rowData={rows}
                    columnDefs={columns}
                    ref={customRef}
                    domLayout={"autoHeight"}
                    singleClickEdit={true}
                    {...anotherProps}
                />
            </div>
        );
    }
);

export default ReusableTable;

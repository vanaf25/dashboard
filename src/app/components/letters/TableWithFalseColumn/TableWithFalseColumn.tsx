import React, { useMemo } from "react";
import Table from "../Table/Table";

// Define types for the component props
interface RowData {
    item: string; // Adjust this type based on your row structure
    quantity: string | number; // Adjust as needed
}

interface TableWithFalseColumnProps {
    itemHeaderName: string;
    rows: RowData[];
    [key: string]: any; // For additional props passed to the Table component
}

const TableWithFalseColumn: React.FC<TableWithFalseColumnProps> = ({
                                                                       itemHeaderName,
                                                                       rows,
                                                                       ...anotherProps
                                                                   }) => {
    const defaultColumns = useMemo(
        () => [
            {
                headerName: `${itemHeaderName}`,
                field: "item",
                flex: 4,
                cellStyle: {
                    textAlign: "left",
                    backgroundColor: "#F6E9C3",
                },
            },
            {
                headerName: "False",
                field: "quantity",
                flex: 1,
                cellStyle: {
                    textAlign: "left",
                    backgroundColor: "#DDE4F4",
                },
            },
        ],
        [itemHeaderName]
    );

    return (
        <div>
            <Table columns={defaultColumns} rows={rows} {...anotherProps} />
        </div>
    );
};

export default TableWithFalseColumn;

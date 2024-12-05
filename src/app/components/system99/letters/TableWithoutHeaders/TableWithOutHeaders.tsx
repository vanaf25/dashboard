import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    TableContainerProps,
} from "@mui/material";

interface RowData {
    field: string;
    value?: string | number; // Value can be optional
}

interface TableWithOutHeadersProps extends TableContainerProps {
    rows: RowData[]; // Array of table rows
}

const TableWithOutHeaders: React.FC<TableWithOutHeadersProps> = ({
                                                                     rows,
                                                                     ...props
                                                                 }) => {
    return (
        <TableContainer component={Paper} {...props}>
            <Table style={{ borderCollapse: "collapse" }}>
                {/* Table Body without Headers */}
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            <TableCell
                                style={{
                                    border: "1px solid black",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {row.field}
                            </TableCell>
                            <TableCell
                                style={
                                    row.value
                                        ? { border: "1px solid black", textAlign: "center" }
                                        : {}
                                }
                            >
                                {row.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableWithOutHeaders;

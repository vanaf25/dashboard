import React from "react";
import { Grid } from "@mui/material";
import TableWithFalseColumn from "../TableWithFalseColumn/TableWithFalseColumn";

// Define types for the rows and table
interface Row {
    [key: string]: any; // Adjust the shape of rows based on your data
}

interface Table {
    name: string;
    rows: any[];
}

interface TableGridProps {
    tables: Table[][];
}

const TableGrid: React.FC<TableGridProps> = ({ tables }) => {
    return (
        <Grid container spacing={2}>
            {tables.map((table, index) => (
                <Grid
                    key={index}
                    item
                    sm={Math.round(12 / tables.length)}
                    xs={12}
                >
                    {table.map((el) => (
                        <TableWithFalseColumn
                            key={el.name}
                            itemHeaderName={el.name}
                            withOutMargin
                            rows={el.rows}
                        />
                    ))}
                </Grid>
            ))}
        </Grid>
    );
};

export default TableGrid;

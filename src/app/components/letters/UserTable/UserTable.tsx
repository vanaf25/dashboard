import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

// Type for each row of data
interface TableRow {
    label: string;
    type?: "text" | "date"; // Specify the type of data in the row
    value?: string | number; // Value is optional since date rows may not have it
}

// Props for TableGrid
interface TableGridProps {
    title: string;
    data: TableRow[];
}

// Reusable TableGrid Component
const TableGrid: React.FC<TableGridProps> = ({ title, data }) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <Box>
            {/* Table Title */}
            <Box bgcolor="green" sx={{borderRadius:0}} p={1} textAlign="center">
                <Typography variant="h6" color="white">
                    {title}
                </Typography>
            </Box>

            {/* Table Rows */}
            <Grid container>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        {/* Label Column */}
                        <Grid
                            item
                            xs={2}
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center",
                            }}
                            bgcolor="#007BFF"
                            color="white"
                            p={1}
                            border={1}
                            borderColor="grey.500"
                        >
                            <Typography>{row.label}</Typography>
                        </Grid>

                        {/* Value/Input Column */}
                        <Grid
                            item
                            xs={10}
                            bgcolor="lightgrey"
                            p={1}
                            border={1}
                            borderColor="grey.500"
                        >
                            {row.type === "date" ? (
                                <DemoContainer components={["DatePicker"]}>
                                    <DatePicker
                                        label={row.label}
                                        value={row.label === "Start" ? startDate : endDate}
                                        onChange={(newValue) => {
                                            if (row.label === "Start") setStartDate(newValue);
                                            else setEndDate(newValue)}}
                                    />
                                </DemoContainer>
                            ) : (
                                <Typography>{row.value}</Typography>
                            )}
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default TableGrid;

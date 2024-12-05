import React from "react";
import { Box, Typography } from "@mui/material";

interface TableNameProps {
    children: React.ReactNode; // Accepts any valid React node as children
}

const TableName: React.FC<TableNameProps> = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#4caf50",
                padding: "8px",
                textAlign: "center",
            }}
        >
            <Typography
                variant="h6"
                component="h2"
                sx={{
                    color: "#fff",
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default TableName;

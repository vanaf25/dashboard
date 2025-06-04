import React from 'react';
import { List, ListItem, Typography, Divider, Box } from "@mui/material";

interface CalculationValues {
    values?: { [key: string]: string | number | boolean | { [key: string]: any } };
}

const CalculationValues: React.FC<CalculationValues> = ({ values }) => {
    const additionalParamsArray = Object.entries(values || {});
    return (
        <List>
            {additionalParamsArray.map(([key, value]) => {
                if (typeof value === 'object' && value !== null) {
                    const nestedEntries = Object.entries(value);
                    return (
                        <Box key={key}>
                            <ListItem sx={{ justifyContent: "center" }}>
                                <Typography
                                    color="primary"
                                    sx={{ fontSize: 22, fontWeight: 600, textAlign: 'center' }}
                                >
                                    {key}
                                </Typography>
                            </ListItem>
                            <Divider />
                            {nestedEntries.map(([nestedKey, nestedValue]) => (
                                <ListItem
                                    key={`${key}-${nestedKey}`}
                                    divider
                                    sx={{ display: "flex", justifyContent: "space-between" }}
                                >
                                    <Typography fontWeight={500} sx={{ mr: 2, fontSize: 20 }}>
                                        {nestedKey}
                                    </Typography>
                                    <Typography color="primary" sx={{ fontSize: 20, fontWeight: 500 }}>
                                        {nestedValue}
                                    </Typography>
                                </ListItem>
                            ))}
                        </Box>
                    );
                }

                return (
                    <ListItem key={key} divider sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography fontWeight={500} sx={{ mr: 2, fontSize: 20 }}>
                            {key}
                        </Typography>
                        <Typography color="primary" sx={{ fontSize: 20, fontWeight: 500 }}>
                            {String(value)}
                        </Typography>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default CalculationValues;

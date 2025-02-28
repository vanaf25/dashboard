"use client";
import React from 'react';
import { useSearchParams } from "next/navigation";
import { List, ListItem, Card, Typography } from "@mui/material";

const DefaultCalculationValues = () => {
    const searchParams = useSearchParams();

    // Convert search params to an array of key-value pairs
    const paramsArray = Array.from(searchParams.entries());

    return (
        <Card sx={{ p: 2, maxWidth: 400, mx: "auto", mb: 2 }}>
            <List>
                {paramsArray.map(([key, value]) => (
                    <ListItem key={key} divider sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography fontWeight="bold" sx={{ mr: 2,fontSize:20,fontWeight:500 }}>
                            {key}
                        </Typography>
                        <Typography  sx={{fontSize:20,fontWeight:500}} color="primary">
                            {value}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
};

export default DefaultCalculationValues;

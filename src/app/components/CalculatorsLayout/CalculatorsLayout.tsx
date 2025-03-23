"use client"
import React from 'react';
import {Grid} from "@mui/material";
import Corners from "@/app/components/calculators/ExteriorSiding/Corners/Corners";
import ExteriorPaint from "@/app/components/calculators/ExteriorSiding/ExteriorPaint/ExteriorPaint";

const CalculatorsLayout = () => {
    const calculatorsComponents = [
        <Corners /> ,
        <ExteriorPaint/>
    ];

    return (
        <Grid container spacing={2}>
            {calculatorsComponents.map((calc, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    {calc}
                </Grid>
            ))}
        </Grid>
    );
};

export default CalculatorsLayout;
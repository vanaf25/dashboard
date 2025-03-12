"use client"
import React from 'react';
import {Grid} from "@mui/material";
import PlankSiding from "@/app/components/calculators/PlankSiding/PlankSiding";
import StuccoWallCovering from "@/app/components/calculators/StuccoWallCovering/StuccoWallCovering";
import VinylSiding from "@/app/components/calculators/VinylSiding/VinylSiding";
import BrickWallCovering
    from "@/app/(DashboardLayout)/system99/calculators/ExteriorSiding/calculators/BrickWallCovering/BrickWallCovering";
import Corners from "@/app/components/calculators/Corners/Corners";

const CalculatorsLayout = () => {
    const calculatorsComponents = [
        <PlankSiding />,
        <StuccoWallCovering /> ,
        <VinylSiding /> ,
        <BrickWallCovering /> ,
        <Corners /> ,
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
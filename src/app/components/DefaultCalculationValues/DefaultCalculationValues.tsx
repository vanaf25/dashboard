"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@mui/material";
import CalculationValues from "@/app/components/CalculationValues/CalculationValues";

interface DefaultCalculationValuesProps {
    additionalValues?: { [key: string]: string };
}

const DefaultCalculationValues: React.FC<DefaultCalculationValuesProps> = ({
                                                                               additionalValues,
                                                                           }) => {
    return (
        <Card sx={{ p: 2, maxWidth: 400, mx: "auto", mb: 2 }}>
            <CalculationValues values={{...additionalValues }} />
        </Card>
    );
};

export default DefaultCalculationValues;

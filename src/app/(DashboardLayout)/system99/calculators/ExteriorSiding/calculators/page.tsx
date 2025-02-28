"use client";
import React from 'react';
import DefaultCalculationValues from "@/app/components/DefaultCalculationValues/DefaultCalculationValues";
import CleverLinks from "@/app/components/CleverLinks/CleverLinks";

const Page = () => {
    const calculators=[
        "Plank siding",
        "Sheet siding",
        "Home wrap",
        "Vinyl siding",
        "Corners",
        "Brick Wall Covering",
        "Stucco wall covering",
    ]
    return (
        <>
            <DefaultCalculationValues/>
            <CleverLinks links={calculators}  />
        </>
    );
};

export default Page;
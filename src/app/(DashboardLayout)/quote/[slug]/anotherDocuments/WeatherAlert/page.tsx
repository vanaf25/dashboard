"use client";
import { Typography } from '@mui/material';
import React from "react";
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";
import {useGetQuoteQuery} from "@/app/hooks/useQuote";

const WeatherAlert = () => {
    const {data}=useGetQuoteQuery();
    const sections=[`Dear ${data?.customers?.name}`,`  As you may know we are having severe weather moving through your area. At times we can work around the weather
        and proceed with installation. The weather that we are seeing is likely to cause damage to your installation if we try to
        work around the current conditions. As a result we will need to delay the installation team until the weather passes.
        If you see any conditions that cause you concern please send us a picture of the location of concern and a brief
        description so that we can address is as soon as possible.`,"Thank you for your business and we will see you soon"]
  const sectionsToExport=sections.map(section=>({type:ElementType.P,content:section}))
    return (
    <DocumentLayout  exportElems={sectionsToExport}
                    pdfName={"Weather Alert"}>
        <Paragraphs sections={sections}/>
    </DocumentLayout>
  );
};

export default WeatherAlert;

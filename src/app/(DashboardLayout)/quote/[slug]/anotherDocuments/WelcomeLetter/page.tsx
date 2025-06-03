"use client";
import { Typography } from '@mui/material';
import React from "react";
import DocumentLayout from "@/app/components/letters/Document/DocumentLayout/DocumentLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";
import {useGetQuoteQuery} from "@/app/hooks/useQuote";

const WelcomeLetter = () => {
    const {data}=useGetQuoteQuery();
    const sections=[`Dear ${data?.customers?.name}`,`As the owner of Mr. Exterior I would like
     to say myself and our team wants to thank you for choosing our company.
      All of us work as hard as we can to keep our customers happy and although we do our best to serve
       you as a customer we also plan on working with you as a member of our team to accomplish
        the task that you have requested. Typically it takes anywhere from one week to several months
         to accomplish a task that is assigned to us. Please take this into consideration when you are
          considering project completion time frames. Unlike many other companies we have worked tirelessly
           to create a system that helps to expedite the production of work, ensures efficiency of team
            members and helps to produce good quality of workmanship. We work hard to keep you at the center
             of our final goal, the completion of your project and look forward to working with you to 
             accomplish the task that you have assigned to us. Providing you with a valuable production that, to the best of our ability, will last long into the future. As part of our system we have assigned you a communication manager who will be contacting you to help coordinate and produce requested results. Please direct any communications to the communication manager, production manager or estimator who originally spoke to you about your project. Rest assured that in the event that there is a difficulty we will work with you to resolve it as soon as is possible.
`,`Best regards, ${data?.profiles?.username}`]
    const sectionsToExport=sections.map(section=>({type:ElementType.P,content:section}))
    return (
        <DocumentLayout withOutHeader exportElems={sectionsToExport}
                        pdfName={"WelcomeLetter"}>
            <Paragraphs sections={sections}/>
        </DocumentLayout>
    );
};

export default WelcomeLetter;

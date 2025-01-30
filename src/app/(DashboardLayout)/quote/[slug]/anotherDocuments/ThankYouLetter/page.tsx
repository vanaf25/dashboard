"use client";
import React from "react";
import {Button, Typography } from '@mui/material';
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import {useGetQuoteQuery} from "@/app/hooks/useQuote";
import {ElementType} from "@/app/types/exportPdfTypes";

const ThankYouLetter = () => {
  const sections=[
    "I would like to take this time to thank you for using our services and sincerely hope that your experience with our company was very positive. As I'm sure you know whether events and difficulties that are unforeseen appear with all projects that we take on. As a result we have created many systems to help mediate these difficulties to create the best experience that we can for each customer. Although sometimes we are not perfect in this and we request that you pardon our errors we do our best to treat all of our customers with the highest level of value in customer service that we can provide. We truly hope that you have the ability to leave us a good review online and if that's not the case please contact us at your earliest convenience as one of our customers we value your feedback and communications.",
    "We would also like to offer you an opportunity to receive bill credits and compensation for referring us to friends relatives or other individuals that you know may require our services. Our referral program is extremely simple we pay every customer $25 for family or friends that they refer to our company regardless of whether that family member or friend purchases our service. All we ask is that the person that you send over is a genuine person and actually looking for our services",
    "If one of the persons that you refer to us purchases our product or service as a result of your recommendation we will pay out to you an additional 50.00 to 250.00 on each person that uses or service. Depending on the service that they use. Please see the attached list for a full description of all of the services that we offer",
    "Thank you again for using our company and may you truly have a spectacular experience of life in the future and a blessed day."
  ]
    const {data}=useGetQuoteQuery()
  return (
    <DocumentLayout pdfName={"ThankYouLetter"} exportElems={[
        {type:ElementType.P,content:`Dear, ${data?.customers?.name}`},
        ...sections.map(section=>({type:ElementType.SECTION,content:section}))
    ]}>
        <Typography sx={{mb:1,mt:2}}>Dear, {data?.customers?.name}</Typography>
      {sections.map((el,index)=><Typography sx={{mb:1}} key={index}>{el}</Typography>)}
      <Typography variant={"h6"} sx={{fontWeight:"bold"}}>Mike Perkins</Typography>
    </DocumentLayout>
  );
};

export default ThankYouLetter;

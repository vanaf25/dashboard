"use client"
import DocumentLayout from "@/app/components/letters/Document/DocumentLayout/DocumentLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";
const WeatherAlert = () => {
    const sections=["Dear Customer",`The area in the pictures below is a High Traffic Location and will sustain a large amount of movement of trucks materials
        and installation team members.  This will most likely result in the trampling of your vegetation in this area, this cannot
        be prevented as the installation team must use this area to access the work area. Please water this location once per
        day after the installation team leaves for the day. Also if you provide us with the grass seed you would like us to place in
        this area we would be happy to place it for you at the completion of the project as a courtesy.  Note: it will take a minim
        of 3 months and up to one year for the grass to grow back in this area especially if it is not watered during and after
        your renovation.`,"I fully understand and agree to use this area to access my home’s work area and understand that the company\n" +
    "        cannot prevent trampling of grass."]
    const elms=sections.map(section=>({type:ElementType.P,content:section}))
  return (
    <DocumentLayout withSignature exportElems={elms} pdfName={"HighTrafficArea"} pdfTitle={"High Traffic Area"} >
      <Paragraphs sections={sections}/>
    </DocumentLayout>
  );
};

export default WeatherAlert;

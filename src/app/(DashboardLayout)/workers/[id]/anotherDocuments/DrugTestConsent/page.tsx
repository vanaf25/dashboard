"use client";
import { Paper } from '@mui/material';
import {Typography } from '@mui/material';
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";


const DrugTestNotice = () => {
  const paragraphs = [
    "CONSENT FOR PRE-EMPLOYMENT, RANDOM, OR REASONABLE SUSPICION DRUG TEST SCREEN AND RELEASE COVENANT NOT TO SUE AND INDEMNITY AGREEMENT",
    "I hereby CONSENT to allow (medical center) to take a specimen of my hair, urine, or blood and submit it for a pre-employment, random, or reasonable suspicion drug test screen. I FURTHER CONSENT to allow the laboratory testing service to make the results of such screen available to the prospective or current employer, OR company.",
    "In consideration for such services being rendered on my behalf, I hereby RELEASE the laboratory testing service, its officers, agents, and employees, from any and all claims which I might otherwise have due to such results being made so available. I hereby CONSENT NOT TO FILE ANY ACTION at law or in equity against the company, the laboratory testing service, their respective officers, agents, or employees in connection with the results of such screen being made so available, and I hereby agree to INDEMNIFY and SAVE HARMLESS the company, the laboratory testing service, their respective officers, agents, and employees from all damages, expenses, reasonable attorney's fees, and costs of court which they or any of them may suffer or incur, jointly or severally, due to the results of such screen being made so available."
  ];
   const firstParagraph="Here after company refers to:Mister Exterior LLC"
  return (
    <WorkerLayout withSignature exportElems={[{type:ElementType.P,content:firstParagraph},
            ...paragraphs.map(p=>({type:ElementType.P,content:p}))]}
                  pdfTitle={"Drug Test Consent"} pdfName={"Drug Test Consent"} >
      <Typography sx={{textAlign:"center",mb:2}} variant={"h3"}>
        Drug Test Consent
      </Typography>
      <Typography sx={{mb:1}}>{firstParagraph}</Typography>
      <Paper sx={{p:2}}>
         <Paragraphs sections={paragraphs} />
      </Paper>
    </WorkerLayout>
  );
};

export default DrugTestNotice;

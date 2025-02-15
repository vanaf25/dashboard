import React from "react";
import {Typography} from "@mui/material";
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";

interface LegalLetterProps {
    title?: string;
    name?: string | number;
    letterText?: string; // Optional letter text
    paragraphs?: string[]; // Optional array of paragraphs
}

const LegalLetter: React.FC<LegalLetterProps> = ({ title, letterText, paragraphs }) => {
    const {data}=useGetWorkerQuery()
    return (
        <WorkerLayout exportElems={
            [
                {type:ElementType.P,content:`Dear ${data?.fullName}`},
                ...(paragraphs ? paragraphs.map(el=>({type:ElementType.P,content:el})):[])
            ]
          }
                      withOutHeader pdfName={title} pdfTitle={title}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {title}
            </Typography>
            <Typography sx={{ mb: 1 }}>Dear, {data?.fullName}</Typography>
            {letterText && <Typography>{letterText}</Typography>}
            {paragraphs && <Paragraphs sections={paragraphs} />}
        </WorkerLayout>
    );
};

export default LegalLetter;

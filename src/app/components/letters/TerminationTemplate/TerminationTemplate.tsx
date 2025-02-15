import React, {useState} from 'react';
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";
import {Typography} from "@mui/material";
import BlueTextField from "@/app/components/letters/BlueTextField/BlueTextField";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
interface TerminationTemplateProps{
    title:string,
    headersParagraphs:string[],//paragraphs before text field
    footersParagraphs:string[],//paragraphs after text field
    paragraphAfterTextField:string
}
const TerminationTemplate:React.FC<TerminationTemplateProps> = ({title,headersParagraphs,footersParagraphs,paragraphAfterTextField}) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event:any) => setInputValue(event.target.value)
    const {data}=useGetWorkerQuery();
    return (
        <WorkerLayout exportElems={[
            {type:ElementType.P,content:`Dear ${data?.fullName}`},
            ...headersParagraphs.map(p=>({type:ElementType.P,content:p})),
            {type:ElementType.P,content:`As of, ${inputValue} ${paragraphAfterTextField} `},
            ...footersParagraphs.map(p=>({type:ElementType.P,content:p}))
        ]}
                      pdfName={title} pdfTitle={title}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <Typography sx={{ mb: 1 }}>Dear, {data?.fullName} </Typography>
            <Paragraphs sections={headersParagraphs}/>
            <Typography sx={{ mb: 1, display: "inline", lineHeight: 2 }}>
                As of,
                <BlueTextField
                    variant="outlined"
                    placeholder="Enter Value"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {paragraphAfterTextField}
            </Typography>
            <Paragraphs sections={footersParagraphs} />
        </WorkerLayout>
    );
};


export default TerminationTemplate;
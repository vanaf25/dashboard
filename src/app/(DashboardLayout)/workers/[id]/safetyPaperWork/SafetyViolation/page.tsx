"use client";
import {useState} from "react";
import {TextField, Typography} from "@mui/material";
import LegalLetter from "@/app/components/letters/legalLetter/LegalLetter";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";

const SafetyViolation = () => {
    const [violation, setViolation] = useState("");
    const {data}=useGetWorkerQuery()
    const p=[
        `Dear ${data?.fullName}`,
        "During a recent safety and quality inspection you were witnessed in violation of one of the safety rules. The rules are not in place to restrict your freedom but to prevent injury to yourself and others. Violating safety rules can not only cause harm or death to yourself but also to other workers and customers. violations can also cause property damage and significantly damage the relationship all of us have with our customers. this letter is a warning and if rules are repeatedly violated the company will move to protect the customer and other workers by re-training you with long unpaid training sessions, fining you, and or depending on the level of the violation removing you from the production team.",
    ]
    return (
        <WorkerLayout withSignature pdfName={"SafetyViolation"}
                      exportElems={[
                          ...p.map(el=>({type:ElementType.P,content:el})),
                          {type:ElementType.P,content:`Rule you violated: ${violation}`}
                      ]}
                      pdfTitle={"SafetyViolation"}>
            <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
                Incident Report
            </Typography>
            <Paragraphs
                sections={p}
            />
            <TextField
                label="Rule you violated"
                multiline
                rows={10}
                variant="outlined"
                sx={{ mb: 2 }}
                fullWidth
                value={violation} // Controlled value
                onChange={(e) => setViolation(e.target.value)}
            />
        </WorkerLayout>
    );
};

export default SafetyViolation;

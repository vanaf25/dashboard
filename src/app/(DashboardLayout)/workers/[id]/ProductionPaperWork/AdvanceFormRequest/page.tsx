"use client";
import React, {useState} from 'react';
import SignaturesSection from '@/app/components/letters/signatureSection/signatureSection';
import {Typography} from '@mui/material';
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import BlueTextField from "@/app/components/letters/BlueTextField/BlueTextField";
import {ElementType} from "@/app/types/exportPdfTypes";

const AdvanceFormRequest = () => {
    const { data } = useGetWorkerQuery();
    const [advanceAmount, setAdvanceAmount] = useState<string>("");

    const p = `I am fully aware that the amount given will be deducted from my weekly pay and that I will not be entitled to any repayment plan; additionally, I understand and agree that I will not hold the company liable for any back pay as a result of the advance. I also agree that if I fail to work for the company after receiving the advance I will be liable to repay the company on the advance issued with interest not to exceed 25% per month.`;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setAdvanceAmount(event.target.value);

    return (
        <WorkerLayout pdfTitle={"Advance Request"}
                      exportElems={[
                          {type:ElementType.P,content:`${data?.fullName} am requesting an advance on my weekly pay in the amount of ${advanceAmount}`},
                          {type:ElementType.P,content:p}
                      ]}
                      pdfName={"Advance Request"} withSignature>
            <Typography variant={"h4"}>Advance Form Request</Typography>
            <Typography sx={{ mb: 2 }}>
                I {data?.fullName} am requesting an advance on my weekly pay in the amount of
                <BlueTextField
                    type="number"
                    value={advanceAmount}
                    onChange={handleInputChange}
                />
            </Typography>
            <Typography>
                {p}
            </Typography>
            <SignaturesSection client={"Sign"} />
        </WorkerLayout>
    );
};

export default AdvanceFormRequest;

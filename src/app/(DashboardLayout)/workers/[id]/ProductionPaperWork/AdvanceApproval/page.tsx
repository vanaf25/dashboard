"use client";
import { useState } from 'react';
import BlueBlock from '@/app/components/global/blueBlock/BlueBlock';
import { Typography } from '@mui/material';
import UnderlinedText from "@/app/components/global/UnderlinedText/UnderlinedText";
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import { useGetProfileQuery } from "@/app/hooks/useProfile";
import BlueTextField from "@/app/components/letters/BlueTextField/BlueTextField";
import {ElementType} from "@/app/types/exportPdfTypes";

const AdvanceFormRequest = () => {
    const { data: company } = useGetProfileQuery();
    const [advanceAmount, setAdvanceAmount] = useState("");
    const p=`Company will deduct the full amount of the advance from the requestor's next check. The requesting person understands that they will be fully liable for the full amount of the advance and that if they fail to pay back the amount received, they will be liable for an interest charge of not less than 25% of the amount advanced. The requester understands that even if they fail to work or quit the company, they will be liable for the amount advanced plus interest.`
    const handleInputChange = (event:any) => setAdvanceAmount(event.target.value);
    return (
        <WorkerLayout withSignature pdfName={"Advance Approval"}
                      exportElems={[{type:ElementType.P, content:`${company?.companyName} approves the advance request submitted in the amount of ${advanceAmount}`}
                          ,{type:ElementType.P,content:p}]}
                      pdfTitle={"Advance Request"}>
            <Typography variant={"h4"}>Advance Approval</Typography>
            <Typography sx={{ mb: 2 }}>
                {company?.companyName} approves the advance request submitted in the amount of
                <BlueTextField
                    type="number"
                    value={advanceAmount}
                    onChange={handleInputChange}
                />
            </Typography>
            <Typography sx={{ mb: 2 }}>
                {p}
            </Typography>
            <SignaturesSection client={"Company rep"} />
            <SignaturesSection client={"Requestor"} />
        </WorkerLayout>
    );
};

export default AdvanceFormRequest;

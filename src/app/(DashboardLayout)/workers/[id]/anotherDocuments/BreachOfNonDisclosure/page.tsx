"use client";

import React, {useState} from "react";
import {TextField, Typography} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";
import transformDayjsDate from "@/app/utils/transformDayjsDate";

interface FormState {
    agreementDate: Date | null;
    violationDate: Date | null;
    hearingDate: Date | null;
    details: string;
    violationDetails: string;
}

const BreachOfNonDisclosure: React.FC = () => {
    const { data } = useGetWorkerQuery();

    const [form, setForm] = useState<FormState>({
        agreementDate: null,
        violationDate: null,
        hearingDate: null,
        details: "",
        violationDetails: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const exportableElements=[
        {
     type:ElementType.P,content:`Dear, ${data?.fullName}`
    },
        {type:ElementType.P,content:`I am contacting you 
        in order to discuss a non-disclosure agreement signed on
         ${transformDayjsDate(form.agreementDate)}.
         It has come to our attention that this agreement has recently been breached`
        },
        {type:ElementType.P,content:`You have violated this contract in the following ways: Our agreement states that you will not disclose any
                information about the Private Company to anyone outside of the company for any reason whatsoever, including
                company documents in any form (original versions, copies, faxes, and digital versions)`},
        {type:ElementType.P,content:`However, as of ${form.violationDetails}  it was brought to our attention that you had disclosed Private Company information to an outside source.
                Since this information was considered company information and was disclosed to a company outsider, this contract has therefore been breached. `},
        {type:ElementType.P,content:`The Company is requesting your attendance at a contract breach hearing on ${transformDayjsDate(form.hearingDate)}`},
        {type:ElementType.P,content:` Please let me know as soon as possible via email if you will be able to make it. Until then, you are suspended
                from company property and will be unable to access your company phone or email.`}
    ]
    return (
        <WorkerLayout pdfName={" Breach of Non-Disclosure"}
                       exportElems={exportableElements}
                      pdfTitle={"Breach of Non-Disclosure"}>
            <Typography sx={{ mb: 2 }} variant="h3">
                Breach of Non-Disclosure
            </Typography>

            <Typography sx={{ mb: 1 }} variant="body1">
                Dear, {data?.fullName}
            </Typography>

            <Typography sx={{ mb: 1 }}>
                I am contacting you in order to discuss a non-disclosure agreement signed on
                <DatePicker
                    sx={{my:2}}
                    value={form.agreementDate}
                    onChange={(newValue) => setForm({ ...form, agreementDate: newValue })}
                    slotProps={{ textField: { fullWidth: true } }}
                />
                . It has come to our attention that this agreement has recently been breached.
            </Typography>

            <Typography sx={{ mb: 1 }} variant="body1">
                You have violated this contract in the following ways: Our agreement states that you will not disclose any
                information about the Private Company to anyone outside of the company for any reason whatsoever, including
                company documents in any form (original versions, copies, faxes, and digital versions).
            </Typography>

            <Typography sx={{ mb: 1 }} variant="body1">
                However, as of
                <TextField
                    fullWidth
                    label="Violation Details"
                    name="violationDetails"
                    value={form.violationDetails}
                    onChange={handleChange}
                    sx={{ my: 2 }}
                />
                it was brought to our attention that you had disclosed Private Company information to an outside source.
                Since this information was considered company information and was disclosed to a company outsider, this contract has therefore been breached.
            </Typography>

            <Typography sx={{ mb: 1 }} variant="body1">
                The Company is requesting your attendance at a contract breach hearing on
                <DatePicker
                    sx={{my:2}}
                    value={form.hearingDate}
                    onChange={(newValue) => setForm({ ...form, hearingDate: newValue })}
                    slotProps={{ textField: { fullWidth: true } }}
                />
            </Typography>

            <Typography sx={{ mb: 1 }} variant="body1">
                Please let me know as soon as possible via email if you will be able to make it. Until then, you are suspended
                from company property and will be unable to access your company phone or email.
            </Typography>
        </WorkerLayout>
    );
};

export default BreachOfNonDisclosure;

"use client";
import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import BlueTextField from "@/app/components/letters/BlueTextField/BlueTextField";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";

const BackChargeNotice = () => {
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [reason, setReason] = useState('');

    const backChargeCommunication = [
        "We have received a communication that there were significant changes to a project you sold. As a result, you are receiving a back charge on the commission you have received. Back charges happen both as a fault of not properly selling the customer on the correct products or services, inaccurately measuring, undercharging the customer, or because the customer reduced the size of the project.",
        "If you would like to have more information on the back charge you're receiving, reach out to your manager for a full explanation.",
    ];

    return (
        <WorkerLayout exportElems={[
            ...backChargeCommunication.map(el=>({type:ElementType.P,content:el})),
            {type:ElementType.P,content:`Project address:${address}`},
            {type:ElementType.P,content:`Amount of back charge:${amount}`},
            {type:ElementType.P,content:`Reason for back charge:${reason}`}
        ]} pdfName={"Back Charge Notice"} pdfTitle={"Back Charge Notice"}>
            <Typography variant={"h4"}>Back Charge Notice</Typography>
            <Paragraphs sections={backChargeCommunication} />
            <Box sx={{ display: "flex", alignItems: "center",mb:1 }}>
                <span>Address:</span>
                <BlueTextField
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Box>
            <Typography sx={{mb:1}}>
                Amount of back charge:
                <BlueTextField
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </Typography>
            <Typography sx={{ mb: 1 }}>Reason for back charge</Typography>
            <TextField
                label="Provide Reason"
                multiline
                rows={3}
                variant="outlined"
                sx={{ mb: 2 }}
                fullWidth
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />
        </WorkerLayout>
    );
};

export default BackChargeNotice;

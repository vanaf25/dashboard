"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, TextField } from "@mui/material";
import DocumentLayout from "@/app/components/letters/Document/DocumentLayout/DocumentLayout";
import { useGetQuoteQuery } from "@/app/hooks/useQuote";
import {ElementType} from "@/app/types/exportPdfTypes";

interface BlueBlockProps {
    text?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

const BlueBlock: React.FC<BlueBlockProps> = ({ text = "", onChange, placeholder, disabled }) => (
    <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={text}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        sx={{
            backgroundColor: "#e3f2fd",
            borderRadius: 1,
            "& .MuiInputBase-root": {
                height: "2rem",
            },
            ml: 2,
        }}
    />
);

interface ClaimOfLienState {
    recordedBy: string;
    mailTo: string;
    ownerName: string;
    ownerAddress: string;
    companyName: string;
    state: string;
    country: string;
    totalValue: string;
    unpaidAmount: string;
    startDate: string;
    endDate: string;
    dateTime: string;
    commissionExpires:string,
    address:string,
    amount:string
}

const ClaimOfLien: React.FC = () => {
    const { data } = useGetQuoteQuery();
    const [state, setState] = useState<ClaimOfLienState>({
        recordedBy: "",
        mailTo: "",
        ownerName: data?.customers?.name || "",
        ownerAddress: data?.customers?.address || "",
        companyName: data?.customers?.companyName || "",
        state: "",
        country: "",
        totalValue: "",
        unpaidAmount: "",
        startDate: "",
        endDate: "",
        dateTime: "",
        commissionExpires:"",
        address:"",
        amount:""
    });

    const handleChange = (key: keyof ClaimOfLienState) => (value: string) => {
        setState((prev) => ({ ...prev, [key]: value }));
    };
    const sections = [
        `Recording requested by ${state.recordedBy}`,
        `When recorded mail to: ${state.mailTo}`,
        `Country: ${state.country}`,
        `State: ${state.state}`,
        `I ${data?.profiles?.username} being duly sworn, state the following: In accordance with an agreement to provide labor and/or material, I did furnish the following labor and/or materials on the following described real property located in the State of ${state.state}.`,
        `Property is owned by ${data?.profiles?.username} whose address is ${data?.customers?.address}.`,
        `Total value: $${state.totalValue}`,
        `Unpaid amount: $${state.unpaidAmount}`,
        `First item furnished on: ${state.startDate}`,
        `Last item furnished on: ${state.endDate}`,
        `Claimed lien amount: $${state.amount}`,
        `Name of Person Claiming Lien: ${data?.profiles?.username}`,
        `Claimant's address: ${state.address}`,
        `Public notary: ON; (date/Time) ${state.dateTime}`,
        `Notary signature: [Signature Placeholder]`,
        `In and for the County of ${state.country}, state of ${state.state}.`,
        `My commission expires on: ${state.commissionExpires}`
    ];
    return (
        <DocumentLayout pdfName={"Claim Of Lien"} pdfTitle={"Claim Of Lien"}
                        exportElems={sections.map(section=>({type:ElementType.P,content:section}))} withSignature>
            <Box sx={{ mb: 1 }}>
                <Typography>
                    Recording requested by: <BlueBlock text={state.recordedBy} onChange={handleChange("recordedBy")} placeholder="Enter requester" />
                </Typography>
                <Typography>
                    When recorded mail to: <BlueBlock text={state.mailTo} onChange={handleChange("mailTo")} placeholder="Enter recipient" />
                </Typography>
            </Box>

            <Box>
                <Typography>
                    Country: <BlueBlock text={state.country} onChange={handleChange("country")} placeholder="Enter country" />
                </Typography>
                <Typography>
                    State: <BlueBlock text={state.state} onChange={handleChange("state")} placeholder="Enter state" />
                </Typography>
            </Box>

            <Typography>
                I <span>{data?.profiles?.username}</span> being duly sworn, state the following:
                In accordance with an agreement to provide labor and/or material, I did furnish the following labor and/or materials:
                on the following described real property located in State of <BlueBlock text={state.state} onChange={handleChange("state")} placeholder="Enter state" disabled />
            </Typography>

            <Typography>
                Property is owned by {data?.profiles?.username} whose address is {data?.customers?.address}
            </Typography>

            <Typography>
                of a total value of $ <BlueBlock text={state.totalValue} onChange={handleChange("totalValue")} placeholder="Enter value" />
                of which there remains unpaid <BlueBlock text={state.unpaidAmount} onChange={handleChange("unpaidAmount")} placeholder="Enter unpaid amount" />
                and I further state that I furnished the first of the items on the date of <BlueBlock text={state.startDate} onChange={handleChange("startDate")} placeholder="Enter start date" />
                AND the last of the items on the date of <BlueBlock text={state.endDate} onChange={handleChange("endDate")} placeholder="Enter end date" />
            </Typography>

            <Typography>
                I hereby, under the laws of the State of <BlueBlock text={state.state} onChange={handleChange("state")} placeholder="Enter state" disabled />
                claim a lien against the above-described property in the amount
                <BlueBlock text={state.amount} onChange={handleChange("amount")} placeholder="Enter amount" />
            </Typography>

            <Typography>
                Name of Person Claiming Lien: {data?.profiles?.username} Address:
                <BlueBlock text={state.address} onChange={handleChange("address")} placeholder="Enter address" />
            </Typography>

            <Typography>
                Public notary: ON; (date/Time) <BlueBlock text={state.dateTime}
                                                          onChange={handleChange("dateTime")} placeholder="Enter date/time" />
            </Typography>

            <Typography>
                Notary signature <BlueBlock placeholder="Enter signature" /> Seal
            </Typography>

            <Typography>
                In and for the County of <BlueBlock text={state.country} placeholder="Enter county" /> state of
                <BlueBlock text={state.state} onChange={handleChange("state")}
                           placeholder="Enter state" disabled />
            </Typography>

            <Typography>
                My commission expires <BlueBlock  onChange={handleChange("commissionExpires")}
                                                  text={state.commissionExpires}
                                                 placeholder="Enter expiration date" />
            </Typography>
        </DocumentLayout>
    );
};

export default ClaimOfLien;

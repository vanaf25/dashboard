"use client";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import { useGetQuoteQuery } from "@/app/hooks/useQuote";
import { ElementType } from "@/app/types/exportPdfTypes";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const BreachOfContract = () => {
    const { data, isLoading, error } = useGetQuoteQuery();

    // State for date pickers and text fields
    const [selectedDates, setSelectedDates] = useState({
        contractDate: null,
        hearingDate: null,
    });

    const [violationDetails, setViolationDetails] = useState("");

    const handleDateChange = (field:any, date:any) => {
        setSelectedDates((prev) => ({ ...prev, [field]: date }));
    };

    const pSection = [
        "It has come to our attention that this agreement has recently been breached.",
        "You have violated this contract in the following ways:",
    ];

    const secondPart = [
        "Since you violated these parts of the agreement, this contract has therefore been breached.",
        "As a result of the breach, the company will be stopping the production of work and begin collection activity until an agreement repairing the breach can be found.\n",
    ];

    const firstLabel =
        "I am contacting you in order to discuss a contract agreement signed on";
    const secondLabel =
        "The Company is requesting your attendance at a contract breach hearing on";
    const lastParagraph =
        "Please let me know as soon as possible via email if you will be able to make it.\n";

    return (
        <DocumentLayout
            pdfTitle={"Breach Of Contract"}
            pdfName={"Breach Of Contract"}
            exportElems={[
                { type: ElementType.P, content: `Dear, ${data?.customers?.name}` },
                {
                    type: ElementType.P,
                    content: `${firstLabel} ${
                        selectedDates.contractDate
                            ? dayjs(selectedDates.contractDate).format("MM/DD/YYYY")
                            : "N/A"
                    }`,
                },
                ...pSection.map((p) => ({ type: ElementType.P, content: p })),
                { type: ElementType.SECTION, content: violationDetails },
                ...secondPart.map((p) => ({ type: ElementType.P, content: p })),
                {
                    type: ElementType.P,
                    content: `${secondLabel} ${
                        selectedDates.hearingDate
                            ? dayjs(selectedDates.hearingDate).format("MM/DD/YYYY")
                            : "N/A"
                    }`,
                },
                { type: ElementType.P, content: lastParagraph },
            ]}
            withOutHeader
        >
            <Typography sx={{ mb: 1 }} variant="h4">
                Breach of Contract
            </Typography>
            <Typography>Dear, {data?.customers?.name}</Typography>

            <Box sx={{ display: "inline-flex", alignItems: "center", mb: 2 }}>
                <Typography sx={{ mr: 2 }}>{firstLabel}</Typography>
                <DatePicker
                    label="Select Date"
                    value={selectedDates.contractDate}
                    onChange={(date) => handleDateChange("contractDate", date)}
                />
            </Box>

            <Paragraphs sections={pSection} />

            <TextField
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={violationDetails}
                onChange={(e) => setViolationDetails(e.target.value)}
            />

            <Paragraphs sections={secondPart} />

            <Box sx={{ display: "inline-flex", alignItems: "center", mb: 2 }}>
                <Typography sx={{ mr: 2 }}>{secondLabel}</Typography>
                <DatePicker
                    label="Select Date"
                    value={selectedDates.hearingDate}
                    onChange={(date) => handleDateChange("hearingDate", date)}
                />
            </Box>

            <Typography>{lastParagraph}</Typography>
        </DocumentLayout>
    );
};

export default BreachOfContract;

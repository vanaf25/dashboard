import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface LegalLetterProps {
    title: string;
    name: string;
    letterText?: string; // Optional letter text
    paragraphs?: string[]; // Optional array of paragraphs
}

const LegalLetter: React.FC<LegalLetterProps> = ({ title, name, letterText, paragraphs }) => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
                {title}
            </Typography>
            <Typography sx={{ mb: 1 }}>Dear, {name}</Typography>
            {letterText && <Typography>{letterText}</Typography>}
            {paragraphs &&
                paragraphs.map((p, index) => (
                    <Typography key={index} sx={{ mb: 1 }}>
                        {p}
                    </Typography>
                ))}
        </Box>
    );
};

export default LegalLetter;

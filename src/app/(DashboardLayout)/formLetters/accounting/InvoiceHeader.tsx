import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import React, { useState } from "react";
import BlueBlock from '../../../components/global/blueBlock/BlueBlock';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';

const InvoiceHeader = () => {
    const [projectStatus, setProjectStatus] = useState("");
    const [projectExperience, setProjectExperience] = useState("");

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h2">Job Cost</Typography>
            <Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6" sx={{ mr: 2 }}>Project Status:</Typography>
                    <TextField
                        size="small"
                        id="project-status"
                        label="Provide value"
                        variant="standard"
                        value={projectStatus}
                        onChange={(e) => setProjectStatus(e.target.value)}
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Typography variant="h6" sx={{ mr: 2 }}>Project Experience:</Typography>
                    <TextField
                        size="small"
                        id="project-experience"
                        label="Provide value"
                        variant="standard"
                        value={projectExperience}
                        onChange={(e) => setProjectExperience(e.target.value)}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default InvoiceHeader;
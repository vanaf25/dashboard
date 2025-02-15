import React, {ReactNode} from "react";
import {Box, Typography} from "@mui/material";
import {Folder, InsertDriveFile} from "@mui/icons-material";
import BlankCard from "@/app/components/shared/BlankCard";

type FolderComponentProps = {
    name: string;
    children?: ReactNode;
};

type FileComponentProps = {
    name: string;
};
export  const FolderComponent: React.FC<FolderComponentProps> = ({ name, children }) => (
    <BlankCard   sx={{ p: 2,mb:2}}>
        <Box display="flex" alignItems="center" mb={children ? 2:0}>
            <Folder color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1" fontWeight="bold">
                {name}
            </Typography>
        </Box>
        {children ? <Box pl={4} display="flex" flexDirection="column" gap={1}>
            {children}
        </Box>:<></>}
    </BlankCard>
);
export  const FileComponent: React.FC<FileComponentProps> = ({ name }) => (
    <Box display="flex" sx={{cursor:"pointer"}} alignItems="center">
        <InsertDriveFile color="action" sx={{ mr: 1 }} />
        <Typography variant="body2" color="text.secondary">
            {name}
        </Typography>
    </Box>
);
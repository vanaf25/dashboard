import React, { ReactNode } from 'react';
import { Folder, InsertDriveFile } from '@mui/icons-material'; // Используем иконки из MUI
import { Box, Typography, Paper } from '@mui/material';

type FolderComponentProps = {
    name: string;
    children?: ReactNode;
};

type FileComponentProps = {
    name: string;
};

const Page: React.FC = () => {
    return (
        <Box p={4} bgcolor="grey.100" minHeight="100vh">
            <Typography variant="h5" fontWeight="bold" mb={4}>
                Folder Structure
            </Typography>
            <Box display="flex" flexDirection="column" gap={4}>
                <FolderComponent name="Images">

                </FolderComponent>
                <FolderComponent name="Another Documents">
                    <FileComponent name="doc1.pdf" />
                    <FileComponent name="doc2.docx" />
                </FolderComponent>
                <FolderComponent name="Contract To Print">
                    <FileComponent name="contract1.pdf" />
                    <FileComponent name="contract2.pdf" />
                </FolderComponent>
                <FolderComponent name="View Contract">
                    <FileComponent name="view1.docx" />
                    <FileComponent name="view2.pdf" />
                </FolderComponent>
            </Box>
        </Box>
    );
};

const FolderComponent: React.FC<FolderComponentProps> = ({ name, children }) => (
    <Paper  variant="outlined" sx={{ p: 2, bgcolor: 'white'}}>
        <Box display="flex" alignItems="center" mb={children ? 2:0}>
            <Folder color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1" fontWeight="bold">
                {name}
            </Typography>
        </Box>
        {children && <Box pl={4} display="flex" flexDirection="column" gap={1}>
            {children}
        </Box>}
    </Paper>
);
const FileComponent: React.FC<FileComponentProps> = ({ name }) => (
    <Box display="flex" sx={{cursor:"pointer"}} alignItems="center">
        <InsertDriveFile color="action" sx={{ mr: 1 }} />
        <Typography variant="body2" color="text.secondary">
            {name}
        </Typography>
    </Box>
);

export default Page;

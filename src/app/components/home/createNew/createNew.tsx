import React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Paper } from '@mui/material';

interface Item {
    name: string;
    imageSrc: string;
}

const items: Item[] = [
    { name: 'FileUpload', imageSrc: '/images/fileUpload.png' },
    { name: 'Estimate', imageSrc: '/images/fileUpload.png' },
    { name: 'Invoice', imageSrc: '/images/fileUpload.png' },
    { name: 'Task', imageSrc: '/images/fileUpload.png' },
/*
    { name: '3d Floor Plan', imageSrc: '/images/fileUpload.png' },
*/
    { name: 'TakeOff', imageSrc: '/images/fileUpload.png' },
    { name: 'Daily log', imageSrc: '/images/fileUpload.png' },
    { name: 'Time entry', imageSrc: '/images/fileUpload.png' },
    { name: 'Selections board', imageSrc: '/images/fileUpload.png' },
    { name: 'Mood Board', imageSrc: '/images/fileUpload.png' },
    { name: 'Lead', imageSrc: '/images/fileUpload.png' },
];

const CreateNew: React.FC = () => {
    return (
        <Box sx={{mt:2, padding: 4, border: '1px solid #ccc', borderRadius: '8px', boxShadow: 2 }}>
            {/* Title */}
            <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Create New
            </Typography>

            {/* Items Grid */}
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 2,
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'opacity 0.3s',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        >
                            {/* Image Box */}
                            <Box
                                sx={{
                                    padding: 1,
                                    backgroundColor: 'wheat',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image src={item.imageSrc} alt={item.name} width={20} height={20} />
                            </Box>

                            {/* Item Name */}
                            <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center' }}>
                                {item.name}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CreateNew;

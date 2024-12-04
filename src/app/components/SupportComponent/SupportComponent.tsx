import React from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Grid, Paper, Link } from '@mui/material';
import BlankCard from '@/app/components/shared/BlankCard'; // Importing BlankCard

const SupportComponent: React.FC = () => {
    return (
        <BlankCard sx={{mt:2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 3,
                    gap:2
                }}
            >
                {/* Profile Image */}
                <Box
                    sx={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src="/images/avatar.jpg"
                        alt="Support Avatar"
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover' }}
                    />
                </Box>

                {/* Information */}
                <Box sx={{ maxWidth: '60%' }}>
                    <Typography variant="h5" sx={{ marginBottom: 1 }}>
                        Julia Hagenbaumer
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                        dedicatedsupport@gmail.com
                    </Typography>
                    <Button variant="contained">Schedule a Call</Button>
                </Box>
            </Box>

            {/* Cards with Icons */}
            <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 3 }}>
                {['Help Center', 'Video Tutorials', 'Webinars', 'Learn'].map((item, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                background:"wheat",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent:"center",
                                gap:1,
                                padding: 4,
                                borderRadius: 2,
                                cursor: 'pointer',
                                transition: 'opacity 0.3s',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        >
                            {/* Icon (Using image for now) */}
                            <Image
                                src="/images/fileUpload.png"
                                alt={item}
                                width={24}
                                height={24}
                            />
                            {/* Text */}
                            <Typography sx={{color:"black"}}>{item}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Support Text */}
            <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                <Typography variant="body2">
                    For technical support,{' '}
                    <Link href="tel:(833)432-3779" sx={{ textDecoration: 'none' }}>
                        call (833) 432-3779
                    </Link>
                </Typography>
            </Box>
        </BlankCard>
    );
};
export default SupportComponent;

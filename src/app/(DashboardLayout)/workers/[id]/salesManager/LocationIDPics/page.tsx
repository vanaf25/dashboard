"use client";
import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

// Import the images from the same folder
import img from './img.png';
import img1 from './img_1.png';
import img2 from './img_2.png';
import img3 from './img_3.png';
import img4 from './img_4.png';

const Page = () => {
    const images = [img, img1, img2, img3, img4];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/doc.pdf'; // Ensure the file is in the public folder
        link.download = 'doc.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Typography sx={{ mb: 1 }} variant="h3">Location ID Pics</Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{ mb: 2 }}
            >
                Download PDF
            </Button>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        width={300}
                        height={300}
                        style={{ marginBottom: "20px" }}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </Box>
        </div>
    );
};

export default Page;
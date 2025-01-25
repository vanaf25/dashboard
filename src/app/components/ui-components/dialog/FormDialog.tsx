"use client";
import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Grid,
    Card,
    CardMedia,
    CardActions,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const Page = () => {
    const [images, setImages] = useState([]);

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => ({
            id: URL.createObjectURL(file),
            file,
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleDeleteImage = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                File Uploader
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    border: "2px dashed #ccc",
                    borderRadius: "8px",
                    p: 4,
                    textAlign: "center",
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    Drag and drop your images here or click below to upload
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<Upload />}
                >
                    Upload Files
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        hidden
                        onChange={handleFileUpload}
                    />
                </Button>
            </Box>

            {images.length > 0 && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Uploaded Images
                    </Typography>
                    <Grid container spacing={2}>
                        {images.map((image) => (
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={image.id}
                                        alt="Uploaded Image"
                                    />
                                    <CardActions>
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDeleteImage(image.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default Page;

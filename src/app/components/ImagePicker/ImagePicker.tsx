import React, { useState, ChangeEvent, DragEvent } from "react";
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

type ImageData = {
    id: string;
    file: File;
};

const ImagePicker: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            const newImages = files.map((file) => ({
                id: URL.createObjectURL(file),
                file,
            }));
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    const handleDeleteImage = (id: string): void => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer.files) {
            const files = Array.from(event.dataTransfer.files);
            const newImages = files.map((file) => ({
                id: URL.createObjectURL(file),
                file,
            }));
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
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
                    cursor: "pointer",
                }}
                onClick={() => document.getElementById("file-input")?.click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <Typography variant="body1" color="text.secondary">
                    Drag and drop your images here or click to upload
                </Typography>
                <Upload fontSize="large" color="action" />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Upload />}
                >
                    Upload Files
                </Button>
                <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleFileUpload}
                />
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
                                        sx={{
                                            objectFit: "contain", // Keeps the image within bounds
                                            backgroundColor: "#f0f0f0", // Optional background color
                                        }}
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

export default ImagePicker;

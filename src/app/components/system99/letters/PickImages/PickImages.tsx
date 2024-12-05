import React, { useState, ChangeEvent } from "react";
import { Button, Box } from "@mui/material";

const PickImages: React.FC = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    // Handle the file input change
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));

            // Set the state with the selected image URLs
            setSelectedImages((prevImages) => prevImages.concat(imagesArray));

            // Free memory when component unmounts
            // @ts-ignore
            Array.from(files).forEach((file) => URL.revokeObjectURL(file));
        }
    };

    return (
        <Box sx={{ mb: 2 }}>
            <Button variant="contained" component="label">
                Upload Image
                <input
                    type="file"
                    hidden
                    multiple
                    accept="image/*" // Accept only image files
                    onChange={handleFileChange}
                />
            </Button>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {selectedImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Upload Preview ${index}`}
                        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
                    />
                ))}
            </div>
        </Box>
    );
};

export default PickImages;

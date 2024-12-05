import React, { useState, useRef, ChangeEvent } from "react";
import { Button } from "@mui/material";

const PickVideos: React.FC = () => {
    const [videoSrcs, setVideoSrcs] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const videoURLs = Array.from(files).map((file) => URL.createObjectURL(file));
            setVideoSrcs((prevVideoSrcs) => [...prevVideoSrcs, ...videoURLs]);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                multiple
                onChange={handleVideoUpload}
                style={{ display: "none" }} // Hide the input element
            />
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
                Upload Videos
            </Button>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {videoSrcs.map((src, index) => (
                    <div key={index}>
                        <video width="100%" controls>
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PickVideos;

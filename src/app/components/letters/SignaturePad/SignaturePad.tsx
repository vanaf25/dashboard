import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Box, Button, Typography, Paper } from "@mui/material";

interface SignaturePadProps {
    onSave: (dataURL: string) => void;
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onSave }) => {
    const sigCanvas = useRef<SignatureCanvas | null>(null);
    const [signature, setSignature] = useState<string>("");
    const handleSave = () => {
        if (sigCanvas.current) {
            const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
            setSignature(dataURL);
            onSave(dataURL);
        }
    };

    const handleClear = () => {
        sigCanvas.current?.clear();
        setSignature("");
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
                />
            </Paper>
            <Box display="flex" gap={2}>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
                <Button variant="outlined" color="error" onClick={handleClear}>
                    Clear
                </Button>
            </Box>
            {signature && (
                <Box mt={2}>
                    <Typography variant="subtitle1">Saved Signature:</Typography>
                    <img src={signature} alt="Signature" style={{ width: 150, border: "1px solid #ccc" }} />
                </Box>
            )}
        </Box>
    );
};
export default SignaturePad;

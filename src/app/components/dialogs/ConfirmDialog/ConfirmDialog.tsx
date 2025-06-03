import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography
} from "@mui/material";
interface ConfirmDialogProps {
    open: boolean;
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    cancelText?: string;
}
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
                                                         open,
                                                         title = "Confirm",
                                                         description = "Are you sure?",
                                                         onConfirm,
                                                         onCancel,
                                                         confirmText = "Yes",
                                                         cancelText = "No"
                                                     }) => {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography>{description}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{cancelText}</Button>
                <Button onClick={onConfirm} variant="contained" color="error">
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;

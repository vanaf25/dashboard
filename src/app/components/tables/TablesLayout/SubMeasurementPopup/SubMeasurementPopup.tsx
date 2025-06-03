import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";
import BlankCard from "@/app/components/shared/BlankCard";

interface SubMeasurementPopupProps {
    onAdd: (name: string) => void;
}
const SubMeasurementPopup: React.FC<SubMeasurementPopupProps> = ({ onAdd }) => {
    const [open,setOpen]=useState(false);
    const [buildingName, setBuildingName] = useState("");
    const onClose=()=>{
        setOpen(false)
        setBuildingName("");
    }
    const handleAdd = () => {
        if (buildingName.trim()) {
            onAdd(buildingName.trim());
            onClose()
        }
    };
    return (
        <>
            <BlankCard sx={{p:2,mt:2}}>
                <Button onClick={()=>setOpen(true)} fullWidth size={"large"} variant={"contained"}>
                    Add Building
                </Button>
            </BlankCard>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Provide name of building</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        fullWidth
                        placeholder="Building name"
                        value={buildingName}
                        onChange={(e) => setBuildingName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdd} variant="contained">Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default SubMeasurementPopup;

import React, {useEffect, useState} from "react";
import TablesLayout from "./../TablesLayout";
import {Box, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "@/app/components/dialogs/ConfirmDialog/ConfirmDialog";

interface SubTablesLayoutProps {
    name: string;
    props: React.ComponentProps<typeof TablesLayout>;
    onDelete:()=>void,
}

const SubTablesLayout: React.FC<SubTablesLayoutProps> = ({ name, props,onDelete }) => {
    const [openConfirm, setOpenConfirm] = useState(false);
    const handleDelete = () => {
        setOpenConfirm(true);
    };
    const handleConfirm = () => {
        setOpenConfirm(false);
        onDelete();
    }
    return (
        <Box mt={4}>
            <Box
                sx={{
                    backgroundColor: "#4caf50",
                    padding: "12px",
                    textAlign: "center",
                    borderRadius:"0%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        color: "#fff",
                    }}
                >
                    {name}
                </Typography>
                <IconButton onClick={handleDelete} sx={{color:"#ff1744"}}>
                    <DeleteIcon />
                </IconButton>
            </Box>
            <TablesLayout {...props} isSubMeasurement />
           <ConfirmDialog onConfirm={handleConfirm}
                          onCancel={()=>setOpenConfirm(false)}
                          confirmText={"Delete building"}
                          description={`Are you sure to delete ${name}`}
                          open={openConfirm} />
        </Box>
    );
};

export default SubTablesLayout;

import React from 'react';
import Alert from "@mui/material/Alert";
import {Typography} from "@mui/material";

const TableNotes = () => {
    return (
        <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant={"h3"}>
                To Edit Table data db click on cell and after providing a value press Tab(Then you will
                start edit next cell)
                Or press Enter
            </Typography>
            <Typography variant={"h3"}>
                If You want cancell editing click esc
            </Typography>
        </Alert>
    );
};

export default TableNotes;
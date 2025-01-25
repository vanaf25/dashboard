import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
interface DocumentFooter{
    profiles:any,
    customers:any
}
const DocumentFooter:React.FC<DocumentFooter> = ({profiles,customers}) => {
    return (
        <Box sx={{display:"flex",justifyContent:"center",gap:2}}>
            <Typography sx={{fontSize:"18px"}}>Company Phone:{profiles?.phone}</Typography>
            <Typography sx={{fontSize:"18px"}}>Company Address:
                {customers?.company_address} {profiles?.city} {profiles?.state}.
                {profiles?.zip}</Typography>
        </Box>);
};

export default DocumentFooter;
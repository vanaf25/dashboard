import React from 'react';
import Box from "@mui/material/Box";
import CustomerDetails from "@/app/components/global/CustomerDetails/CustomerDetails";
import EstimatorDetails from "@/app/components/global/EstimatorDetails/EstimatorDetails";
import Typography from "@mui/material/Typography";
interface DocumentHeaderProps{
    customers:any,
    profiles:any,
    type:string
}
const DocumentHeader:React.FC<DocumentHeaderProps> = ({customers,profiles,type}) => {
    return (
        <>
            <Box sx={{display:"flex",justifyContent:"space-between",padding:"0 20px"}}>
                <CustomerDetails customer={{
                    name:customers.name,
                    email:customers.email,
                    phone:customers.phone,
                    address:`${customers.address} ${customers.city} ${customers.state}. ${customers.zip}`
                }}/>
                <EstimatorDetails estimatorDetails={{
                    signee:profiles?.username,
                    companyEmail:profiles?.company_email,
                    companyPhone:profiles?.phone,
                }}/>
            </Box>
            {type==="contract" && <Box sx={{mb:2,padding:"0 20px"}}>
                <Typography sx={{mb:1}}>Hereafter company refers to:<mark>{customers.name}</mark></Typography>
                <Typography>Hereafter client, owner and customer refers to
                    <mark>{profiles.username}</mark> and their spouse or life partner.
                </Typography>
            </Box>}
        </>
    );
};

export default DocumentHeader;
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from "react";

interface Customer {
    [key: string]: string | number | undefined; // Generic type for customer properties
}

interface CustomerDetailsProps {
    customer: Customer;
    withOutTitle?: boolean;
    title?: string;
    [key: string]: any; // Allow additional props to be passed to Box
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, withOutTitle, title, ...rest }) => {
    return (
        <Box sx={{ mb: 1,maxWidth:300 }} {...rest}>
            {!withOutTitle && <Typography variant="h5" sx={{ mb: 1 }}>{title ? title : "Customer info"}</Typography>}
            {Object.entries(customer).map(([key, value]) => (
                <Typography sx={{fontSize:"18px",mb:1,"&::first-letter":{textTransform: "uppercase"}}} key={key}>
                    {key}: {value}
                </Typography>
            ))}
        </Box>
    );
};
export const UserDetails:React.FC<any>=({customer,...rest})=>(<CustomerDetails customer={
    {customer:customer?.name,email:customer?.email,phone:customer?.phone,address:`${customer?.address},
     ${customer?.city}, ${customer?.state}, ${customer?.zip}`}
} title={"Customer Information"} {...rest} />)
export const CompanyDetails:React.FC<any>=({company,...rest})=><CustomerDetails customer={{
companyPhone:company?.phone,
    email:company?.company_email,
    companyAddress:`${company?.company_address}, ${company?.city},
     ${company?.state}, ${company?.zip}`,
}} title={"Company Details"} {...rest}  />
export default CustomerDetails;

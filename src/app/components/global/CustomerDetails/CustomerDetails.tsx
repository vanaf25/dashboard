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
        <Box sx={{ mb: 1,maxWidth:250 }} {...rest}>
            {!withOutTitle && <Typography variant="h5" sx={{ mb: 1 }}>{title ? title : "Customer info"}</Typography>}
            {Object.entries(customer).map(([key, value]) => (
                <Typography sx={{fontSize:"18px",mb:1}} key={key}>
                    {key}: {value}
                </Typography>
            ))}
        </Box>
    );
};

export default CustomerDetails;

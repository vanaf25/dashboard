import React from 'react';
import Image from 'next/image';
import { Typography, Button, Box } from '@mui/material';
import BlankCard from "@/app/components/shared/BlankCard";
const FastSavePayment: React.FC = () => {
    return (
        <BlankCard sx={{mt:2,width:"400px"}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 2,
                }}
            >
                {/* Text Content */}
                <Box sx={{ maxWidth: '60%' }}>
                    <Typography variant="h4" sx={{ marginBottom: 1 }}>
                        Fast, Save Payment
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                        Let clients pay online from anywhere to get bank deposits in 1 to 3 days - or even
                        within minutes.
                    </Typography>
                    <Button variant="contained">Get Started</Button>
                </Box>

                {/* Image */}
                <Box sx={{ maxWidth: '35%' }}>
                    <Image
                        src="/images/online_payments.svg"
                        alt="Online Payments"
                        width={100}
                        height={100}
                    />
                </Box>
            </Box>
        </BlankCard>
    );
};

export default FastSavePayment;

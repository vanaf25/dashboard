import React from "react";
import {Status} from "@/app/types/dashboardTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";

const StatusCard:React.FC<Status>=
    ({ title, description, totalPrice,id }) => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '16px',
                    border: '1px solid #ccc',
                    overflow: 'hidden',
                    width: '300px',
                    boxShadow: 2,
                    margin: 2, // Space between cards
                }}
            >
                {/* Border Top */}
                <Box
                    sx={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#1976d2', // Replace with desired color
                    }}
                ></Box>

                {/* Content */}
                <Box sx={{ padding: 2, textAlign: 'center', flex: 1 }}>
                   <Link href={`/quote/${id}`}>
                       <Typography variant="h4" sx={{ fontWeight: 'bold',mb:2 }}>
                           {title}
                       </Typography>
                   </Link>
                    <Typography variant={"h5"} sx={{fontWeight:"500"}}>Client:{description}</Typography>
                </Box>

                {/* White Status Box */}
                <Box
                   sx={{marginTop:"10px",mb:2}}
                >
                    <Typography sx={{fontSize:"16px",fontWeight:500,mb:1}}>
                        TotalPrice: {totalPrice}
                    </Typography>
                    <Link href={`/quote/${id}`}>
                        <Button fullWidth>Details</Button>
                    </Link>
                </Box>
            </Box>
        );
    };
export default StatusCard
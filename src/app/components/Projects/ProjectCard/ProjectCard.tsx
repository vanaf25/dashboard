import React from "react";
import {Status} from "@/app/types/dashboardTypes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const StatusCard:React.FC<Status>=
    ({ title, description, status }) => {
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
                   <Link href={`/system99/calculators/${title}`}>
                       <Typography variant="h4" sx={{ fontWeight: 'bold',mb:2 }}>
                           {title}
                       </Typography>
                   </Link>
                    <Typography color="text.secondary">Client:{description}</Typography>
                </Box>

                {/* White Status Box */}
                <Box
                    sx={{
                        display:"inline-block",
                        padding: '10px',
                        textAlign: 'center',
                        marginBottom:"10px",
                    }}
                >
                    <Typography variant="body1" color="text.primary">
                        Status: {status}
                    </Typography>
                </Box>
            </Box>
        );
    };
export default StatusCard
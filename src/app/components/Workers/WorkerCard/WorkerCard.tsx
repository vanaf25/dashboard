import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {Worker} from "@/app/types/workerTypes"

const WorkerCard:React.FC<{worker:Worker}> = ({worker}) => {
    return (
        <Card
            sx={{
                p: 2,
                border: "1px solid #ddd",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
            }}
        >
            <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {worker.fullName}
                </Typography>
                <Typography color="textSecondary">{worker.email}</Typography>
                <Typography color="textSecondary">{worker.phone}</Typography>
                <Typography color="textSecondary">{worker.address}</Typography>
            </CardContent>
        </Card>
    );
};

export default WorkerCard;
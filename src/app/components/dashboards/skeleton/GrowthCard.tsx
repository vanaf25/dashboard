import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import DashboardCard from "../../shared/DashboardCard";

const SkeletonGrowthCard = () => {

    return (
        <DashboardCard>
            <>
                <Skeleton variant="rounded" width={38} height={38} />

                <Box mt={3} mb={1}>
                    <Skeleton variant="rounded" width={110} height={25} />
                </Box>

                <Typography variant="h4" mb={1}>
                    <Skeleton variant="rounded" width={90} height={25} />

                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    <Skeleton variant="rounded" width={55} height={25} />
                </Typography>
            </>
        </DashboardCard>
    );
};

export default SkeletonGrowthCard;

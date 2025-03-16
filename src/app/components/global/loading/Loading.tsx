import { memo } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
export const Loading = memo(() => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
        <Typography sx={{ marginLeft: 2 }}>Loading...</Typography>
    </Box>
));
Loading.displayName = 'Loading';

export const InlineLoading = memo(() => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress size={24} />
        <Typography sx={{ marginLeft: 1 }}>Loading...</Typography>
    </Box>
));
InlineLoading.displayName = 'InlineLoading';
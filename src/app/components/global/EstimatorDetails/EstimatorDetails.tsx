import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface EstimatorDetailsProps {
    estimatorDetails: {
        signee: string;
        companyPhone: string;
        companyEmail: string;
    };
    [key: string]: any; // Allow additional props to be passed to the Box component
}

const EstimatorDetails: React.FC<EstimatorDetailsProps> = ({ estimatorDetails, ...props }) => {
    return (
        <Box sx={{ mb: 1 }} {...props}>
            <Typography variant="h4" sx={{ mb: 1 }}>
                Estimator info
            </Typography>
            <Typography sx={{fontSize:"18px",mb:1}}>Name: {estimatorDetails.signee}</Typography>
            <Typography sx={{fontSize:"18px",mb:1}}>Phone: {estimatorDetails.companyPhone}</Typography>
            <Typography sx={{fontSize:"18px",mb:1}}>Email: {estimatorDetails.companyEmail}</Typography>
        </Box>
    );
};

export default EstimatorDetails;

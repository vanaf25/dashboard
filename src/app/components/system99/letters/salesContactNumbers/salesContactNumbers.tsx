import Paragraphs from '../parahraphs/Paragraphs';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const SalesContactNumbers:React.FC = () => {
  return (
    <Box>
      <Typography sx={{mb:1}}>For more information contact company at</Typography>
      <Paragraphs sections={["0990930450","0990930450","0990930450"]}/>
    </Box>  );
};

export default SalesContactNumbers;

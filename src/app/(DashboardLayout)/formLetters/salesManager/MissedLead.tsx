import { TextField, Typography } from '@mui/material';
import Paragraphs from '../../../components/letters/parahraphs/Paragraphs';
import UnderlinedText from '../../../components/global/UnderlinedText/UnderlinedText';
import Box from '@mui/material/Box';

const MissedLead = () => {
  return (
    <div>
    <Typography variant={"h4"}>Missed Lead</Typography>
      <Typography sx={{mb:1}}>Dear,Name</Typography>
      <Typography sx={{mb:1}}>Phone:0990930450</Typography>
      <Paragraphs sections={["We received a communication that you had missed one of your leads and as a result your customer has been reassigned to a different person. Missing a lead will often anger the potential customer and often the customer will cut off communication with the company. This is not only expensive to the company but will often make customers leave bad reviews of the company costing us further business." +
      "If you miss more than 2 leads with out first assigning a replacement for yourself you will be put in for review and no more leads will be assigned to you until the company can be confident that you are responsible with the leads assigned. If you continue to miss leads the company will stop assigning you new leads and you will have to generate your own leads if you wish to keep selling for us."]}/>
    <Box sx={{mb:1}}>
      <UnderlinedText >
        Aditional Notes from
      </UnderlinedText>
    </Box>
      <Box sx={{mb:1}}>
        <TextField
          label="Provide Reason"
          multiline
          rows={3}
          variant="outlined"
          sx={{ mb: 2 }}
          fullWidth
        />
      </Box>
      <Box>
        <Typography sx={{mb:1}}>For more information contact company at</Typography>
        <Paragraphs sections={["0990930450","0990930450","0990930450"]}/>
      </Box>
    </div>
  );
};

export default MissedLead;

"use client";
import Paragraphs from '../../../../components/letters/parahraphs/Paragraphs';
import { TextField, Typography } from '@mui/material';
import BlueBlock from '../../../../components/global/blueBlock/BlueBlock';
import SalesContactNumbers from '../../../../components/letters/salesContactNumbers/salesContactNumbers';
import Box from '@mui/material/Box';

const BackChargeNotice = () => {
  const backChargeCommunication = [
    "We have received a communication that there were significant changes to a project you sold. As a result, you are receiving a back charge on the commission you have received. Back charges happen both as a fault of not properly selling the customer on the correct products or services, inaccurately measuring, undercharging the customer, or because the customer reduced the size of the project.",

    "If you would like to have more information on the back charge you're receiving, reach out to your manager for a full explanation."
  ];

  return (
    <div>
      <Typography variant={"h4"}>Back Charge Notice</Typography>
      <Typography sx={{mb:1}}>Dear,Ivan</Typography>
      <Typography sx={{mb:1}}>Phone:  0990930450</Typography>
      <Paragraphs sections={backChargeCommunication}/>
      <Box sx={{width:"80%",display:"flex"}}>
        <Typography>Adress:   </Typography>
        <Typography sx={{textDecoration:"underline",background:"lightlue",width:"80%"}}>Some text</Typography>
      </Box>
      <Typography>Amount of back charge: <BlueBlock text={"Some text added"}/>
      </Typography>
      <Typography sx={{mb:1}}>Reason for back charge</Typography>
      <TextField
        label="Provide Reason"
        multiline
        rows={3}
        variant="outlined"
        sx={{ mb: 2 }}
        fullWidth
      />
      <SalesContactNumbers/>
    </div>
  );
};

export default BackChargeNotice;

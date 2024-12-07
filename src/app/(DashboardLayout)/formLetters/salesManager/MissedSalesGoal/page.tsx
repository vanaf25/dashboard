"use client";
import { Typography } from '@mui/material';
import Paragraphs from '../../../../components/letters/parahraphs/Paragraphs';
import SalesContactNumbers from '../../../../components/letters/salesContactNumbers/salesContactNumbers';

const MissedLead = () => {
  return (
    <div>
      <Typography variant={"h4"}>Missed Lead</Typography>
      <Typography sx={{mb:1}}>Dear,Name</Typography>
      <Typography sx={{mb:1}}>Phone:0990930450</Typography>
      <Paragraphs sections={[
        "We have received a communication that you have missed one of your sales goals. Although sales goals can be frustrating and at times higher than some people will be able to achieve, sales goals have 2 purposes. First, they exist to make sure all salespersons are working to achieve the best success they can in the effort to provide work for the company and production team.",
        "Second, they are made to aid in supporting the growth of the salesperson themselves in their effort to move forward on the track to higher commission rates and success.",
        "Missing a sales goal can show a lack of effort, focus, sickness, fear, spite, or just a missed goal. Although the company understands this, depending on the number of goals missed, the company will make a decision on whether your commission rate will be affected or stay the same. In some situations, goals will be reset or leads will be reduced.",
        "Keep your focus and stay on track. Missing goals is often because the salesperson is rushed with too many leads and, as a result, goes too fast when with the customer. It takes a minimum of 2 hours with a customer to make a sale. Don’t rush, focus."
      ]}/>
      <SalesContactNumbers/>
    </div>
  );
};

export default MissedLead;

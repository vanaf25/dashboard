"use client";
import { Typography } from '@mui/material';
import BlueBlock from '../../../components/global/blueBlock/BlueBlock';
const BreachOfContract = () => {
  return (
    <div>
      <Typography sx={{mb:1}} variant={"h4"}>Breach of contract</Typography>
       <Typography sx={{mb:1}}>
         I am contacting you in order to discuss a contract agreement signed on
         <BlueBlock/>
       </Typography>
      <Typography sx={{mb:1}}>
        It has come to our attention that this agreement has recently been breached.
      </Typography>
      <Typography>
        You have violated this contract in the following ways:
      </Typography>
      <Typography sx={{mb:1}}>Some contract</Typography>
      <Typography sx={{mb:1}}>Some contract</Typography>
      <Typography sx={{mb:1}}>Some contract</Typography>
      <Typography sx={{mb:1}}>
        Since you violated theses parts of the agreement this contract has therefore been breached.
      </Typography>
      <Typography sx={{mb:1}}>
        As a result of the breach the company will be stopping the production of work and begin collection activity until an agreement repairing the breach can be found.
      </Typography>
      <Typography sx={{mb:1}}>
        The Company is requesting your attendance at a contract breach hearing on
        <BlueBlock/>
      </Typography>
      <Typography>
        Please let me know as soon as possible via email if you will be able to make it.
      </Typography>
    </div>
  );
};

export default BreachOfContract;

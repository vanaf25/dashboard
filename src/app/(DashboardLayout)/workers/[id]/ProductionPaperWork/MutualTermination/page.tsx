"use client";
import { Grid, Typography } from '@mui/material';
import UnderlinedText from "@/app/components/global/UnderlinedText/UnderlinedText";

const MutualTermination = () => {
  return (
    <div>
      <Typography variant={"h4"}>Mutual Termination</Typography>
      <Typography sx={{mb:1}}>Dear, Name </Typography>
      <Typography sx={{mb:1}}>As of,
        <UnderlinedText padding={50}>Some Text</UnderlinedText>
        you know we have not been able to make the agreement between us work, as a result we mutually agree to terminate the agreement between us.
      </Typography>
    <Typography sx={{mb:2}}>
      if you have any questions or requests before you go please notify  management as soon as you can so we can help.
    </Typography>
      <Typography>
        Thank you for your services up to this date, wishing you the best of luck for your future.
      </Typography>

    </div>
  );
};

export default MutualTermination;

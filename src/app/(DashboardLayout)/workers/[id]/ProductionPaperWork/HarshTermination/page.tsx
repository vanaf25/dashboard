"use client"
import { Grid, Typography } from '@mui/material';
import UnderlinedText from "@/app/components/global/UnderlinedText/UnderlinedText";

const HarshTermination = () => {
  return (
    <div>
      <Typography variant={"h4"}>Harsch Termination</Typography>
      <Typography sx={{mb:1}}>
        Dear Ivan
      </Typography>
      <Typography sx={{mb:1}}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Our company hold's personnel to the highest standards of quality, honesty and safety. These standards and expectations are not flexible nor will violating them be ignored.
      </Typography>
      <Typography sx={{mb:1}}>
        As of <UnderlinedText padding={50}>Some Text</UnderlinedText> a Result the company will be terminating your labor agreement with us.
      </Typography>
      <Typography>
        After a full review of your actions is conducted the company will decide if a criminal complaint will be filed against you with the local, state and federal policing agencies; Additionally, you may also be held liable and sued for damages you have caused to the company, customer or other persons involved in this incident.
      </Typography>
    </div>
  );
};

export default HarshTermination;

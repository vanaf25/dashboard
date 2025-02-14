"use client";
import UnderlinedText from '@/app/components/global/UnderlinedText/UnderlinedText';
import SignaturesSection from '@/app/components/letters/signatureSection/signatureSection';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BlueBlock from "@/app/components/global/blueBlock/BlueBlock";

const AdvanceFormRequest = () => {
  return (
    <div>
      <Typography variant={"h4"}>Advance Form Request</Typography>
      <Typography sx={{mb:2}}>
        I	<UnderlinedText padding={50}/> am requesting and advance on my weekly pay in the amount of <BlueBlock text={"Some text"}/>
        I am fully aware that the amount given will be deducted from my weekly pay and that I will not be entitled to any repayment plan; additionally, I understand and agree that I will not hold the company liable for any back pay as a result of the advance. I also agree that if I fail to work for the company after receiving the advance I will be liable to repay the company on the advance issued with interest not to exceed 25% per month.
      </Typography>
      <Box sx={{mb:3}}>
        <Typography>
          Name:<UnderlinedText padding={100}>0</UnderlinedText>
        </Typography>
      </Box>
      <SignaturesSection client={"Sign"} />
    </div>
  );
};

export default AdvanceFormRequest;

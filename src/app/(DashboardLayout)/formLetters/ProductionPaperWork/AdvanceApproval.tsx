"use client";
import { Typography } from '@mui/material';
import UnderlinedText from '../../../components/global/UnderlinedText/UnderlinedText';
import BlueBlock from '../../../components/global/blueBlock/BlueBlock';
import SignaturesSection from '../../../components/letters/signatureSection/signatureSection';

const AdvanceFormRequest = () => {
  return (
    <div>
      <Typography variant={"h4"}>Advance Approval</Typography>
      <Typography>
        <UnderlinedText>Some</UnderlinedText> approves the advance request submitted in the amount of
        <BlueBlock text={"Data"}/>
      </Typography>
      <Typography sx={{mb:2}}>
        Company will deduct the full amount of the advance from the requestors next check. Requesting person understands that they will be fully liable for the full amount of the advance and that if they fail to pay back the amount received they will be liable for an interest charge of not less than 25% of the amount advanced. requester understands that even if they fail to work or quit the company they will be liable for the amount advanced plus interest.
      </Typography>

        <SignaturesSection client={"Company rep"} />
      <SignaturesSection client={"Requestor"} />
    </div>
  );
};

export default AdvanceFormRequest;

"use client";
import { Typography } from '@mui/material';
const BreachOfNonDisclosure = () => {
  return (
    <div>
      <Typography sx={{mb:1}} variant={"h3"}>      Breach of Non Disclosure
      </Typography>
      <Typography sx={{mb:2}} variant={"body1"}>
        Dear,  Name Surname
      </Typography>
      <Typography sx={{mb:1}}>
        I am contacting you in order to discuss a non-disclosure agreement signed on
        <u> Some Text </u>
        It has come to our attention that this agreement has recently been breached.
      </Typography>
      <Typography  sx={{mb:1}} variant={"body1"}>
        You have violated this contract in the following ways:  Our agreement states that you will not disclose any information about the Private Company to anyone outside of the company for any reason whatsoever, including company documents in any form (original versions, copies, faxes, and digital versions).
      </Typography>
      <Typography  sx={{mb:1}} variant={"body1"}>
        However, as of <u> Some text underlined  </u>				 it was brought to our attention that you had disclosed a Private Company information
        to an outside source. 		Since this information was considered company information and was disclosed to a company outsider,
        this contract has therefore been breached.
      </Typography>
      <Typography  sx={{mb:1}} variant={"body1"}>
        The Company is requesting your attendance at a contract breach hearing on
        <u> Some text underlined </u>
      </Typography>
      <Typography  sx={{mb:1}} variant={"body1"}>
        Please let me know as soon as possible via email if you will be able to make it. Until then, you are suspended from company property and will be unable to access your company phone or email.
      </Typography>

    </div>
  );
};

export default BreachOfNonDisclosure;

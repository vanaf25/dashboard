"use client";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import BlueBlock from "@/app/components/global/blueBlock/BlueBlock";

const ClaimOfLien = () => {
  return (
    <div>
      <Box sx={{mb:1}}>
        <Typography>
          Recording requested by: <u>Some data</u>
        </Typography>
        <Typography>
          When recorded mail to:<u>Some Data</u>
        </Typography>
        <Typography>
          Name: Address: City:<u>Some Data</u>
        </Typography>
        <Typography>
          State/Zip:<u>some Data</u>
        </Typography>
      </Box>
      <Box>
        <Typography>
          State of <u>Some Data</u>
        </Typography>
        <Typography>
          County <u>Some Data</u>
        </Typography>


      </Box>
      <Typography>
        I <span>Name surName</span>
        being duly sworn, state the following:
        In accordance with an agreement to provide labor and/or material, I did furnish the following labor and/or materials:
        on the following described real property located in					State of
        <u>State</u>
      </Typography>
      <Typography>
        Country <u>Country</u>
        Address <u>Address</u>
      </Typography>
      <Typography>
        property is owned by
        <u>Country</u>
        who is address is
        <u>Address</u>
      </Typography>
      <Typography>
        of a total value of $
        <BlueBlock/>
        of which there remains unpaid
        <BlueBlock/>
        and I further state that I furnished the first of the items on the date of
        <BlueBlock/>
        AND
        the last of the items on the date of
      <BlueBlock/>
      </Typography>
      <Typography>
        I hereby, under the laws of the State of
        <BlueBlock />
        claim a lien against the above-described property
        in the amount <BlueBlock/>
      </Typography>

      <Typography>
        Name of Person Claiming Lien: <u>0</u>
        Address: <u>0</u>
      </Typography>
      <Typography>
        Public notary: ON;(date/Time)
        <u>Some data</u>
      </Typography>
      <Typography>
        came before me personally and, under oath, stated that he/she is the person described in the above document and he/she signed the above document in my presence.
      </Typography>
      <Typography sx={{mb:1}}>
        Name of Person Claiming Lien:
        <u>
          Some Data
          Adress: Some address added
        </u>
      </Typography>
      <Box>
        <Typography>
          Notary signature
          <u>Some text added</u>
          Seal
        </Typography>
        <Typography>
          In and for the County of
          <u>Some Data</u>
          state of
          <u>Some Data</u>
        </Typography>
        My commission expires
        <u>Commercial expires</u>
      </Box>
      <SignaturesSection/>
    </div>
  );
};

export default ClaimOfLien;

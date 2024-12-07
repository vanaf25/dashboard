import { Grid, Typography } from '@mui/material';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';
import UnderlinedText from '../../../components/global/UnderlinedText/UnderlinedText';
const Termination = () => {
  return (
    <div>
      <Typography variant={"h4"}> Termination</Typography>
      <Grid container>
        <Grid xs={6}>
          <CustomerDetails title={"Worker info"} customer={{name:"ele",
            address:"Adress",phone:"0990930405",email:"vanaf@gmail.com"}} />
        </Grid>
        <Grid xs={6}>
          <CustomerDetails title={"Company info"} customer={{name:"ele",
            address:"Adress",phone:"0990930405",email:"vanaf@gmail.com"}} />
        </Grid>
      </Grid>
      <Typography sx={{mb:1}}>Dear, Name </Typography>
      <Typography>

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Our company hold's personnel to the highest standards of quality, honesty and safety. These standards and expectations are not flexible nor will violating them be ignored.
      </Typography>
      <Typography sx={{mb:1}}>As of,
        <UnderlinedText padding={50}> Some Text </UnderlinedText>
        you have violated the companies standards and ethics.
      </Typography>
      <Typography sx={{mb:2}}>
        This is a breach of agreement with the company and as a result the company will be discontinuing your labor agreement with us.
      </Typography>
      <Typography>
        Thank you for your services up to this date, wishing you the best of luck for your future.
      </Typography>
    </div>
  );
};

export default Termination;

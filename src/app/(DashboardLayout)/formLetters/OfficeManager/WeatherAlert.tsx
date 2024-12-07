"use client";
import { Typography } from '@mui/material';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';

const WeatherAlert = () => {
  return (
    <div>
      <CustomerDetails customer={{
        companyPhone:"0990930450",email:"vana@gmail.com",companyAddress:"24 rue de vignes"}}/>
      <CustomerDetails
        customer={{Estimator:"ivan",Email:"vanay@gmail.com",Phone:"0990930450",Address:"Some Adress"}}/>
      <Typography sx={{mb:1}}>
        Dear Customer
      </Typography>
      <Typography sx={{mb:2}}>
        As you may know we are having severe weather moving through your area. At times we can work around the weather
        and proceed with installation. The weather that we are seeing is likely to cause damage to your installation if we try to
        work around the current conditions. As a result we will need to delay the installation team until the weather passes.
        If you see any conditions that cause you concern please send us a picture of the location of concern and a brief
        description so that we can address is as soon as possible.
      </Typography>
      <Typography sx={{textAlign:"center"}}>
        Thank you for your business and we will see you soon.
      </Typography>

    </div>
  );
};

export default WeatherAlert;

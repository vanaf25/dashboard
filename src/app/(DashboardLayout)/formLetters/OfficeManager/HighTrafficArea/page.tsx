"use client"
import { Typography } from '@mui/material';
import CustomerDetails from '../../../../components/global/CustomerDetails/CustomerDetails';

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
      <Typography sx={{mb:1}}>
        The area in the pictures below is a High Traffic Location and will sustain a large amount of movement of trucks materials
        and installation team members.  This will most likely result in the trampling of your vegetation in this area, this cannot
        be prevented as the installation team must use this area to access the work area. Please water this location once per
        day after the installation team leaves for the day. Also if you provide us with the grass seed you would like us to place in
        this area we would be happy to place it for you at the completion of the project as a courtesy.  Note: it will take a minim
        of 3 months and up to one year for the grass to grow back in this area especially if it is not watered during and after
        your renovation.
      </Typography>
      <Typography>
        I fully understand and agree to use this area to access my home’s work area and understand that the company
        cannot prevent trampling of grass.
      </Typography>

    </div>
  );
};

export default WeatherAlert;

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import BlueBlock from '../../../components/global/blueBlock/BlueBlock';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';

const InvoiceHeader = () => {
  return (
    <>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography  variant={"h2"}>Title</Typography>
        <Box>
          <Box sx={{display:"flex",alignItems:"center",mb:2}}>
            <Typography variant={"h6"} sx={{mr:2}}>Project Status:</Typography>
            <BlueBlock/>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",mb:2}}>
            <Typography variant={"h6"} sx={{mr:2}}>Project expierence:</Typography>
            <Typography>0</Typography>
          </Box>
        </Box>
      </Box>
      <CustomerDetails withOutTitle customer={{companyAddress:0,
        companyPhone:0,email:0}} />
      <CustomerDetails withOutTitle customer={{customerName:0,
        Address:0,Phone:0,email:0}} />
    </>

  );
};

export default InvoiceHeader;

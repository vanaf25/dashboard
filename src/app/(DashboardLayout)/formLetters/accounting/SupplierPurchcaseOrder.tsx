"use client";
import EstimatorDetails from '../../../components/global/EstimatorDetails/EstimatorDetails';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';
import Table from '../../../components/letters/Table/Table';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TableWithOutHeaders from '../../../components/letters/TableWithoutHeaders/TableWithOutHeaders';
import BlueBlock from '../../../components/global/blueBlock/BlueBlock';
import BorderedCell from '../../../components/letters/BorderedCell/BorderedCell';

const SupplierPurchcaseOrder = () => {
  const columns = [
    { field: 'product', headerName: 'Product #',editable:true },
    { field: 'qty', headerName: 'Qty',editable:true },
    { field: 'description', headerName: 'Description',editable:true,flex:2 },
    { field: 'unitPrice', headerName: 'Unit Price',editable:true, },
    { field: 'amount', headerName: 'Amount',editable:true }
  ];
  const rows = [
    {
      product: 'A123',
      qty: 10,
      description: 'Product A - High quality item',
      unitPrice: 25.99,
      amount: 259.90
    },
    {
      product: 'B456',
      qty: 5,
      description: 'Product B - Durable and reliable',
      unitPrice: 45.50,
      amount: 227.50
    },
    {
      product: 'C789',
      qty: 20,
      description: 'Product C - Lightweight and compact',
      unitPrice: 15.75,
      amount: 315.00
    },
    {
      product: 'D012',
      qty: 8,
      description: 'Product D - Eco-friendly material',
      unitPrice: 30.00,
      amount: 240.00
    },
    {
      product: 'E345',
      qty: 12,
      description: 'Product E - Best-selling item',
      unitPrice: 50.00,
      amount: 600.00
    }
  ];
  const rows2 = [
    { field: 'Deliver To', value: '0' },
    { field: 'Contact #', value: '0' },
    { field: 'Address', value: '0' }
  ];
  return (
    <Box sx={{maxWidth:1000,margin:"0 auto"}}>
      <EstimatorDetails estimatorDetails={{signee:"Ivan",companyEmail:"vanay@gmail.com",companyPhone:"0990930450"}}/>
      <CustomerDetails customer={{name:"Ivan",email:"vanay@gmail.com",phone:"0990930450",adress:"Adress of custoer"}}/>
      <Box sx={{mb:1,display:"flex",justifyContent:"space-between"}}>
        <TableWithOutHeaders rows={rows2} sx={{width:300}}/>
        <Box sx={{ width: 300 }}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <BorderedCell><Typography>Purchase From</Typography></BorderedCell>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={5}>
                <BorderedCell><Typography>Supplier name</Typography> </BorderedCell>
              </Grid>
              <Grid item xs={7}>
                <BorderedCell>
                  <BlueBlock />
                </BorderedCell>
              </Grid>
            </Grid>

            <Grid container item xs={12}>
              <Grid item xs={5}>
                <BorderedCell><Typography>Address</Typography></BorderedCell>
              </Grid>
              <Grid item xs={7}>
                <BorderedCell>
                  <BlueBlock />
                </BorderedCell>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{mb:1,display:"flex",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Box sx={{alignSelf:"center",mt:1}}>
            <Typography  sx={{mr:1}}>Sales Person: </Typography>
          </Box>
          <BlueBlock/>
        </Box>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Box sx={{alignSelf:"center",mt:1}}>
            <Typography  sx={{mr:1}}>P.O. #
              : </Typography>
          </Box>
          <BlueBlock/>
        </Box>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Box sx={{alignSelf:"center",mt:1}}>
            <Typography  sx={{mr:1}}>Date: </Typography>
          </Box>
          <BlueBlock/>
        </Box>
      </Box>
      <Table columns={columns} rows={rows}/>
      <Typography sx={{mb:1}}>Terms and conditions:</Typography>
      <Typography sx={{mb:1}}>1.Please deliver All goods within 14 days from the date of the PO if posable.
      </Typography>
      <Typography>2.Condition: We reserve the right to reject goods that are not in good order or condition as determined by our quality control.
      </Typography>
      <Typography  sx={{textAlign:"center",mt:2}}  variant={"h4"}>THANK YOU FOR YOUR BUSINESS!</Typography>
    </Box>
  );
};

export default SupplierPurchcaseOrder;

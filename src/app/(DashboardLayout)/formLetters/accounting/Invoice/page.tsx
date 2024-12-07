import EstimatorDetails from '../../../../components/global/EstimatorDetails/EstimatorDetails';
import CustomerDetails from '../../../../components/global/CustomerDetails/CustomerDetails';
import { Paper, Typography } from '@mui/material';
import Table from '../../../../components/letters/Table/Table';
import Box from '@mui/material/Box';
import TableWithOutHeaders from '../../../../components/letters/TableWithoutHeaders/TableWithOutHeaders';
import filterPositiveNumbers from '../../../../utils/filterPositiveNumbers';

const Page = () => {
  const sentences = [
    "Balance's are due and payable in full, upon 94% of completion of the work listed above and prior to the completion of any punch out list submitted to the above Company by the Customer listed above.",
    "Past due accounts will have a Late Fee imposed on the balance in the amount of 10% of the balance that is due.",
    "Accounts that are past due will incur this late fee each month the balance is past due until the invoice is paid in full."
  ];
  return (
    <Box sx={{maxWidth:800,margin:"10px auto"}}>
      <Typography variant={"h3"}>Invoice</Typography>
      <EstimatorDetails estimatorDetails={{signee:"Ivan",companyEmail:"vanay@gmail.com",
        companyPhone:"0990930450"}}/>
      <CustomerDetails customer={{name:"Ivan",
        email:"vanay@gmail.com",phone:"0990930450",address:"Adress of custoer"}}/>
      <Table
        rows={[{dateSold:"",p:"",dateBalance:""}]}
        columns={[{field:"dateSold",
          cellDataType:"date",
          valueFormatter: (params:any) => {
          if(params.value){
            const date = new Date(params.value);
            return date.toLocaleDateString();
          }
          return  ""
          },
          cellEditor: "agDateCellEditor",

          editable:true,headerName:"Date  Sold",flex:2}
          ,{field:"p",editable:true,headerName: "P.O. No.",flex:2}
          ,{field:"dateBalance",headerName:"Date Balance or Payment is Due",editable:true,flex:2}]}/>
      <Table
        onCellValueChanged={filterPositiveNumbers}
        rows={[{description:"",amount:""}]}
        columns={[{field:"quantity",
          cellEditor:"agNumberCellEditor",
          cellDataType:"number",
          editable:true,label:"Quantity"}
          ,{field:"description",editable:true,label:"description"}
          ,{field:"rate",
            cellEditor:"agNumberCellEditor",
            cellDataType:"number",
            editable:true,label:"Rate or Item Cost"}
          ,{field:"amount",valueGetter:(p:any)=>{
            if(p.data.quantity && p.data.rate) return +(p.data.quantity)*+(+p.data.rate);
              return "";
            }
        }]}/>
      <Box sx={{display:"flex"}}>
        <Box sx={{maxWidth:500}}>
          <Paper sx={{p:1}} >
            <Typography> DUE TO LONG DELAYS IN CHECKS CREARING
              OUR ACCOUNT BECAUSE OF COVID WE REQUEST CASH PAYMENT FOR THIS INVOICE.</Typography>
          </Paper>
        </Box>
        <Box>
          <TableWithOutHeaders rows={ [
          { field: "subtotal", value: 1500 },      // Example dummy value
          { field: "30 days late", value: 300 },   // Example dummy value
          { field: "60 days late", value: 500 },   // Example dummy value
          { field: "90 days late", value: 700 },   // Example dummy value
          { field: "collections", value: 400 },     // Example dummy value
          { field: "total due", value: 3400 },
            // Example dummy value
            ]
          }
                               style={{fontSize:"14px !important"}}
          />
        </Box>
      </Box>
      {sentences.map((sentence,index)=><Typography
        sx={{fontSize:"18px",mb:1}} key={index}>{sentence}</Typography>)}

      <Paper sx={{display:"inline-block",p:2,margin:"10px auto"}}>
        <Typography>Thank you for your business and
          please call us if you have any questions regarding your bill.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Page;

"use client";
import Table from '../../../../components/letters/Table/Table';
import { TextField, Typography } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Box from '@mui/material/Box';
import SignaturesSection from '../../../../components/letters/signatureSection/signatureSection';

const IncidentReport = () => {
 const columns1=[{
   field:"name",
   flex:1
 },
   {field:"worker",editable:true,headerName:"list workers involved in incident",flex:3},
   {field:"DOB",editable:true,flex:1},
   {field:"SS",headerName:"Last 4 SS#",editable:true,flex:1},
   {field:"Injury",flex:1}
 ]
const columns2=[
  {
    field:"name",
    flex:1
  },
  {field:"worker",editable:true,headerName:"list workers involved in incident",flex:3},
  {field:"hospitalName",editable:true,headerName: "hostpital Name"},
  {field: "status"}
]
  return (
    <div>
      <Typography variant={"h4"} sx={{mb:2,textAlign:"center"}}>Incident Report</Typography>
      <Box sx={{mb:3}}>
        <TextField
          label="Customer name if any"
          variant="outlined"
          sx={{mb:1}}
          fullWidth
        />
        <TextField
          label="Address of incident"
          variant="outlined"
          sx={{mb:1}}
          fullWidth
        />
        <Box>

        </Box>
        <Box sx={{display:"flex",mb:1}}>
          <DemoContainer sx={{mr:1}} components={['DatePicker']}>
            <DatePicker label="Date" />
          </DemoContainer>
          <DemoContainer sx={{mr:1}} components={['TimePicker']}>
            <TimePicker label="Time" />
          </DemoContainer>
          <TextField
            label="Weather"
            variant="outlined"
          />
        </Box>
        <TextField
          label="Others Factors"
          multiline
          rows={2}
          variant="outlined"
          sx={{mb:2}}
          fullWidth
        />
        <Table columns={columns1}
               rows={[...Array(6)].map(()=>({name:"name",worker:"",DOB:"",SS:"","Injury":"NO"}))}/>
        <Table columns={columns2}
               rows={[...Array(6)].map(()=>({name:"",status:"Unknown",worker:"",hospitalName:""}))}
        />
        <TextField
          label="Give a brief description of what happened including order of events"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
        />
      </Box>
      <SignaturesSection client={"Sign"}/>
    </div>
  );
};

export default IncidentReport;

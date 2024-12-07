"use client";
import { Paper } from '@mui/material';
import {Typography } from '@mui/material';
import SignaturesSection from '../../../../components/letters/signatureSection/signatureSection';


const DrugTestNotice = () => {
  return (
    <div>
    <Typography sx={{textAlign:"center",mb:2}} variant={"h3"}>
      Drug Test Consent
    </Typography>
    <Typography sx={{mb:1}}>Here after company refers to:0</Typography>
     <Paper sx={{p:2}}>
       <Typography sx={{mb:1}}>Random Testing</Typography>
       <Typography sx={{mb:1}}>
         Company will randomly test workers for compliance with its drug-free workplace policy. As used in this policy, “random testing” means a method of selection of workers for testing, performed by an outside third party. The selection will result in an equal probability that any worker from a group of workers will be tested. Furthermore, Company has no discretion to waive the selection of a worker selected by this random selection method.
       </Typography>
        <Typography sx={{mb:1}}>
          Scheduled Periodic Testing Company reserves the right to conduct periodic testing on a regularly scheduled basis for workers in designated departments, classifications, or workgroups. Refusal to Undergo Testing Workers who refuse to submit to a test are subject to immediate discharge.
        </Typography>
       <Typography sx={{mb:1}}>
         Positive Test If a worker tests positive on an initial screening test, the worker will be temporarily suspended while a confirmation test is being conducted. On receipt of the confirmation test, the worker will be subject to disciplinary action, up to and including discharge. Discipline selected by Company will depend on a variety of factors, including the prior work record of the worker, the length of prior employment, the prior accident and attendance record of the worker, the circumstances that led to the testing, and the proposals by the worker to address the problem
       </Typography>
       <SignaturesSection companyPhone={"0990930450"}
                          companyAddress={"adress"} />
     </Paper>
    </div>
  );
};

export default DrugTestNotice;

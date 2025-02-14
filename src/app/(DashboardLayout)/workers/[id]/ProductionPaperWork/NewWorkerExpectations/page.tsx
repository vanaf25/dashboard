"use client";
import { Paper, Typography } from '@mui/material';

const NewWorkerExpectations = () => {
  const values = [
    "On time and with a positive attitude.",
    "Presentable and with good hygiene.",
    "Always be dressed in safety clothes and safety shoes.",
    "Follow all safety rules.",
    "Honestly manage your time and efficiency.",
    "Complete all assigned tasks expeditiously.",
    "Know and follow the 3 golden rules.",
    "Not under the influence of any drugs.",
    "Bring your own meals and water.",
    "Follow directions without complaint or challenge."
  ];
  return (
    <div>
    <Typography variant={"h4"}>Expectations</Typography>
      <Typography>These are the expectations
        we have for all personnel
        regardless of position or title</Typography>
        {values.map((el,index)=><Paper
          sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
      <Typography sx={{fontSize:25}}>{index+1}. {el}</Typography>
        </Paper>)}
    </div>
  );
};

export default NewWorkerExpectations;

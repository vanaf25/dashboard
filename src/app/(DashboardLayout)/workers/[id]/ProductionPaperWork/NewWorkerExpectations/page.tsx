"use client";
import {  Typography } from '@mui/material';
import BlankCard from "@/app/components/shared/BlankCard";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";

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
  const expectationP=`These are the expectations
        we have for all personnel
        regardless of position or title`
  return (
    <WorkerLayout withOutHeader exportElems={[
      {type:ElementType.P,content:expectationP},
        ...values.map(value=>({type:ElementType.SECTION,content:value}))
    ]}  pdfTitle={"New Worker Expectations"} pdfName={"New Worker Expectations"} >
    <Typography variant={"h4"} sx={{mb:2}}>Expectations</Typography>
      <Typography sx={{mb:1}}>{expectationP}</Typography>
        {values.map((el,index)=><BlankCard
          sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
      <Typography sx={{fontSize:25}}>{index+1}. {el}</Typography>
        </BlankCard>)}
    </WorkerLayout>
  );
};

export default NewWorkerExpectations;

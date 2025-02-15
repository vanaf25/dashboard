"use client"
import {Typography} from '@mui/material';
import BlankCard from "@/app/components/shared/BlankCard";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";

const Ethics = () => {
  const values = [
    "Honesty",
    "Entirety",
    "Efficiency",
    "Safety",
    "Curtesy",
    "Farness",
    "Kindness",
    "Nobility",
    "Quality",
    "Transparency"
  ];
  const p=`      We bind our selves to honesty, entirety and respect making every effort to provide your customer with the highest level service, products and knowledge`
  const pdfTitle="Mission statement and code of ethics"
  return (
    <WorkerLayout withOutHeader pdfTitle={pdfTitle} exportElems={[
      {type:ElementType.P,content:p},
        ...values.map(el=>({type:ElementType.SECTION,title:el}))
    ]} pdfName={"Ethics"}>
    <Typography variant={"h4"} sx={{mb:1}}>{pdfTitle}</Typography>
    <Typography sx={{mb:1}}>
      {p}
    </Typography>
      {values.map(el=><BlankCard sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
       <Typography sx={{fontSize:25}}>
         {el}
       </Typography>
      </BlankCard>)}
    </WorkerLayout>
  );
};
export default Ethics;

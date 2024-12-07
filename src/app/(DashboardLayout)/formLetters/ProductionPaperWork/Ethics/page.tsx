"use client"
import { Paper, Typography } from '@mui/material';

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
  return (
    <div>
    <Typography variant={"h4"} sx={{mb:1}}>Mission statement and code of ethics</Typography>
    <Typography sx={{mb:1}}>
      We bind our selves to honesty, entirety and respect making every effort to provide your customer with the highest level service, products and knowledge
    </Typography>
      {values.map(el=><Paper sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
       <Typography sx={{fontSize:25}}>
         {el}
       </Typography>
      </Paper>)}
    </div>
  );
};
export default Ethics;

"use client";
import { Paper, Typography } from '@mui/material';

const SiteRules = () => {
  const values =[
    "Safety gear is required while on the production site.",
    "Tool belts are required while working.",
    "Tools are to be neat and organized in all production vehicles as well as on the production site.",
    "Before demolition commences; locations are to be tarped and blocked off with safety tape.",
    "Trash is to be picked up immediately after removal.",
    "Loud radios are prohibited.",
    "Swearing or complaining about the customer or other workers is prohibited.",
    "First team member on site is required to take pictures of all 4 sides of the production.",
    "Last team member to leave site is to take pictures of all 4 sides of the production.",
    "No smoking"]
  return (
    <div>
      <Typography sx={{mb:2,textAlign:"center"}} variant={"h4"}>Site Rules</Typography>
      <Typography sx={{mb:2,textAlign:"center"}}>All rules for sites are to be fallowed at all times</Typography>
      {values.map((el,index)=><Paper
        sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
        <Typography sx={{fontSize:25}}>{index+1}. {el}</Typography>
      </Paper>)}
    </div>
  );
};

export default SiteRules;

"use client";
import Box from '@mui/material/Box';
import Links from "@/app/components/global/Links/Links";

const Page = () => {
  const letters=["accounting","legal","officeManager","productionPaperWork",
    "salesManager","safetyPaperWork","subContractPaperWork","system99Calculator"
    ,]
  return (
    <Box sx={{maxWidth:1000,margin:"10px auto"}}>
      <Links to={"formLetters"} links={letters}/>
    </Box>
  );
};

export default Page;
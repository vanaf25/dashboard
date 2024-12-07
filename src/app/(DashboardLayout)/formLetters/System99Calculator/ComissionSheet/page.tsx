"use client";
import  {useState} from "react";
import Box from "@mui/material/Box";
import Products from "../../../../components/letters/CommissionSheet/Products";
import CalculatingItems from "../../../../components/letters/CommissionSheet/CalculatingItems";
import TotalData from "../../../../components/letters/TotalData/TotalData";
import {Typography} from "@mui/material";
import Questions from "../../../../components/letters/CommissionSheet/Questions";

const Page = () => {
  const [total,setTotal]=useState(0)
  const [totalFromUpCharges,setTotalFromUpCharges]=useState(0);
  return (
    <div>
      <Box sx={{display:"flex",mb:2}}>
        <Box mr={2}>
          <TotalData header={"total from up charges"} total={totalFromUpCharges}/>
        </Box>
        <TotalData header={"total Commission"} total={total+totalFromUpCharges}/>
      </Box>
      <Products setTotalFromUpCharges={setTotalFromUpCharges}/>
      <CalculatingItems setTotal={setTotal} />
      <TotalData header={"total"} total={total}/>
      <Typography mt={2} mb={3}>
        Hello everyone you must turn in pictures with your commission sheet as well as a video of what we are doing on the home.
        This may seem like extra work but it is important to do so that the customer can not blame you for selling them on
        something they &quot;did not ask for&quot; or want. All customers can forget what they asked for, cover yourself with pic&apos;s and videos.
        If you want to make a sale you should be spending a minimum of 1 1/2 to 2 hours with your customer; if it&apos;s less time than that
        you won&apos;t make the sale as the customer will think you&apos;re not interested in their project and just looking for a quick commission
        not trying to help them fix their home.
      </Typography>
      <Questions/>
    </div>
  );
};

export default Page;

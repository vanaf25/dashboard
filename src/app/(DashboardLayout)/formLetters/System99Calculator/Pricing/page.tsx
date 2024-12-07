"use client";
import {Typography} from "@mui/material";
import ProductTable from "./ProductTable";
import SectionPatio from "./SectionPatio/SectionPatio";
import ItemsSection from "./ItemsSection/ItemsSection";
import TotalSiding from "./TotalSiding/TotalSiding";
const Page = () => {
  return (
    <div>
      <Typography variant={"h4"}>Pricing</Typography>
      <ProductTable/>
      <SectionPatio/>
      <ItemsSection/>
      <TotalSiding/>
    </div>
  );
};

export default Page;

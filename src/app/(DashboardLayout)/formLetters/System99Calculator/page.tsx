"use client";
import Links from "../../../components/global/Links/Links";

const Page = () => {
  const links=["Mesurments","ComissionSheet","Material","Pricing","itemsTable","siding"]
  return (
    <div>
    <Links links={links} to={"formLetters/Page"}/>
    </div>
  );
};

export default Page;

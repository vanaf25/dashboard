"use client";
import Links from "../../../components/global/Links/Links";

const Page = () => {
  const links=["Messurments","ComissionSheet","Material","Pricing",/*"itemsTable","siding"*/]
  return (
    <div>
    <Links links={links} to={"formLetters/System99Calculator"}/>
    </div>
  );
};

export default Page;

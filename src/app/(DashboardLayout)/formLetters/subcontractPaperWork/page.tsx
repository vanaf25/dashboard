"use client";
import Links from '../../../components/global/Links/Links';

const Page = () => {
  const links=["SubContract","JobCost","PointOfContact","Termination"]
  return (
    <div>
    <Links links={links} to={"formLetters/subContractPaperWork"}/>
    </div>
  );
};

export default Page;

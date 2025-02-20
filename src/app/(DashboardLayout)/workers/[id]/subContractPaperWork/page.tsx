"use client";

import Links from "@/app/components/global/Links/Links";

const Page = () => {
  const links=["SubContract","PointOfContact","Termination"]
  return (
    <div>
    <Links links={links} to={"formLetters/subContractPaperWork"}/>
    </div>
  );
};

export default Page;

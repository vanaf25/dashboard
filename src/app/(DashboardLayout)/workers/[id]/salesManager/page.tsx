"use client";

import Links from "@/app/components/global/Links/Links";

const Page = () => {
  const componentsArray = [
    'BackChargeNotice',
    'CommissionStructure',
    'MissedLead',
    'MissedSalesGoal',
    'NewClientQuestions',
    "Location ID Pics"
  ];
  return (
    <div>
      <Links to={'formLetters/salesManager'} links={componentsArray} />
    </div>
  );
};

export default Page;

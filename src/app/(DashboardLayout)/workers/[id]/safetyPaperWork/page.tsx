"use client";

import Links from "@/app/components/global/Links/Links";

const Page = () => {
  const names= ["IncidentReport","SafetyInspiration","SafetyViolation"]
  return (
    <div>
      <Links links={names} to={"formLetters/safetyPaperWork"}/>
    </div>
  );
};

export default Page;

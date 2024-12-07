"use client";
import Links from '../../../components/global/Links/Links';

const Page = () => {
  const names= ["incidentReport","safetyInspiration","safetyViolation"]
  return (
    <div>
      <Links links={names} to={"formLetters/safetyPaperWork"}/>
    </div>
  );
};

export default Page;

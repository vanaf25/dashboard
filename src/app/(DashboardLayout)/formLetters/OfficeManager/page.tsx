"use client";
import Links from '../../../components/global/Links/Links';
const Page = () => {
  const additionalWorkComponentsArray = [
    'AdditionalWorkOrder',
    'CompletionCert',
    'HighTrafficArea',
    'LearnWaver',
    'PunchOutOf15',
    'PunchOutOf60',
    'ThankYouLetter',
    'Waranty'
  ];
  return (
    <div>
      <Links links={additionalWorkComponentsArray} to={"formLetters/OfficeManager"}/>
    </div>
  );
};

export default Page;

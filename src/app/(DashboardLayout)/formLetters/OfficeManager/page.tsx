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
    'Warranty'
  ];
  return (
    <div>
      <Links links={additionalWorkComponentsArray} to={"formLetters/officeManager"}/>
    </div>
  );
};

export default Page;

import Links from '../../../components/global/Links/Links';
const Page = () => {
  const legalComponentsArray = [
    'BreachOfContract',
    'BreachOfNonDisclosure',
    'ClaimOfLien',
    'DrugTestConsent',
    'DrugTestNotice',
    'NonDisclosureAgreement',
    'ReleaseAgreement'
  ];
  return (
    <div>
     <Links links={legalComponentsArray} to={'formLetters/legal'}/>
    </div>
  );
};

export default Page;

import Links from '../../../components/global/Links/Links';

const Page = () => {
  const additionalComponentsArray = [
    'AdvanceApproval',
    'AdvanceFormRequest',
    'Agreement',
    'Application',
    'Ethics',
    'Expectations',
    'GoldenRules',
    'HarshTermination',
    'MutualTermination',
    'NewWorkerExpectations',
    'Notice1',
    'Notice2',
    'Notice3',
    'SiteRules',
    'Termination'
  ];
  return (
    <div>
      <Links links={additionalComponentsArray} to={'formLetters/productionPaperWork'}/>
    </div>
  );
};

export default Page;

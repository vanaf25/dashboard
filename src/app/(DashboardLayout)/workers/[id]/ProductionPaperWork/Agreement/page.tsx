"use client";
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import {ElementType} from "@/app/types/exportPdfTypes";
import BlankCard from "@/app/components/shared/BlankCard";

const agreementSections2 = [
  {
    title: '',
    content: `If you would like to receive and/or have the company withhold taxes from your payments, you may do so in one of two ways:`,
  },
  {
    title: '1. Participate in combined insurance pooling with other workers.',
    content: `Workers can buy workman compensation, health insurance, life insurance, and paid leave insurance with other workers inside and outside the company through private insurance pooling. If the worker would like paid days off, sick leave, overtime, or any other paid leave, they may pay into a pool of paid time off that they may use at their discretion, as long as they give the company 7 days notice of required time off of the assigned site.`,
  },
  {
    title: '',
    content: `For withholding of employment taxes, the company will aid the worker in setting up an account with the IRS, allowing the IRS to regularly deduct payments from the worker's bank account throughout the year.`,
  },
  {
    title: '2. Become an employee of the company.',
    content: `If you do not want to be a labor agreement worker and would prefer to be an employee, you may do so at any time. However, you must fill out an application and be accepted as an employee of the company, even if you have been working with the company on a labor agreement.`,
  },
  {
    title: '',
    content: `Note: Persons who work on labor agreements are compensated significantly more than employees because the company is not paying for the benefits that employees receive.`,
  },
  {
    title: 'Worker\'s Statement of Liability',
    content: `I understand and accept that I am fully liable for my personal safety, as well as the safety of others, including but not limited to other workers, customers, owners, and inspectors. I understand that I will be held 100% liable for my actions and any injuries caused by my actions, whether to myself or another person, and that I am NOT COVERED by any insurance provided by the company.`,
  },
  {
    title: '',
    content: `I also understand that I am fully responsible for any property damages caused by my actions. I agree that I am responsible for my own taxes, safety, tools, transportation, and insurance. I will honestly record my working hours and will not include time spent on personal matters or travel to the project site.`,
  },
  {
    title: '',
    content: `I agree to work faithfully between the hours of 9 AM to 6 PM, recording my time only when on-site, and stopping when I leave the project, regardless of the reason.`,
  },
  {
    title: 'Payment Terms',
    content: `By signing this labor agreement, you agree that you understand you are being paid as a private individual laborer using a 1099 form and fully understand the terms, conditions, requirements, and the worker statement described above.`,
  },
];
const Agreement = () => {
  const agreementSections = [
    {
      title: "1. Production workers",
      content: `1. Production workers: Agreement hourly rate will vary and be determined by skill, performance and years of experience; pay can range from $9-28 per hour and will be accumulated and paid out on a weekly basis. If worker requires project based compensation then an amount will be calculated using an hourly rate multiplied by the amount of time estimated to complete the project assigned or requested. This will be a firm and hard cost estimate and will be paid out upon completion of the assigned or requested work. New workers are started at an introductory pay rate. After 6 months a compensation increase will be considered; additionally, another increase will be offered after 18 months of continuous work with the company. Proceeding increases will be negotiated.`
    },
    {
      title: "2. Commission-based workers",
      content: `2. Commission-based workers: compensation starts at a 7% commission for the first month. If the sales person shows good work ethics and sales, commission rate can be increased up to 8.5% for a 6 month period; after 6 months, if performance is at good standing sales person can be considered eligible for a raise of 9% to 12% depending on sales numbers and quota performance. All commission-based persons are subject to sales goals, sales achievements, sales matrixes and fixed expense charges. All commission based workers are expected to use their own mode of transportation to travel to and from assigned or obtained sales leads`
    },
    {
      title: "3. All other workers",
      content: `Hourly rate will vary and be determined by skill, performance and years of experience; pay can range from $10-25 per hour and will be accumulated and paid out on a weekly basis. New workers are started at an introductory pay rate for the first 6 months after 6 months a compensation increase will be considered; additionally, another increase will be offered after 18 months of continuous work with the company. Proceeding increases will be negotiated.`
    },
    {
      title: "4. TRAVEL TIME",
      content: `"4. TRAVEL TIME: It is assumed that all workers have to travel to work regardless of the location of their home; as a result the company does not pay Worker's for the time it takes for them to drive to and from any production site or work location. Sites change from week to week and workers are required to start hourly rate upon arrival to the production site and stop hourly rate upon leaving the production site.  
**Travel time can be given as a bonus (upon companies’ discretion).  
**Time tampering is considered Theft and worker can be prosecuted."
`
    },
    {
      title: "5. Pay period",
      content: `"5. Pay period: all persons will be paid one week in the rears; for example.
 [If a worker or team of workers  start working on a Monday the 15th and work through Friday the 19th, the company will calculate the time and process payments on the Monday the 22nd. the Worker would receive payments for time worked between the dates of 15th through the 19th on Friday the 26th.]
If a worker begins at anytime within the pay period time frame, they will receive pay during the next pay cycle. All workers are required to keep an exact log of the time they have spent working on the project they have been assigned or have requested.`
    },
    {
      title: "6. Driver's License Requirement",
      content: `6. A valid Driver's License is required for any and all workers who are requesting or require use of the company’s equipment or vehicles. Production workers may be required to transport tools to a production site or return tools to the company’s storage location as a result the worker transporting the equipment or vehicle is required to have a valid Driver's License. All persons who use company vehicles or transport equipment for the company will be held liable for any and all traffic tickets, violations or damage to the company’s property. All workers who are transporting equipment or using company vehicles must also be insured and add the company as additionally insured on their auto insurance prior to using company vehicles or equipment. Company will not be held liable for tickets, violations or damages caused by the worker.`
    },
    {
      title: "7. Inability or refusal to work",
      content: `"7. Inability or refusal to work on assigned project: 
If a worker fails to show up at an assigned project for any reason, 1 point will be given. 
***(failing to show up at assigned project 2 days in a row, will require a Doctor's note. Doctors' notes will excuse one point only twice in a 6 month period. If the worker does not bring in a note a second point will be given.) 
If there are 4 days in a row where the worker fails to show up at the assigned project the company will have the option to terminate the labor agreement.
 
Point explanation. 
1 point will be given for a ""no show""  ""untimely attendance"" ""sloppy workmanship or clean up"" ;
After 3 points, worker will be given a written notice of potential termination; 
After 5 points, worker is officially considered in breach of agreement and company site will be reassigned. 
(Maxim of 5 points every six months [no roll over]).
**Theft of time- (Will be Defined as: Intentionally working slow to obtain more hours, or dishonestly recording time ) Any worker participating in theft of time is subject to criminal prosecution and must repay the company for any time the worker dishonestly reported. Company retains the right to prosecute the worker for time theft regardless of if the worker repays the company or not for time dishonestly reported"
`
    },
    {
      title: "8. Agreements and requirements",
      content: `Agreements and requirements. Unless authorized by the company no worker is permitted to work more than 40 working hours with in one work week this includes working 5 consecutive days with 10 hours per day. Any time logged past 40 working hours will not be paid out to the worker. Workers agree to arrive to assigned project location within a 1 hour window of the assigned project. All workers are expected to drink a minimum of 8 oz of water each hour to keep hydrated. Workers are not allowed to charge the company for time spent leaving the project or work location to obtain NON project related parts (i.e., personal items, meals, personal tools and equipment) Workers are not allowed to charge the company for breaks or lunches.  Workers are not permitted to work on companies list of offered work or services including and not limited to, work on existing or previous customers, neighbor's of customers, friends of acquaintances of customers. Except for preventing injury; Workers are not allowed to touch an other persons body or invade the personal space of other workers, clients or other personnel.`
    },
    {
      title: "10. Expectations",
      content: `Expectations: Be Knowledgeable, follow all safety rules, complete assigned work to companies expectations , arrive each day within the time window, keep company equipment clean and presentable, wear company personal protective equipment including hard hat, safety vest and other safety gear, make sure that the project site is cleaned up at the end of each day, bring your own water and lunch to the work site at all times.`
    },
    /*{
      title: "Worker's statement of liability",
      content: `I understand and accept that I am held fully liable for my own personal safety as well as the safety of the other persons around me...`
    },*/
  ];
  const requirementP="By signing this agreement, you fully understand that you are not an employee of the company. As a result, the company will not be paying you for any of the following items:"
  const requirements=['Your personal hand tools (i.e. tool belt, knife, hammer, pry bar, etc.)',
    'Workman compensation insurance, health insurance, paid leave of any kind',
    'Overtime, life insurance, vacation days, paid holidays, paid sick days, etc.',
    'Any other federal, state, or local labor requirements or benefits',
    'Personal income taxes, which may be required by federal or local government at the end of the year',]

  return (
    <WorkerLayout pdfTitle={"Labor Agreement"} pdfName={"Labor Agreement"} exportElems={
      [
          ...agreementSections.map(sec=>({type:ElementType.SECTION,...sec})),
        {type:ElementType.H3,content:"Important read this"},
        {type:ElementType.P,content:requirementP},
        ...requirements.map(req=>({type:ElementType.SECTION,content:req})),
        ...agreementSections2.map(el=>({type:ElementType.SECTION,...el}))
      ]
    } withSignature>
      <Typography variant={"h5"} sx={{mb:1}}>
        Labor Agreement
      </Typography>
      {agreementSections.map((section, index) => (
        <Box key={index} sx={{mb:2}} >
          <Typography variant={'h6'} sx={{mb:1}} >{section.title}</Typography>
          <Typography>{section.content}</Typography>
        </Box>
      ))}
      <Typography variant={"h4"} sx={{mb:2}}>Important read this: </Typography>
      <Typography sx={{mb:2}}>{requirementP}</Typography>
      {requirements.map(req=><BlankCard key={req} sx={{mb:1,p:2}}><>{req}</></BlankCard>)}
      {agreementSections2.map((section, index) => (
        <Box key={index} mb={2}>
          {section.title && (
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
          )}
          {section.content && (
            <Typography variant="body1" paragraph>
              {section.content}
            </Typography>
          )}
        </Box>
      ))}
      {/*<CustomerDetails withOutTitle customer={{"Workers name":0,
        "Worker address":0,
        "Worker Phone number":0,
        "Worker Email":0,
      }}/>
      <Typography sx={{mb:1}}>
        Workers name:
      </Typography>*/}
      <SignaturesSection client={"Sign"}/>
     {/* <Box sx={{display:"flex",mb:2,alignItems:"center"}}>
        <Typography sx={{mr:0.5}}>Company Rep Name:</Typography>
        <Box>
          <Typography><UnderlinedText>0</UnderlinedText></Typography>
          <Typography><UnderlinedText>0</UnderlinedText></Typography>
          <Typography><UnderlinedText>0</UnderlinedText></Typography>
        </Box>
      </Box>
      <Typography sx={{mb:1}}>
        Company Representative:
      </Typography>*/}
      <SignaturesSection client={"Sign"}/>
    </WorkerLayout>
  );
};

export default Agreement;

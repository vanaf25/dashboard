"use client";
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import CustomerDetails from '../../../../components/global/CustomerDetails/CustomerDetails';
import SignaturesSection from '../../../../components/letters/signatureSection/signatureSection';
import UnderlinedText from '../../../../components/global/UnderlinedText/UnderlinedText';
const agreementSections2 = [
  {
    title: 'Labor Agreement',
    content: `By signing this agreement, you fully understand that you are not an employee of the company. As a result, the company will not be paying you for any of the following items:`,
  },
  {
    title: '',
    list: [
      'Your personal hand tools (i.e. tool belt, knife, hammer, pry bar, etc.)',
      'Workman compensation insurance, health insurance, paid leave of any kind',
      'Overtime, life insurance, vacation days, paid holidays, paid sick days, etc.',
      'Any other federal, state, or local labor requirements or benefits',
      'Personal income taxes, which may be required by federal or local government at the end of the year',
    ],
  },
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
      content: `Agreement hourly rate will vary and be determined by skill, performance, and years of experience; pay can range from $9-28 per hour and will be accumulated and paid out on a weekly basis. If a worker requires project-based compensation, then an amount will be calculated using an hourly rate multiplied by the time estimated to complete the project assigned or requested...`
    },
    {
      title: "2. Commission-based workers",
      content: `Compensation starts at a 7% commission for the first month. If the salesperson shows good work ethics and sales, the commission rate can be increased up to 8.5% for a 6-month period...`
    },
    {
      title: "3. All other workers",
      content: `Hourly rate will vary and be determined by skill, performance, and years of experience; pay can range from $10-25 per hour and will be accumulated and paid out on a weekly basis...`
    },
    {
      title: "4. TRAVEL TIME",
      content: `It is assumed that all workers have to travel to work regardless of the location of their home...`
    },
    {
      title: "5. Pay period",
      content: `All persons will be paid one week in arrears; for example, if a worker or team of workers starts working on a Monday the 15th...`
    },
    {
      title: "6. Driver's License Requirement",
      content: `A valid Driver's License is required for any and all workers who are requesting or require use of the company’s equipment or vehicles...`
    },
    {
      title: "7. Inability or refusal to work",
      content: `If a worker fails to show up at an assigned project for any reason, 1 point will be given...`
    },
    {
      title: "8. Agreements and requirements",
      content: `Unless authorized by the company, no worker is permitted to work more than 40 hours within one work week...`
    },
    {
      title: "10. Expectations",
      content: `Be Knowledgeable, follow all safety rules, complete assigned work to the company's expectations...`
    },
    {
      title: "Worker's statement of liability",
      content: `I understand and accept that I am held fully liable for my own personal safety as well as the safety of the other persons around me...`
    },
  ];
  return (
    <div>
      <Typography variant={"h5"} sx={{mb:1}}>
        Labor Agreement
      </Typography>
      <Grid container>
        <Grid xs={6}>
          <CustomerDetails title={"Worker info"} customer={{name:"ele",
            address:"Adress",phone:"0990930405",email:"vanaf@gmail.com"}} />
        </Grid>
        <Grid xs={6}>
          <CustomerDetails title={"Company info"} customer={{name:"ele",
            address:"Adress",phone:"0990930405",email:"vanaf@gmail.com"}} />
        </Grid>
      </Grid>
      {agreementSections.map((section, index) => (
        <Box key={index} sx={{mb:2}} >
          <Typography variant={'h6'} sx={{mb:1}} >{section.title}</Typography>
          <Typography>{section.content}</Typography>
        </Box>
      ))}
      <Typography variant={"h5"}>Important read this: </Typography>
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
          {section.list && (
            section.list.map((item, i) => (
              <Typography variant="body2" key={i} paragraph>
                - {item}
              </Typography>
            ))
          )}
        </Box>
      ))}
      <CustomerDetails withOutTitle customer={{"Workers name":0,
        "Worker address":0,
        "Worker Phone number":0,
        "Worker Email":0,
      }}/>
      <Typography sx={{mb:1}}>
        Workers name:
      </Typography>
      <SignaturesSection client={"Sign"}/>
      <Box sx={{display:"flex",mb:2,alignItems:"center"}}>
        <Typography sx={{mr:0.5}}>Company Rep Name:</Typography>
        <Box>
          <Typography><UnderlinedText>0</UnderlinedText></Typography>
          <Typography><UnderlinedText>0</UnderlinedText></Typography>
          <Typography><UnderlinedText>0</UnderlinedText></Typography>
        </Box>
      </Box>
      <Typography sx={{mb:1}}>
        Company Representative:
      </Typography>
      <SignaturesSection client={"Sign"}/>
    </div>
  );
};

export default Agreement;

"use client";
import { Typography } from '@mui/material';
import SignaturesSection from '../../../../components/letters/signatureSection/signatureSection';
import Box from '@mui/material/Box';
import UnderlinedText from '../../../../components/global/UnderlinedText/UnderlinedText';
const applicantStatementParagraphs = [
  "I certify that all information I have provided in order to apply for and secure work with this employer is true, complete and correct.",
  "I expressly authorize, without reservation, the employer, its representatives, employees or agents to contact and obtain information from all references (personal and professional), employers, public agencies, licensing authorities and educational institutions and to otherwise verify the accuracy of all information provided by me in this application, resume or job interview. I hereby waive any and all rights and claims I may have regarding the employer, its agents, employees or representatives, for seeking, gathering and using truthful and non-defamatory information in a lawful manner, in the employment process and all other persons, corporations or organizations for furnishing such information about me.",
  "I understand that this employer does not unlawfully discriminate in employment and no question on this application is used for the purpose of limiting or eliminating any applicant from consideration for employment on any basis prohibited by applicable local, state or federal law.",
  "I understand that this application remains current for 90 days. At the conclusion of that time, if I have not heard from the employer and still wish to be considered for employment...",
  "If I am hired, I understand that I am free to resign at any time, with or without cause and with or without prior notice, and the employer reserves the same right to terminate my employment at any time...",
  "I also understand that if I am hired, I will be required to provide proof of identity and legal authorization to work in the United States...",
  "I certify that I have read, fully understand, and accept all terms of the foregoing Applicant Statement.",
  "I, your name here, hereby give my permission to release information concerning myself to Mills Construction, Inc., and release the reference giver from all liability associated with this information."
];
const Application = () => {
  const formFields = [
    "Company",
    "Address",
    "City State Zip",
    "Phone",
    "Position",
    "Duties",
    "Salary",
    "Reason for leaving"
  ];

  return (
    <div>
      <Typography variant={"h4"} >Application</Typography>
      <Typography sx={{mb:2}}>
        Equal access to program,services and employment is available for persons. Those applicants requing
        reasonable accommodation to the application and/or interview process should
        notify a represenative of the Company
      </Typography>
      <SignaturesSection client={"Position applied for"}/>
      <Box>
        <Typography sx={{mb:2}}>
          Name <UnderlinedText>Ivan</UnderlinedText>
          Social Security#
          <UnderlinedText padding={25}>sec</UnderlinedText>
          -
          <UnderlinedText padding={25}>sec</UnderlinedText>
          -
          <UnderlinedText padding={25}>sec</UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
          Name <UnderlinedText> Ivan </UnderlinedText>
          Social Security#
          <UnderlinedText padding={25}> sec </UnderlinedText>
          -
          <UnderlinedText padding={25}> sec </UnderlinedText>
          -
          <UnderlinedText padding={25}> sec </UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
          Address <UnderlinedText padding={50}> Ivan </UnderlinedText>
          City <UnderlinedText padding={50}>  Ivan </UnderlinedText>
          Sate <UnderlinedText padding={50}> Ivan </UnderlinedText>
          zipCode <UnderlinedText padding={50}> Ivan </UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
          Referal Source <UnderlinedText padding={100}> Ivan </UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
          If you are under 18, and its required, can you finish your work permit?
          <UnderlinedText padding={25}> yes </UnderlinedText>
          <UnderlinedText padding={25}> no </UnderlinedText>
          <UnderlinedText padding={25}> N/A </UnderlinedText>

        </Typography>
        <Typography sx={{mb:1}}>If no, please explain</Typography>
        <Typography sx={{mb:1}}>
         Have you ever been employed before?
          <UnderlinedText padding={25}> yes </UnderlinedText>
          <UnderlinedText padding={25}> no </UnderlinedText>
          if yes give dates and supervisors <UnderlinedText>Something</UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
          Are you legally eligible for employment in this country ?
          <UnderlinedText> Yes </UnderlinedText>
          <UnderlinedText> No </UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
         Date available for work ?
          <UnderlinedText padding={50}>    </UnderlinedText>
        </Typography>
        <Typography sx={{mb:1}}>
          What is your desired salary range ?
          <UnderlinedText padding={50}>    </UnderlinedText>
        </Typography>
      </Box>
      <Box sx={{mb:2}}>
        <Typography variant={"h5"}>Employment history</Typography>
        {formFields.map(el=><Typography key={el} sx={{mb:1}}>{el}:
          <UnderlinedText>      </UnderlinedText></Typography>)}
      </Box>
      <Typography variant={"h5"} >EDUCATIONAL BACKGROUND</Typography>
      <Typography sx={{mb:1}}>
        Starting with your most recent school attended,
        provide the following information:</Typography>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography>School (include City/State) </Typography>
        <Typography> Years Completed </Typography>
        <Typography>Completed</Typography>
        <Typography>GPA/Class Rank</Typography>
        <Typography>Major/Minor</Typography>
      </Box>
      {applicantStatementParagraphs.map((paragraph, index) => (
        <Typography key={index} sx={{mb:1}} variant="body1">
          {paragraph}
        </Typography>
      ))}
      <SignaturesSection/>
    </div>
  );
};

export default Application;

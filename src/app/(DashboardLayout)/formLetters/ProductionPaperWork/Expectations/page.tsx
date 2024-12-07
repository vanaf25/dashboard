"use client"
import { Typography } from '@mui/material';

const Expectations = () => {
  const jobExpectations = [
    "Timeliness (from your own schedule to the processing of documents timeliness is required; it is essential to our business and essential to our success.)",
    "Self-motivated (at times you will be required to work alone and start the day without supervision; you’ll be expected to know what needs to be done and to make a task list for each day of the week.)",
    "Knowledgeable (knowledge of how our industry works and the paperwork behind it is essential to the success of the business.)",
    "Inventive (Our line of work, things don’t always go right. We often run into customers who have unrealistic expectations. Your ability to navigate customer relations will require you to find new solutions to old problems.)",
    "Professional (We are professionals and always striving to improve. Improving how the business runs and the customer’s overall satisfaction is essential to our success and will be rewarded with increased pay and commissions.)",
    "Organized (Your organizational skills are needed for smooth business operations and to make your time spent working with our company productive and stress-free.)",

    "Mandatory daily tasks:",
    "Accurately record the time you arrive at the job site.",
    "Take pictures of the job site showing work progress.",
    "Set up your work area so that it does not injure, block, inconvenience, or interrupt the customer, visitors, or other workers.",
    "Put down tarps in all locations needed, under saw tables, along demolition areas, and where trash will be stored.",
    "Wear safety gear (PPE) on all job sites.",
    "Tape off all work locations with safety tape.",
    "Sweep and clean the job site before leaving.",
    "Clean up each day. Never leave uncovered trash on site overnight."
  ];
  return (
    <div>
      <Typography variant={"h4"} sx={{mb:1}}>Standard Expectations</Typography>
      <ul>
        {jobExpectations.map(el=><li key={Math.random()}>
         <Typography>{el}</Typography>
        </li>
        )}
      </ul>
    </div>
  );
};

export default Expectations;

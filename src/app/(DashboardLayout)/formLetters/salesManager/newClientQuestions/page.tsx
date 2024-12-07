"use client";
import Paragraphs from '../../../../components/letters/parahraphs/Paragraphs';
import { Typography } from '@mui/material';
import RenovationRequestForm from "@/app/components/letters/RenovationRequestForm/RenovationRequestForm";

const NewClientQuestions = () => {
  const customerProcessSteps = [
    "All customers are to be greeted upon first arriving at the home.",
    "Ask to sit down at a table with the customer so you can ask them the interview questions.",
    "Warm up to the customer using relevant topics before you ask them the interview questions.",
    "Go outside with the customer and capture all the customer’s work in pictures first.",
    "Inform the customer that you will need 15-20 minutes to measure and then 10-15 minutes to go over the project cost and show them pictures of our work.",
    "Measure all products we offer to our customer even if they look new.",
    "Take a minimum of 4 big pictures of the home showing the front, back, and both sides.",
    "Input all measurements into the computer as you measure.",
    "Sit in your car and verify that all information on the quote, measure, and commission sheet are correct.",
    "Return to the customer and explain that you will show them pictures of our work.",
    "After the PowerPoint presentation, go over the installation instruction sheet with the customer.",
    "Make sure that all the products the customer wants are covered in the installation instructions.",
    "ASK the customer, 'Other than the price or payment, is there any reason why we can't get your project started today?'",
    "Show the customer the job costs and discount as needed to win the business.",
    "Whether the client decides to buy or not, explain to them that you still need to make a video of the work outside and finish filling out the material list.",
    "Go outside and make an install video, then come back to fill out the material list and ask for the business again. If the client still refuses, thank them.",
    "Send the customer their quote and contract via email and DocuSign.com."
  ];
  return (
    <div>
      <Typography variant={"h4"}>New Client Questions</Typography>
      <RenovationRequestForm/>
      <Paragraphs sections={customerProcessSteps}/>
    </div>
  );
};
export default NewClientQuestions;

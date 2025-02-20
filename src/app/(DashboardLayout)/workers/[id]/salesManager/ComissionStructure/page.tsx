"use client";
import {Typography} from '@mui/material';
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";

const CommissionStructure = () => {
 const sections = [
    "The following is a brief description of how our commission structure works.",
    "If you are a new salesperson you will start out near the 7% mark for the first few weeks. The reason for this is because people who are just starting, often have a harder time getting going and run through many leads before they find success. Because of the cost to the company in training new sales persons the commission of the new person is temporarily lower. After the first few weeks new sales persons will have a meeting to discuss their progress if any and depending on the number and amount of sales the new person will be set up with new goals and start in the new commission structure. If during the first few weeks management decides that the new person is not a good fit for the position management will have the option to stop assigning leads to the new person and the new person will have to generate their own leads.",
    "Standard commission starts at 8.5% and tops out at 10%. Raises in this structure are granted once per quarter and based upon the salesperson’s ability to reach and maintain sales goals. Once each quarter, goals will be evaluated and new raises assigned to high achievers. Persons who do not reach sales goals or are below the goal will either stay in their current commission rate or in some situations drop down to a lower commission. Once a person reaches the top of the standard commission rate after one year, they will be eligible to lock in their rate for a year and proceed to the top-tier commission structure.",
    "Gold commission structure starts at 10% and tops out at 14%. Awards and bonuses are available at this level. Raises in this structure are granted once per 6 months and based upon the salesperson’s ability to reach and maintain sales goals. Each half year, goals will be evaluated and new raises assigned to high achievers. Persons who do not reach sales goals or are below the goal will either stay in their current commission rate or in some situations drop down to a lower commission. Awards will be given to persons who have achieved exceptional goals and/or other challenges assigned to the gold level of sales, including trips, paid vacation, awards, work vehicles, and additional perks and cash.",
    "Partner Circle: This is a non-commission position. Only 4 partners will be allowed to join in any one branch location. If you have shown exceptional skill in sales, management, or production management, you may achieve the option to become a partner of the company. If accepted, you will receive a cut of the profit of the location you have been assigned to. This position comes with significant responsibility, including managing the company and other persons who are working. Your success will be our success and ours yours. Being a partner is often the highest-paid position in the company; however, it also demands the highest expectations. Our company is one of the only companies to offer this, but if selected, the sky is the limit.",
    "We love self-generated leads. If you want to move up fast and make money, generate your own leads. We are always looking for work and love more business. If you bring the business in, you will automatically receive $50.00 just for the lead and a bonus of $200 for any lead sold over $5,000.00, plus your commission or 12%, whichever is higher. If the project is over $15,000.00, the company will automatically raise the bonus to $600.00. Self-generated leads with higher contract amounts will receive a bonus of not less than 3% of the project cost and, in some situations, will put you in the running for gold commission level awards."
  ];
  return (
    <WorkerLayout pdfName={"Comission Structure"} pdfTitle={"Comission Structure"} exportElems={sections.map(sec=>({type:ElementType.P,content:sec}))}>
    <Typography mb={1} variant={"h4"}>Commission Structure</Typography>
    <Paragraphs sections={sections}/>
    </WorkerLayout>
  );
};

export default CommissionStructure;

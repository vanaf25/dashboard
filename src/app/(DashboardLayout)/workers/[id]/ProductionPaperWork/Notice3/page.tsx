"use client";
import LegalLetter from '../../../../components/letters/legalLetter/LegalLetter';

const Notice3 = () => {
  return (
   <LegalLetter name={"Ivan"}
                paragraphs={[  "As you know we review all persons who work with us using several criteria to determine if they are a good fit for the position that they are assigned to. The criteria are as follows, timelines, quality, customer communication, production, safety and ability to perform the task assigned to them.",
                  "After a communication with your customer we have decided that unfortunately you are not going to be a good fit for this customer. As a result, we will have to remove you from your current position and assign you a new one.",
                  "We still see you as a valuable member of our company and will be attempting to assign you a new position as soon as possible, however; the position is not fully ready to be staffed at this time.",
                  "When this position is ready you will be given the first opportunity to try out for this new position and we are confident that you will perform with the highest level of excellence."]}
                title={"Worker notice 3 "}/>
  );
};

export default Notice3;

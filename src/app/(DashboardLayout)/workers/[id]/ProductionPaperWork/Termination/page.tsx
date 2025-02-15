"use client";
import TerminationTemplate from "@/app/components/letters/TerminationTemplate/TerminationTemplate";
const Termination = () => {
  return (
        <TerminationTemplate title={"Termination"}
                             headersParagraphs={[`Our company hold's personnel to the highest standards of quality, honesty and safety. These standards and expectations are not flexible nor will violating them be ignored. `]}
                             footersParagraphs={[
                                 `This is a breach of agreement with the company and as a result the company will be discontinuing your labor agreement with us.`,
                                  `Thank you for your services up to this date and best of luck.`
                             ]}
                             paragraphAfterTextField={"you have violated the companies standards and ethics."} />
  );
};

export default Termination;

"use client"
import TerminationTemplate from "@/app/components/letters/TerminationTemplate/TerminationTemplate";

const HarshTermination = () => {
  return (
        <TerminationTemplate
            paragraphAfterTextField={`you have violated the companies standards, ethics, and the safety of all of us`}
            footersParagraphs={[
                `This is an egregious breach of trust and agreement between yourself, the other workers, employees, customers and the company.`,
                "As a Result the company will be terminating your labor agreement with us.",
                `After a full review of your actions is conducted the company will decide if a criminal complaint will be filed against you with the local, state and federal policing agencies; Additionally, you may also be held liable and sued for damages you have caused to the company, customer or other persons involved in this incident.`
            ]}
            headersParagraphs={[`Our company hold's personnel to the highest standards of quality, honesty and safety. These standards and expectations are not flexible nor will violating them be ignored.`]}
            title={"Harsch Termination"}  />
  );
};

export default HarshTermination;

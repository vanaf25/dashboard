"use client";
import TerminationTemplate from "@/app/components/letters/TerminationTemplate/TerminationTemplate";

const MutualTermination = () => {
    return (
               <TerminationTemplate title={"Mutual Termination"}
                                    footersParagraphs={[
                                        "If you have any questions or requests before you go, please notify management as soon as you can so we can help.",
                                        "Thank you for your services up to this date, wishing you the best of luck for your future."
                                    ]}
                                    paragraphAfterTextField={"We both agree that neither the company nor your self are at fault for this termination and mutually agree to wave our rights to any legal actions against each other."}
                                    headersParagraphs={[`As you know we have not been able to make the agreement between us work, as a result we mutually agree to terminate the agreement between us`]} />
    );
};

export default MutualTermination;

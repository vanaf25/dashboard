"use client";
import DocumentLayout from "@/app/components/letters/Document/DocumentLayout/DocumentLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";
import SignatureSection from "@/app/components/letters/signatureSection/signatureSection";
import {Box} from "@mui/system";

const CompletionCert = () => {
    const sections=["Dear customer",`All work that has been assigned to us whether, verbally, threw punch-out lists, contractually, written request, additional work orders,
          emails or in pictures submitted to us by you has been completed. All work has been completed using our standard installation
          methods and the means, methods and quality of workmanship that we determined to be necessary to complete
          the work assigned to us. After this completion certificate has been signed your warranty will be sent to you by email.`]
  const exs=sections.map(sec=>({type:ElementType.P,content:sec}))
    return (
    <DocumentLayout withSignature pdfName={"CompletionCert"} exportElems={exs}  >
        <Box mb={5}>
            <Paragraphs sections={sections} />
        </Box>
        <SignatureSection/>
    </DocumentLayout>
  );
};
/*<Box sx={{mb:1}}>
        <Typography variant={"h2"} sx={{mb:2}}>Completion Cert</Typography>
        <Typography variant={"h3"} sx={{mb:2}}>Mister Exterior LLC</Typography>
        <Typography sx={{mb:1}}>Dear Customer</Typography>
        <Typography sx={{mb:2}}>
          All work that has been assigned to us whether, verbally, threw punch-out lists, contractually, written request, additional work orders,
          emails or in pictures submitted to us by you has been completed. All work has been completed using our standard installation
          methods and the means, methods and quality of workmanship that we determined to be necessary to complete
          the work assigned to us. After this completion certificate has been signed your warranty will be sent to you by email.
        </Typography>
      </Box>
      <SignaturesSection client={"Signature"}  />
      <Box sx={{mt:2,mb:2}}>
        <CustomerDetails customer={{
          Name:"Ivan",
          Phone:"0990930450",email:"vana@gmail.com",companyAddress:"24 rue de vignes"}}/>
        <Typography sx={{mb:1}}>
          We,0
        </Typography>
        <Typography>
          hereby agree that  all work assigned to the above company has been completed as per
          our details, requests, requirements, drawings, specifications, permits and that was described/outlined in our contract;
          additionally we fully accept all work performed by the above company that was performed in ANY other form of
          communication sent to them.
        </Typography>
      </Box>
      <SignaturesSection/>*/
export default CompletionCert;

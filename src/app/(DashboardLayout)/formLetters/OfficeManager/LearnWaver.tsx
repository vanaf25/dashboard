import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SignaturesSection from '../../../components/letters/signatureSection/signatureSection';

const LearnWaver = () => {
  const party1="Company A";
  const party2="Company B";
  const sections = [
    {
      title: 'Section 1. Release',
      content: `
        ${party1} hereby covenants and agrees to unconditionally, irrevocably, completely, and fully release, waive, acquit, release and discharge,
        ${party1} and ${party2}
        from all liens, claims, causes of action, proceedings, suits (collectively, the “Claims”)
        debts (including, without limitation, any monies due under the Contract), dues, sums of money, accounts,
        reckonings, bonds, bills, specialties, covenants, contracts, controversies, agreements, promises, variances,
        trespasses, damages, judgments, extents, executions, liabilities (statutory or otherwise), obligations,
        damages, penalties, losses, costs, expenses (including, without limitation, attorneys’ fees and
        disbursements, whether or not authorized or permitted by statute), and demands of any kind, nature or
        description whatsoever, at law, in equity, or otherwise, whether known or unknown, suspected or
        unsuspected, anticipated or unanticipated, direct or indirect, fixed or contingent which the Parties, as
        applicable, or their respective legal representatives, heirs, executors, administrators, successors, assigns
        ever had, now have, or hereafter can, shall, or may have, against any other parties for, upon, or by reason
        of any matter, cause or thing of any kind, nature, or description whatsoever from the beginning of time
        through the Effective Date of this Agreement, related to or related to or arising from any, verbal or written
        Contract between them.
      `,
    },
    {
      title: 'Section 2. Discharge',
      content: `
        ${party1} also agrees to discharge,
        ${party1} and ${party2}
        their successors, and assigns and
        covenant and agree to unconditionally, irrevocably, completely, and fully release, waive, acquit, and
        discharge the Company and Owner their subsidiaries and other affiliates thereof, their partners,
        shareholders, directors, officers, employees, agents, legal and personal representatives, attorneys,
        licensees and sub licensees, successors, and assigns from all claims, causes of action, proceedings, suits
        (collectively, the “Claims”) debts (including, without limitation, any monies due under the Contract),
        dues, sums of money, accounts, reckonings, bonds, bills, specialties, covenants, contracts, controversies,
        agreements, promises, variances, trespasses, damages, judgments, extents, executions, liabilities (statutory
        or otherwise), obligations, damages, penalties, losses, costs, expenses (including, without limitation,
        attorneys’ fees and disbursements, whether or not authorized or permitted by statute), and demands of any
        kind, nature or description whatsoever, at law, in equity, or otherwise, whether known or unknown,
        suspected or unsuspected, anticipated or unanticipated, direct or indirect, fixed or contingent which the
        Parties, as applicable, or their respective legal representatives, heirs, executors, administrators, successors,
        assigns ever had, now have, or hereafter can, shall, or may have, against any other parties for, upon, or by
        reason of any matter, cause or thing of any kind, nature, or description whatsoever from the beginning of
        time through the Effective Date of this Agreement, related to or related to or arising from the Contract.
        The Parties hereby agree that the Contract shall be terminated in all respects, that any such rights granted
        pursuant to Section 1 of such Contract shall immediately terminate, and that the Parties, as applicable,
        shall be forever released from any further obligation pursuant to such Contract.
      `,
    },
    {
      title: 'Section 3. Representations of the Parties',
      content: `
        The Parties agree and consent to provide or execute any
        and all such other documents as may be necessary to effect or complete the termination of the Contract or
        any other action required of either Party by this Agreement. The Parties consenting to the Mutual
        Release, represent and warrant that each have all requisite power and authority to execute this Agreement,
        to consent to each, every, and all transactions contemplated hereby, and that the below signatory
        executing this Agreement is authorized and permitted to bind and obligate the respective Party, which
        representations are being relied upon by such other Parties in its acceptance of this Agreement.
      `,
    },
    {
      title: 'Section 4. Non-Disparagement',
      content: `
        Neither of the Parties shall, directly or indirectly, disparage, defame or discredit the other or engage in any
        in any activity that would have the effect of disparaging, defaming or discrediting the other.
      `,
    },
    {
      title: 'Section 5. Entire Agreement; Non-Disclosure',
      content: `
        This Agreement represents the entire agreement between
        ${party1} and ${party2}
        with respect to the subject matter hereof. Each Party to this Agreement
        represents, covenants and warrants that it, its’ attorneys, and their employees, representatives, agents,
        family members and other parties who are within the respective control of each Party hereto and their
        attorneys, will not disclose, divulge, disseminate or publicize, or cause or allow to be disclosed, divulged,
        disseminated or publicized, to any person, business or entity (except to the Parties in this action and their
        respective attorneys), any of the terms of this Agreement, except that (i) in response to an order, decision,
        judgment or subpoena of a court of competent jurisdiction, or in response to a subpoena issued by a
        Federal, State, County or Local governmental or municipal agency, department, bureau, committee,
        commission, board or other governmental or municipal body, provided that written notice of any Party’s
        receipt of such order, decision, judgment or subpoena be given to the other Party’s attorneys as soon as
        reasonably possible after said receipt; or (ii) to the shareholders of either Party as may be required by the
        law of any of the several states, or the Securities Laws of the United States or any of the several states.
      `,
    },
    {
      title: 'Section 6. Governing Law; Jurisdiction',
      content: `
        This Agreement shall be governed by and construed in accordance with the provisions of the laws of the
        State of All states of the united states of America without regard to the conflicts of laws provisions thereof.
      `,
    },
    {
      title: 'Section 7. Severability',
      content: `
        Should any provision of this Agreement be deemed unenforceable by any court having competent jurisdiction thereof,
        all other provisions of this Agreement shall remain in full force and effect to the maximum extent provided by law.
      `,
    },
    {
      title: 'Section 8. Notices',
      content: `
        All notices or other communications required or permitted to be given pursuant
        to this Agreement shall be in writing and shall be considered as properly given if hand delivered or if
        Emailed and signed using Docusign.com or mailed from within the United States by first class United States mail,
        postage prepaid, or by overnight carrier guaranteeing next-day delivery, or, if from outside the United States,
        by overnight carrier guaranteeing next-day delivery, addressed to the principal places of business of
        ${party1} and ${party2} as set forth in the Preamble of this Agreement.
      `,
    },
    {
      title: 'Section 9. Counterparts',
      content: `
        This Agreement may be executed in one or more counterparts, each of which shall be deemed an original
        and all of which, together, shall be deemed to constitute one and the same agreement.
      `,
    },
  ];
  return (
    <div>
      <CustomerDetails withOutTitle customer={{
        companyPhone:"0990930450",email:"vana@gmail.com",companyAddress:"24 rue de vignes"}}/>
      <CustomerDetails
        withOutTitle
        customer={{Estimator:"ivan",Email:"vanay@gmail.com",Phone:"0990930450",Address:"Some Adress"}}/>
      <Typography sx={{mb:1}}>
        NOW THEREFORE, in consideration of the foregoing and the mutual promises contained herein
        and other good and valuable consideration, the receipt of which is hereby acknowledged and deemed to
        be legally sufficient and intended as legally binding, the Parties hereby agree as follows.
      </Typography>
      {sections.map((section, index) => (
        <Box key={index} mb={2}>
          <Typography variant="h6"   gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {section.content}
          </Typography>
        </Box>
      ))}
      <SignaturesSection client={"rep Signature"} />
      <SignaturesSection client={"Customer signature"} />
      <SignaturesSection client={"Customer signature"} />
    </div>
  );
};

export default LearnWaver;

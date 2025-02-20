"use client";
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import React from "react";
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";

const termsAndConditions = [
  {
    title: "1. INDEPENDENT INVESTIGATION",
    text: `Subcontractor has satisfied himself by his own independent investigation concerning the General Contract, plans, specifications, on-site job conditions, and type of workmen, materials and equipment required to complete the job in good and workmanlike manner. Subcontractor has entered into this subcontract in reliance upon his own investigation and not upon any representation by the Owner, his architect/engineer or the Contractor.`,
  },
  {
    title: "2. ASSUMPTION OF RESPONSIBILITY",
    text: `Subcontractor has accepted the conditions of the construction site and acknowledges that all related, adjacent or dependent work, services, utilities and materials are satisfactory to him and waives any and all claims for damages or extras with respect to defects or failures thereof. Subcontractor assumes responsibility for fully informing himself as to the work required and for the accuracy of all lines, levels, measurements, property lines and reference lines in connection with his work. No variation from specified lines, grades or dimensions shall be made without the written consent of the Contractor. Subcontractor shall be responsible for protecting his own work until final acceptance of the entire project by Owner and shall replace at his own expense any damaged work or material. Subcontractor shall make good any damage which he may cause to other work and materials on the project, or to structures or to adjacent property. Subcontractor shall further hold the Contractor harmless from any and all loss or damage caused by his acts or those of his agents or employees and shall pay to the Contractor all losses caused by his performance of this contract.`,
  },
  {
    title: "3. EQUIPMENT AND FACILITIES STORAGE",
    text: `This subcontract does not include the use of any Owner's or Contractor's equipment, facilities or storage and if they are used by Subcontractor such use shall be at his own risk; after inspection Subcontractor agrees to hold Owner and Contractor harmless from any and all damages of every kind whatsoever resulting from such uses. He shall further return all such equipment, facilities or storage space to Contractor in as good condition as when received, upon demand by Contractor, or at the completion of the job, whichever occurs first. The Contractor shall be entitled to payment from Subcontractor of the reasonable rental value of all equipment, facilities or storage used by Subcontractor.`,
  },
  {
    title: "4. JOB SITE CONDITIONS",
    text: `Subcontractor shall comply with all instructions from the Contractor with respect to conditions at the site and shall remove all of its rubbish, debris and any unnecessary materials, tools and equipment from the site or to any area designated by the Contractor on a daily basis. In the event that Subcontractor maintains any condition at the job site which is unsafe to persons or property, the Contractor shall have the right, but not the obligation, to take any corrective steps it deems advisable and charge Subcontractor all costs connected therewith.`,
  },
  {
    title: "5. PRICE INCREASES",
    text: `Subcontractor assumes the risk during the life of this subcontract of all wage, price and material increases and shall not be entitled to any additional payment on account thereof.`,
  },
  {
    title: "6. TAXES AND PERMITS",
    text: `Subcontractor shall obtain and pay for all applicable licenses, permits, inspections and taxes, including, but not limited to all use and sales taxes in connection with the work and materials which he furnishes hereunder, without extra charge to the Contractor.`,
  },
  {
    title: "7. JOINT CHECKS",
    text: `The Contractor may, in its absolute discretion, make any check due to Subcontractor payable jointly to Subcontractor and to any labor or material man who may have a right to file a lien on the job, or to any person who could file a lien or make a claim against the Owner or the Contractor.`,
  },
  {
    title: "8. COST OF THE WORK",
    text: `When all or any portion of the price for the work is determined on a cost plus fee basis, the term "cost of the work" shall not include any administrative or overhead expense whatsoever. All such expenses are to be included within the Subcontractor's fee.`,
  },
  {
    title: "9. INVOICES AND RELEASES",
    text: `All invoices must be submitted in duplicate and shall be accompanied by receipts, vouchers and releases of claims of labor and material men. It is agreed that no payment hereunder shall be required until and unless such releases are furnished to the satisfaction of the Contractor. Any payment made hereunder shall not be construed as evidence of acceptance of any part of Subcontractor's work, since Subcontractor requests that payments be made at the earliest possible date, and such payments may be made before the Contractor's inspection and investigation of the work is complete.`,
  },
  {
    title: "10. LIENS AND CLAIMS",
    text: `Subcontractor shall pay when due all claims for labor and equipment and/or materials and shall prevent the filing of any mechanic's liens or shall be in material breach of this subcontract. In the event that any such suit or lien is filed, he agrees to immediately remove it by satisfaction, discharge, dismissal, and bond or compromise settlement. A failure to do so within ten (10) days after notice shall authorize the Contractor to satisfy such claim by any means it deems desirable and to charge Subcontractor with all costs, including reasonable attorney's fees, connected therewith.`,
  },
  {
    title: "11. TIME OF PERFORMANCE OF WORK",
    text: `Time is of the essence of this Agreement and a substantial part of the consideration is Subcontractor's promise to adhere to the time requirements of the job as they now exist and as they may be changed during the course of construction. Subcontractor shall inspect the work already complete prior to commencing his work and advise the Contractor of any conditions which will prevent him from properly performing under this contract. Any such condition, if not corrected in advance, shall be submitted in writing to the Contractor prior to commencement of the Subcontractor's work. Subcontractor agrees to proceed with the work continuously and with diligence and may be held responsible for any and all increased costs due to Subcontractor's failure to complete the work on schedule and in time to permit other workmen to finish their work on schedule. Should the time schedule be changed by the order of the Owner, his architect/engineer or the Contractor, Subcontractor agrees to comply with the changes as instructed by Contractor. Delays caused by acts of God or the Owner or his architect/engineer shall entitle Subcontractor to reasonable additional time for performance. Except for such extensions, Subcontractor shall provide, at his expense, the necessary workmen and work overtime, if required, to meet the completion dates of each phase of the work and Contractor's time schedule. Subcontractor shall proceed diligently with the work pending final determination of any dispute or claim. Any breach of this provision shall entitle Contractor to declare Subcontractor in default, have others complete this subcontract, and charge Subcontractor with all costs thereof.`,
  },
  {
    title: "12. QUALITY OF WORK",
    text: `Unless otherwise specified herein, all materials used on the work shall be new and in good condition. Materials for similar uses shall be of the same type and quality and shall match other materials. All workmanship shall be the best standard practice of the trade unless a better quality is specified in the contract documents. All material and workmanship shall strictly comply with the general contract, plans and specifications. In the event that the quality is not specified, Subcontractor shall ascertain the quality required before ordering the material, and it shall be the best available, first class or that approved in writing by the Contractor. In the event that color is a material fact and is not specified, Subcontractor shall ascertain the color desired prior to using any color. In the event that shop drawings are prepared by Subcontractor, they shall be used at Subcontractor's own risk. Part of the consideration for this subcontract is Subcontractor's special knowledge and skill and Subcontractor is expected to use that expertise in the performance of his work. If the plans or specifications are defective, or if required materials are inferior when compared with other materials, Subcontractor shall so advise the Contractor and cooperate in any adjustments that may be made.`,
  },
  {
    title: "13. SUBCONTRACTOR'S EMPLOYEES",
    text: `Subcontractor shall employ only competent, experienced, careful and orderly persons upon the work and upon notification from the Contractor that the conduct or workmanship of any of his employees is unsatisfactory, he shall immediately remove such person or persons from the job site and not have them perform any further work involving the Contractor, without the written consent of the Contractor. Upon request, Subcontractor shall furnish the Contractor with a list of all workmen used in connection with the work. Subcontractor shall be responsible for the payment of all wages and fringe benefits which become payable in connection with the work performed under this Subcontract, and shall hold the Contractor harmless from all claims connected therewith.`,
  },
  {
    title: "14. CHANGE ORDERS",
    text: `Subcontractor shall make no changes in the work, and shall be responsible for any deviation from the General Contract, plans and specifications, unless such changes are authorized in writing by the Contractor. All changes shall be without change in the contract price unless the written change order provides for an increase or decrease of the cost. All requests for changes shall be accompanied by a line item breakdown for each component of the work. Labor, equipment, supplies and permanent material will be shown separately. Overhead and profit will be shown separate from the costs. Contractor shall not be liable for prospective profits on work not performed in the event of deductive change orders to Subcontractors scope of work, including termination of subcontract agreement by Contractor.`,
  },
  {
    title: "15. ASSIGNMENT OF WORK",
    text: `All of Subcontractor's work shall be performed by Subcontractor which shall not assign, delegate or subcontract the work to anyone other than its own employees without the written permission of the Contractor. A material part of the consideration for this subcontract is the special skill and reliability of Subcontractor and its employees shall personally perform the work.`,
  },
  {
    title: "16. RECORDS",
    text: `The Contractor shall have full access to Subcontractor's records during regular business hours to determine the facts concerning any part of the work connected with the performance of this subcontract and Subcontractor shall provide the Contractor with any reports requested concerning its activities in the performance of this subcontract. In connection with full access to the Subcontractor’s records, Contractor shall have the right to conduct an audit of all the books and records, including financial books and records of the Subcontractor, including original time sheets, time cards, material invoices, canceled checks, payroll checks and the like. Subcontractor will fully cooperate in such audit.`,
  },
  {
    title: "17. BREACH",
    text: `If Subcontractor breaches any of the terms and conditions herein, the Contractor shall have a right to immediately cancel this subcontract, without any liability therefore, in addition to any other right or remedy which it may have at law or equity. This provision is made because the Contractor is responsible to the Owner for the performance of the entire contract, and the work of other crafts is dependent upon Subcontractor's timely performance. In the event of such a cancellation, the Contractor may complete the work or hire another subcontractor to do so and charge Subcontractor with all necessary costs above the total consideration of this subcontract. In the event that the Contractor proceeds to complete the subcontract work, it is hereby authorized to take over all work in progress, use any tools and equipment on the job site and receive all materials ordered by Subcontractor to complete the job, but shall be obligated to give Subcontractor a full accounting thereof.`,
  },
  {
    title: "18. BANKRUPTCY",
    text: `Subcontractor agrees not to commit any act of insolvency, bankruptcy or any assignment for the benefit of creditors. In the event that one of the above conditions are violated, the Contractor may terminate this subcontract immediately without notice, and Subcontractor hereby assigns to the Contractor all the material assets and equipment on the job site or on order for the purpose of completing the work required by this subcontract. The Contractor shall further have the right to take over the work and complete it without liability, except that the Contractor shall account to Subcontractor for any unused portion of the contract price thirty (30) days after the job is completed and return to Subcontractor any unused material ordered by Subcontractor.`,
  },
  {
    title: "19. LIABILITY AND INDEMNITY",
    text: `All work covered by this agreement performed at the site of construction, or in preparing, or delivering materials to the site, shall be at the risk of Subcontractor alone. Subcontractor agrees to save, indemnify and hold harmless Owner and the Contractor against all liability, claims, judgments, injuries to persons, including Subcontractor's employees, and damages to property arising directly or indirectly out of the obligations herein undertaken, or out of operations conducted by Subcontractor.`,
  },
  {
    title: "20. BONDING",
    text: `Subcontractor shall, if requested by the Contractor at the beginning, or any time during the course of construction, provide labor, material and performance bonds, in an amount equal to 100% of the contract price, in a corporate security acceptable to the Contractor which shall pay the premium therefore if it is not required at the start of construction. Failure to provide the requested bond shall be a material violation of this subcontract and give the Contractor a right to terminate the Subcontractor for default after ten (10) days notice to provide the bond.`,
  },
  {
    title: "21. INSURANCE",
    text: `Subcontractor's Liability Insurance: Subcontractor shall purchase and maintain such insurance as will protect it from the claims set forth below which may arise out of or result from Subcontractor's operations under this agreement whether such operations be by itself or by any sub-Subcontractor or by anyone directly or indirectly employed by any of them, or by anyone for whose acts any of them may be liable. These include claims under Workers' Compensation, Disability Benefit and other similar employee benefit acts which are applicable to the work to be performed, claims for damages due to bodily injury, sickness, disease, or death, and claims for damages due to property destruction.`,
  },
  {
    title: "22. GUARANTEE OF WORK",
    text: `Subcontractor shall assume and perform all of the work covered by this subcontract which is of the same type required of the Contractor by the contract documents and plans, and he shall assume the Contractor's obligation to satisfy the Owner with respect thereto. Subcontractor further will provide a written guarantee of all of its materials and workmanship for one (1) year from the filing of the Notice of Completion and will remedy any defects that may appear during that time. In the event that the contract documents and plans should require a greater guarantee, or one for a longer period, Subcontractor shall comply with the guarantee so required with respect to his part of the work.`,
  },
  {
    title: "23. LICENSES",
    text: `Subcontractor represents that it is duly licensed by the state in which the job is located to perform the work required by this subcontract and that it will maintain such license or licenses during his performance under this subcontract. A failure to do so shall constitute a breach of a material covenant and give the Contractor a right to terminate this subcontract, have others complete the work, and charge Subcontractor with all costs connected therewith.`,
  },
  {
    title: "24. LAWS, RULES AND REGULATIONS",
    text: `All workmanship and materials shall comply with all applicable laws, codes, rules and regulations, and Subcontractor shall comply with all safety regulations, which are applicable to his work, and particular attention for applicability shall be given to the United States Department of Labor Occupational Safety and Health Administration Standards, and the regulations of the state in which the job is located. The responsibility for complying with all such laws, codes, rules and regulations, and safety standards shall be the sole responsibility of Subcontractor. If Contractor is fined for Subcontractor violations, these costs will be reimbursed to the contractor by the Subcontractor through a deductive change order.`,
  },
  {
    title: "25. TESTING",
    text: `Each piece of equipment installed by Subcontractor shall be thoroughly tested and adjusted by him to insure proper functioning for its intended purpose. It shall not make excessive noise or vibrations and shall meet the usual standards for equipment of its type. If requested, Subcontractor shall demonstrate the proper operation of the equipment to the Contractor and/or the Owner to their satisfaction.`,
  },
  {
    title: "26. JOBSITE EXCAVATION",
    text: `If Subcontractor's work requires earth excavation, it shall be done in a safe manner and in accordance with all state, local, and federal safety regulations. All backfilling of excavated material shall be performed by replacing material in 6" layers and compacting before placing the next layer. Compaction shall be by a suitable method as necessary to obtain a minimum density of 95% of maximum density by the "Modified Proctor". If additional or less water in the material is required to obtain this density, it shall be added or removed as necessary.`,
  },
  {
    title: "27. SIGNS AND ADVERTISING",
    text: `Subcontractor shall not place any signs, poster or advertising at the job site except safety signs and those that may be required by federal, state or local laws, ordinance, and regulation, without first obtaining permission and approval from the Contractor. If permission is granted, Contractor may require a degree of uniformity of Subcontractor's signs.`,
  },
  {
    title: "28. CLEAN UP",
    text: `Subcontractor is responsible for its own clean up on a daily basis. In the event that Subcontractor does not clean jobsite of its own debris on a daily basis, Contractor may notify Subcontractor of this situation in writing and, if not remedied within 24 hours thereafter, Contractor may back charge Subcontractor for the necessary clean up. Additionally, contractor may request subcontractor on a weekly basis to assist contractor and other subcontractors in a common effort to maintain a clean and safe work site by removing jobsite debris common to and generated by all subs.`,
  },
  {
    title: "29. INTERPRETATION OF CONTRACT AND APPROVAL OF WORK",
    text: `The Contractor shall interpret the contract documents and shall be the judge of the performance of the Subcontractor thereunder. The Contractor shall have the full authority to reject work that does not conform to the contract documents and payment shall not be required on work or materials that do not have such approval. The Contractor may require special tests or inspections of work and materials as a condition to giving such approval.`,
  },
  {
    title: "30. INDEPENDENT CONTRACTOR",
    text: `The Subcontractor is an independent contractor and has sole control in the exact performance of this subcontract.`,
  },
  {
    title: "31. RIGHT TO SETTLE DISPUTES",
    text: `The Contractor reserves the right to settle all disputes and back charges between subcontractors and/or suppliers.`,
  },
  {
    title: "32. CLAIMS",
    text:[
      "(a) If Owner files a claim related to Subcontractor’s work, Subcontractor and its surety are bound to Contractor under the same terms as Contractor is to Owner. Subcontractor must defend Contractor at no cost and may be required to join proceedings.",
      "(b) For claims against Owner, Contractor will present Subcontractor’s claims but Subcontractor bears all preparation costs. Subcontractor cannot independently litigate and will receive only what Contractor receives from Owner, minus Contractor’s costs.",
      "(c) Contractor has the right to settle or resolve any claim related to Owner’s actions and will determine the amount to be paid to Subcontractor. This decision is binding unless submitted to litigation under section (d).",
      "(d) Disputes not covered by prior sections will be resolved in Idaho courts under Idaho law.",
      "(e) Subcontractor must continue working while disputes or claims are being resolved.",
      "(f) These provisions remain in effect even after the contract is completed or terminated.",
      "(g) Subcontractor agrees that its only legal recourse is under this contract and cannot claim compensation under alternative legal theories like quantum meruit or quasi-contract."
    ]
  },
  {
    title: "33. NO ELECTION OF REMEDIES",
    text: `Nothing contained herein shall be deemed or require an election of remedies. All remedies are cumulative with all other remedies available at law or equity.`,
  },
  {
    title: "34. ATTORNEY FEES",
    text: `In the event it becomes necessary to obtain the services of an attorney to enforce any term or condition of this agreement, the prevailing party shall be entitled to reasonable attorney fees.`,
  },
  {
    title: "35. AGENCY FINES",
    text: `Subcontractor agrees to reimburse Contractor 100% for any fines imposed upon the Contractor due to violations on the Subcontractor's part.`,
  },
  {
    title: "36. PENETRATIONS OF FIRE RATED WALLS/CEILINGS/FLOORS",
    text: `Subcontractor agrees to provide and install approved fire rated sealant/stopping assembly where work of subcontractor penetrates fire rated walls/ceilings/floors.`,
  },
  {
    title: "37. ACCESS DOORS",
    text: `Subcontractor agrees to provide and install access doors (with appropriate fire rating if required), where work of subcontractor creates the requirement for said access doors.`,
  },
  {
    title: "38. PROGRESS PICTURES",
    text: `Subcontractor agrees at the start and end of each day to take progress pictures of the portion of work the subcontractor will be and/or is working on. Progress pictures are to be submitted electronically at the end of each day by 12:00 midnight via email or direct file transfer.`,
  },
  {
    title: "39. CERTIFIED PAYROLLS",
    text: `Where required by the contract between the owner and the contractor, subcontractor shall provide on a weekly basis appropriate certified payrolls for labor performed under the scope of this subcontract.`,
  },
  {
    title: "40. WEEKLY SUBCONTRACTOR MEETINGS",
    text: `Subcontractor agrees to attend weekly subcontractor coordination meetings when requested by contractor.`,
  },
  {
    title: "41. SUBMITTALS",
    text: `Subcontractor agrees to provide all required submittals in appropriate quantities in a timely manner so as not to delay progress of the project. Subcontractor shall not be relieved of responsibility for deviations from requirements of the contract documents by the contractor's or architect's approval of submittals (shop drawings, product data, sample, tests, or similar items) unless the supplier has specifically informed the contractor and architect in writing of such deviation at the time of submittal, and the contractor and architect have given written approval to the specific deviation as a minor change in the work, or a change order has been issued directing the supplier to proceed with the deviation. The subcontractor shall not be relieved of responsibility for errors or omissions in shop drawings, product data, samples, tests, or similar submittals by the contractors or architect's approval thereof.`,
  },
  {
    title: "42. ASBUILTS",
    text: `Subcontractor agrees to maintain as-built drawings and specifications as required by project specifications, indicating at a minimum locations of all concealed work, all variances from contract drawings, and actual products used, to be approved before final payment.`,
  },
  {
    title: "43. OPERATIONS AND MAINTENANCE MANUALS",
    text: `Subcontractor agrees to provide all required operations and maintenance manuals in appropriate quantities to be approved prior to final payment.`,
  },
  {
    title: "44. SUBCONTRACTORS ON SITE WORKFORCE",
    text: `It is required that subcontractor provide to the appropriate field representative of contractor, documentation of onsite workforce and duties completed by said force on a daily basis.`,
  },
  {
    title: "45. SUBCONTRACTORS LOWER TIER SUBCONTRACTORS",
    text: `Subcontractor shall ensure that the provisions of this subcontract agreement shall be extended to subcontractor’s lower-tier subcontractors and suppliers, excepting that the scope of work between subcontractor and subcontractor's lower-tier subcontractors and suppliers shall be determined by subcontractor.`,
  },
  {
    title: "46. USE OF TOBACCO AND FOOD PRODUCTS",
    text: `Use of tobacco products on site is discouraged but will, in any case, be strictly prohibited at interior locations at such time as the beginning of the installation of building finishes, considered to be at the time of gypsum board installation or other such time as designated by contractor. Similarly, use of food and drink products (except water) shall also not be allowed on the interior of the facility subsequent to the commencement of interior finishes.`,
  },
  {
    title: "47. CELL PHONE AND PERSONAL ELECTRONIC DEVICES (PED)",
    text: `It is required that subcontractor implement the Company safety program which stipulates that all projects and work areas will not allow employees to use cell phones unless they are specifically issued or approved by the Company. No Personal Electronic Devices (PED) such as iPods, MP3 Players, Smart Phones, or any other distractive electronic devices will be allowed during work hours on Company job sites.`,
  },
];
const termsAndConditions2= [
  `1. Adherence to and compliance with applicable provisions of CFR 29 Chapter XVII - Occupational Safety and Health Administration Part 1926 Safety and Health Regulations for Construction (current revision), Record Steel and Construction policy and procedures, US Army Corps of Engineers Safety and Health Requirements EM-385-1-1 (current revision), and state and local regulations are essential to satisfactory performance of the contract.`,
  `2. The subcontractor shall designate a responsible member of the subcontractor's organization at the site whose duty shall be the prevention of accidents. The subcontractor’s safety person shall be on site whenever the subcontractor is performing work. All accidents, injuries, or near misses shall be immediately reported to contractor.`,
  `3. The subcontractor is required to instruct each employee in the recognition and avoidance of unsafe conditions and the regulations applicable to his/her work environment, to control or eliminate any hazards or other exposure to illness or injury. (CFR 1926.21 (b) (2)). Subcontractor shall maintain an OHSA competent person on site trained in the hazards of subcontractor’s scope of work.`,
  `4. The subcontractor shall require that each new employee sign a statement that he/she has been made aware of applicable safety rules and will abide by these rules.`,
  `5. The subcontractor or its individual employees are subject to removal from the work site if safety rules and regulations are not followed.`,
  `6. The following violations will be grounds for immediate removal of subcontractor’s personnel from the project:
   a) Gross disregard of safety and health rules and regulations, repeated violations or refusal to follow safety and health rules and regulations.
   b) Fighting (Physical Contact), horseplay or gambling.
   c) Theft.
   d) Drugs or alcohol (possession or under the influence).
   e) Willful destruction of property.
   f) Possession of firearms or explosives onsite.
   g) Any act or omission that could inflict or result in bodily harm or death.`,

  `7. The subcontractor shall conduct a weekly safety meeting with its personnel. A copy of the written minutes and the attendance of each meeting shall be given to Record Steel and Construction’s safety representative.`,

  `8. All projects will require submission of a site specific job hazard analysis and safety plan to be reviewed by Company prior to starting work. Job hazard analysis and safety plans will be prepared by each Subcontractor and submitted prior to task preparatory meeting.`,

  `9. When required by CFR 29 1926, a copy of any certification, design by engineer, proof of certification, or proof of competent person shall be submitted to Company representative.`,

  `10. LAWS, RULES AND REGULATIONS: All workmanship and materials shall comply with all applicable laws, codes, rules and regulations, and Subcontractor shall comply with all safety regulations, which are applicable to his work, and particular attention for applicability shall be given to the United States Department of Labor Occupational Safety and Health Administration Standards, and the regulations of the state in which the job is located. The responsibility for complying with all such laws, codes, rules and regulations, and safety standards shall be the sole responsibility of Subcontractor. If Contractor is fined for Subcontractor violations, these costs will be reimbursed by Subcontractor. Subcontractor specifically agrees that it will comply with all code, laws, and regulations pertaining to the disposal of hazardous or toxic substances and indemnify and hold Contractor harmless for any violation thereof.`,

  `11. USE OF STILTS: Subcontractors are discouraged from allowing employee use of stilts, but may be allowed use of stilts with the following qualifications:
   1) Stilt height must be less than four feet.
   2) Personnel using stilts must display a level of dexterity showing a steady and certain movement while using stilts.
   3) No personnel on stilts will be permitted to lift into place any tool or material in excess of 25 pounds.
   4) Personnel working on stilts are responsible at all times to ensure that construction debris, materials, tools, etc., in his/her work area do not present a tripping/slipping hazard.
   5) Subcontractors choosing to allow use of stilts by his/her personnel must provide Company with documentary proof of adherence to these qualifying requirements.
   6) Subcontractors allowing personnel to use stilts agree to save, indemnify, and hold harmless the owner and contractor against all liability, claims, injuries to persons including subcontractor's personnel, and damages to property arising directly or indirectly out of the obligations herein undertaken, or out of operations conducted by subcontractor or subcontractor’s personnel engaged in the use of stilts.`,

  `12. TASK LIGHTING: Subcontractors are required to provide adequate task lighting to perform subcontractor’s contractual scope of work.`,

  `13. RIGGING & ERECTION SEQUENCE: The following procedure is Company policy and needs to be followed for all Product Erection on site:
   a) Inspect access, ground, and interference’s.
   b) Inspect and install proper outrigger pads and dunnage.
   c) Check swing radius clearance.
   d) Barricade erection and welding area.
   e) Rope-off counterweight swing radius.
   f) Requirements for operator, rigger, and crew:
      i. Craning plan for each pick over 75% of charts.
      ii. Weight of each pick verified from supplier or shipping documentation.
      iii. All picks to be measured from truck to center pin of crane.
      iv. Knowledge of maximum swing radius of product.
      v. Erection distance known to operator by taped or dr run of each load, from center pin to center of load.
      vi. Rigger figures boom angle and maximum radius in degrees and footage.
      vii. Crane operator calculates boom angle and radius for pick.
      viii. After separate review, operator and rigger are to agree pick is within crane capabilities.
   g) Knowledge of the rigging system capacity (All shackles, spreaders, etc.)
   h) Knowledge of crane signals.
   i) Daily inspection of all rigging systems.
   j) Inspection of load pick points.`,
];
interface  ElementProps{
  title:string,
  content:string | string[]
}
const Element:React.FC<ElementProps>=({title,content})=>{
  return( <Box  sx={{ marginBottom: 4 }}>
    <Typography sx={{mb:1}} variant="h6" gutterBottom>
      {title}
    </Typography>
    {typeof content==="string" ?  <Typography>
      {content}
    </Typography>:<Paragraphs sections={content}/> }

  </Box>)
}
const SubContract = () => {
  const contractSections = [
    {
      title: "Scope of Work",
      content: `Subcontractor will provide all labor, equipment, and supervision to perform the sections listed below complete per plans and specifications and work order or addendum. This subcontract includes but is not limited to:
    The above work is required by Company, hereinafter referred to as Contractor, by the general contract, request for proposal, and specifications between Contractor and the above-named Owner, and in strict compliance with the following contract documents and plans:

    The Contract Documents consist of this Agreement, or Addendums of the Contract (General, Supplementary, and other Conditions), the Drawings, the Specifications, all Amendments issued prior to and all Modifications issued after execution of this Agreement. These form the Contract, and all are as fully a part of the contract as if attached to this Agreement or repeated herein. Division 01 General Requirements shall apply as appropriate to the Subcontractor’s scope of work. An enumeration of the Contract Documents is listed in Exhibit "D".

    Contract work shall be performed in a good and workmanlike manner according to the best trade practices, in accordance with all applicable codes and requirements of the governing authority, and in accordance with the following terms and in accordance with "Standard Terms and Conditions for All Subcontracts" attached hereto as Exhibit "A", and incorporated by reference, attachment herewith is acknowledged; “Safety Terms and Conditions for All Subcontracts” attached hereto as “Exhibit “B” and incorporated by reference; and the project Baseline Schedule as approved by the owner, incorporated herein by reference, Exhibit "C". Contractual final completion date for all design and construction activities is [Insert Date Here].`
    },
    {
      title: "Work to Be Performed",
      content: `Subcontractor agrees to furnish all labor, installation supplies i.e., fasteners, equipment, services, machinery, tools, sales taxes, use taxes, and any other facilities of every kind and description, including proper supervision at all times, all as required for the prompt and efficient performance of said work, and all work incidental thereto.`
    },
    {
      title: "Progress and Time of Completion of Work",
      content: `Subcontractor agrees to commence construction as soon as the site is ready for his phase of the work, and in any case within two (2) days after notice from the Contractor to proceed, and to complete each part of his work expeditiously and in time to avoid delaying any other work at the job site. Should the Subcontractor fail, be unable, or refuse to supply sufficient manpower to the job, for any reason whatsoever, it shall be a material breach of this subcontract. Subcontractor shall strictly comply with any time schedule, set by the Contractor at any time, and the instructions of the Contractor's job superintendent. If the Subcontractor is delayed in the judgment of the Contractor by any labor dispute (whether or not the labor dispute is with the Subcontractor), the Contractor (in addition to any other remedy at the law or equity) shall have the right to immediately replace the Subcontractor, in which case the Subcontractor shall vacate the job and be paid (after completion of the replacement subcontractor's work) the amount provided on Page One hereof, less the cost incurred by the Contractor for the replacement subcontractor's charges in completing the work. The work required herein is in any event to be completed in accordance with the current construction schedule, referred to as Exhibit "C".`
    },
    {
      title: "Payment Schedule",
      content: `Unless otherwise stated herein, payments to Sub-contractor shall be made monthly as the work progresses. On or before the 20th of each month, or other date as designated by the contractor, Subcontractor shall provide the Contractor with duplicate invoices and Labor and Material Lien Releases for all sums due for work and materials furnished up to the date of the invoice. The submission of subcontract progress estimates shall constitute a representation by the Subcontractor that all previous payments have been properly applied by Subcontractor to the payment of all second-tier subcontractor and material supplier billings, which, in turn, formed the basis of the prior progress estimates. Subcontractor further represents and warrants that, upon receipt of the progress estimate represented by each current progress estimate, a similar process will be followed, and all second-tier subcontractors and material suppliers whose billings form the basis for the current progress estimate will be similarly paid and satisfied in full, excepting only those instances in which there is a legitimate good faith dispute between the Subcontractor and a second-tier subcontractor or material supplier with respect to performance or related matters. In such event, the Subcontractor will notify Contractor, which, in turn, will withhold such moneys pending resolution of the dispute between the Subcontractor and the second-tier subcontractor or material supplier. Labor and Material Lien Release forms utilized shall be as provided by the contractor to the subcontractor with the contract package. The Subcontractor shall, as a minimum, prepare a schedule of values that assigns revenue to his activities in the construction schedule and shall assign five percent (5%) of the total contract value to an activity titled O&M Manuals & Punch list. Contractor reserves the right to approve subcontractor’s schedule of values, and values for mobilization may not be allowed. Progress payments will be released approximately ten (10) days after receiving payment from the Owner. Payment by the owner is a condition precedent to contractor’s obligation to pay subcontractor. Payment for O&M activities shall be paid thirty (30) days after completion if the contract has been fully performed to the satisfaction of the Owner and the Contractor and the delivery to the Contractor of all Lien Releases for Labor and Material.`
    },
    {
      title: "Special Terms and Conditions",
      content: `Unless expressly accepted herein, Sub-contractor shall fully perform in a good and workmanlike manner all obligations of the Contractor to the Owner, under said contract documents, which pertain to Subcontractor's part of the work. The parties agree to the following special terms and conditions:`
    }

  ];
  const title=`STANDARD TERMS AND CONDITIONS OR ALL SUBCONTRACTS`;
  const p=`The following general terms and conditions are incorporated in all subcontracts entered into by Company with any subcontractor and are not subject to change without an express endorsement in writing of the change:`
  return (
    <WorkerLayout withSignature
                  exportElems={[
                      ...contractSections.map(el=>({type:ElementType.SECTION,...el})),
                    {type:ElementType.H4,content:title},
                    {type:ElementType.P,content:p},
                    ...termsAndConditions.map(el=>({type:ElementType.SECTION,title:el.title,content:el.text})),
                    {type:ElementType.H4,content:title},
                    {type:ElementType.P,content:p},
                    ...termsAndConditions2.map(el=>({type:ElementType.SECTION,content:el}))
                  ]}
                  pdfName={"Sub Contract"}
                  pdfTitle={"Sub Contract"}>
      {contractSections.map((section,index)=><Element key={index} title={section.title} content={section.content}/>)}
      <Typography sx={{mb:1}} variant={"h5"}>{title}</Typography>
      <Typography sx={{mb:1}} >{p}</Typography>
        {termsAndConditions.map((section,index)=><Element key={index} title={section.title} content={section.text}/>)}
     <Typography sx={{mb:1}} variant={"h5"}>{title}</Typography>
    <Typography sx={{mb:1}} >{p}</Typography>
      {<Paragraphs sections={termsAndConditions2}/>}
      <SignaturesSection client={"Sign"}/>
      <SignaturesSection client={"SubContractor Signature"}/>

    </WorkerLayout>
  );
};

export default SubContract;

"use client";
import { Typography } from '@mui/material';
import CustomerDetails from "@/app/components/global/CustomerDetails/CustomerDetails";

const Waranty = () => {
  return (
    <div>
      <CustomerDetails withOutTitle customer={{
        companyPhone:"0990930450",email:"vana@gmail.com",companyAddress:"24 rue de vignes"}}/>
      <CustomerDetails
        withOutTitle
        customer={{Estimator:"ivan",Email:"vanay@gmail.com",Phone:"0990930450",Address:"Some Adress"}}/>
      <Typography variant={"h5"} sx={{mb:1}}>10 year Limited TRANSFERRABLE INSTALLATION WARRANTY.</Typography>
      <Typography sx={{mb:1}}>
        The company guarantee it is installation and the workmanship for the life of the product
        being installed. If the material or product that was installed fails for any reason before the 10 year period
        is expired the warranty is void. This is a labor only warranty no materials or products used in the work are
        warranted against defect, ware and tare, leaking, fading, bleaching by the sun or acts of God.
        The company shall have no obligation pursuant to this warranty until all bills for installation, supplies,
        services, punch out lists, and additional work orders in connection with the work covered by this warranty
        have been paid in full. The company shall have no obligation pursuant to this warranty if the property
        owner, customer and/or other parties to the owner or customer weather hired or not, work on the work
        under which this warranty is made. This warranty is transferable to the next property owner, however;
        expires 5 years after the date of transfer. This warranty does not apply to the installation or life of the
        sealants, stains or paints used. This warranty does not cover any material defects of any kind.
        This warranty is made under and subject to the following terms and conditions:
        In order to obtain performance of any warranty obligation, you must;
        First notify the company of any defective work is assumed is in need of repair.
        Second all bills, disputed or not, owed to the company must be paid in full.
        Third the completion certificate submitted to you by the company must be signed and returned to the company.
        The company shall make repairs as soon as practical upon notification of reported defects and
        determination of coverage. In order to pursue any claim that the company has not honored this
        warranty, notification must be given to the company in writing at the address shown below.
        The company’s obligation to make repairs during the term of this warranty is its sole obligation to you.
        All repairs made are at the sole discretion of the company making the repairs and the company is under
        no obligation what so ever to make repairs to work that the customer deems is of poor quality or not to the
        quality standards of any party to the customer. This warranty is between the customer and the company,
        and no other representations or agreement pertaining to the work performed by the company has been
        made. The company shall have no obligation with respect to the work or materials upon the expiration of
        the warranty period set Forth above which begins on the date of substantial completion of the work as
        determined by the company. The company shall not be liable for any special, consequential, incidental or
        other damages. Your sole remedy under this warranty is the right to have the company repair, at no cost to
        you, those conditions of the companies work which result from defects in workmanship by the company.
        This warranty is given and accepted in lieu of all other liability or warranty’s on the part of the company,
        Expressed or implied, in fact or in LAW, all implied warranties and specifically the implied warranties or
        merchantability, habitability and fitness for a particular purpose are expressly excluded and disclaimed.
        The company’s Liability whether it arises out of contract, negligence, warranty or otherwise shall not
        exceed 10 percent of the goods sold.
      </Typography>
    </div>
  );
};

export default Waranty;

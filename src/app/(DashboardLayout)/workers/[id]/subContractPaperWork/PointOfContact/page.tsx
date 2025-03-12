"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import { useState } from "react";
import { ElementType } from "@/app/types/exportPdfTypes";
import BlankCard from "@/app/components/shared/BlankCard";

const SubcontractorForm = () => {
  const [formData, setFormData] = useState([
    { name: "subcontractorNamePageName", label: "Subcontractor Name (BrickWallCovering Name)", value: "" },
    { name: "addressPhysical", label: "Address: Physical", value: "" },
    { name: "mailingAddress", label: "Mailing Address", value: "" },
    { name: "phoneOfficeMWF", label: "Phone-Office (MWF)", value: "" },
    { name: "phoneFax", label: "Phone-Fax", value: "" },
    { name: "ownerName", label: "Owner-Name", value: "" },
    { name: "officersAllowedToSignOnOwnersBehalf", label: "Officers allowed to sign on owner's behalf", value: "" },
    { name: "billingContactName", label: "Billing Contact-Name", value: "" },
    { name: "billingContactPhoneExtension", label: "Billing Contact-Phone & Extension", value: "" },
    { name: "billingContactEmailAddress", label: "Billing Contact-Email Address", value: "" },
    { name: "submittalContactName", label: "Submittal Contact-Name", value: "" },
    { name: "leedGreenContactName", label: "LEED/Green Contact-Name", value: "" },
    { name: "projectManagerName", label: "Project Manager-Name", value: "" },
    { name: "projectManagerPhoneOffice", label: "Project Manager-Phone (Office)", value: "" },
    { name: "projectManagerPhoneCell", label: "Project Manager-Phone (Cell)", value: "" },
    { name: "projectManagerEmailAddress", label: "Project Manager-Email Address", value: "" },
    { name: "superintendentName", label: "Superintendent-Name", value: "" },
    { name: "superintendentPhoneCell", label: "Superintendent-Phone (Cell)", value: "" },
    { name: "superintendentEmailAddress", label: "Superintendent-Email Address", value: "" },
    { name: "oshaCompetentOnsitePersonnel", label: "OSHA Competent Onsite Personnel", value: "" },
    { name: "closeOutContactName", label: "Close Out Contact-Name", value: "" }
  ]);

  // Handle input changes
  const handleInputChange = (index: number, value: string) => {
    const updatedFormData = formData.map((field, i) =>
        i === index ? { ...field, value } : field
    );
    setFormData(updatedFormData);
  };

  // Handle form submission
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formValues = formData.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as Record<string, string>);
    console.log("Form Data:", formValues);
  };

  const p = `Form is for Subcontractor and customer so customer know who is an authorized contact person.
              Please return completed form to the company via email`;

  return (
      <WorkerLayout
          withSignature
          exportElems={[
            { type: ElementType.P, content: p },
            {type:ElementType.ListCard,cardListRows:formData.map(el=>({field:el.label,value:el.value}))}
          ]}
          pdfTitle={"Authorized Point Of Contact"}
          pdfName={"Point of Contact"}
      >

        <form onSubmit={onSubmit}>
          <BlankCard  >
            {/* Form Title */}
            <Typography variant="h5" align="center" mb={3} color="green">
              Authorized Point of Contact
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Form is for Subcontractor and customer so customer know who is an authorized contact person.
              Please return completed form to the company via email
            </Typography>

            <Grid container spacing={2}>
              {formData.map((field, index) => (
                  <Grid item xs={12} sm={6} key={field.name}>
                    <TextField
                        label={field.label}
                        fullWidth
                        variant="outlined"
                        value={field.value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </Grid>
              ))}

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </BlankCard>
        </form>
      </WorkerLayout>
  );
};

export default SubcontractorForm;
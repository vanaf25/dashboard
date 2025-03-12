"use client";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const formFields = [
  "Subcontractor Name (BrickWallCovering Name)",
  "Address: Physical",
  "Mailing Address",
  "Phone-Office (MWF)",
  "Phone-Fax",
  "Owner-Name",
  "Officers allowed to sign on owner's behalf",
  "Billing Contact-Name",
  "Billing Contact-Phone & Extension",
  "Billing Contact-Email Address",
  "Submittal Contact-Name",
  "LEED/Green Contact-Name",
  "Project Manager-Name",
  "Project Manager-Phone (Office)",
  "Project Manager-Phone (Cell)",
  "Project Manager-Email Address",
  "Superintendent-Name",
  "Superintendent-Phone (Cell)",
  "Superintendent-Email Address",
  "OSHA Competent Onsite Personnel",
  "Close Out Contact-Name"
];

const SubcontractorForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={4}>
        {/* RenovationRequestForm Title */}
        <Typography variant="h5" align="center" mb={3} color="green">
          Authorized Point of Contact
        </Typography>
        <Typography sx={{mb:1}}>
          Form is for Subcontractor and customer so customer know who is an authorized contact person.
          Please return completed form to the company via email
        </Typography>
        <Grid container spacing={2}>
          {formFields.map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Controller
                name={field}
                control={control}
                defaultValue=""
                render={({ field: controllerField }) => (
                  <TextField
                    {...controllerField}
                    label={field}
                    fullWidth
                    variant="outlined"
                  />
                )}
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
      </Box>
    </form>
  );
};

export default SubcontractorForm;

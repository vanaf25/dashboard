import React from "react";
import { Box, Grid, Typography } from "@mui/material";

interface SignaturesSectionProps {
  client?: string; // Optional prop for client's signature
  companyPhone?: string; // Optional prop for company's phone number
  companyAddress?: string; // Optional prop for company's address
}

const SignaturesSection: React.FC<SignaturesSectionProps> = ({
                                                               client = "Signature of client", // Default value for client
                                                               companyPhone,
                                                               companyAddress,
                                                             }) => {
  return (
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4}>
          {/* Signature of Client */}
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={1}>
                <Typography>{client}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ borderBottom: "1px solid #cfd8dc", width: "100%" }} />
              </Grid>
              <Grid item xs={1}>
                <Typography>Date</Typography>
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ borderBottom: "1px solid #cfd8dc", width: "100%" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Company Phone and Address */}
        {companyPhone && (
            <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <Typography>Company Phone: {companyPhone}</Typography>
              </Grid>
              <Grid item>
                <Typography>Company Address: {companyAddress}</Typography>
              </Grid>
            </Grid>
        )}
      </Box>
  );
};

export default SignaturesSection;

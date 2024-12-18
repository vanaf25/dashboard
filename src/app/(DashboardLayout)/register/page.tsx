"use client";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import PageContainer from "@/app/components/container/PageContainer";
import AuthRegister from "@/app/auth/authForms/AuthRegister";

export default function Register2() {
  return (
    <PageContainer title="Register Page" description="this is Sample page">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                position: "relative",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  left: "-125px",
                  bottom: "-100px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                  backgroundColor: "error.main",
                },
                "&:after": {
                  content: "''",
                  position: "absolute",
                  top: "-65px",
                  right: "-104px",
                  width: "200px",
                  height: "207px",
                  backgroundRepeat: "no-repeat",
                  background: "url('/images/backgrounds/shap-login.png')",
                  backgroundSize: "contain",
                },
              }}
            >
              <Card
                elevation={9}
                sx={{
                  p: 4,
                  zIndex: 9,
                  position: "relative", width: "650px",
                }}
              >
                <AuthRegister
                    title={"Register"}
                  subtitle={
                    <Stack direction="row" spacing={1} mt={3}>
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        fontWeight="400"
                      >
                        Already have an Account?
                      </Typography>
                      <Typography
                        component={Link}
                        href="/login"
                        fontWeight="500"
                        sx={{
                          textDecoration: "none",
                          color: "primary.main",
                        }}
                      >
                        Sign In
                      </Typography>
                    </Stack>
                  }
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

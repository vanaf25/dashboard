import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const router = useRouter();
    const supabase = useSupabaseClient();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleLogin = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setLoading(false);
        console.log('data:',data);
        if (error) {
            setError(error.message);
        } else {
            router.push("/");
        }
    };
    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}
            <Box mt={3}>
                <Divider />
            </Box>
            <form onSubmit={handleLogin}>
                <Stack>
                    <Box>
                        <CustomFormLabel htmlFor="username">Email</CustomFormLabel>
                        <CustomTextField
                            id="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e:any) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                        <CustomTextField
                            id="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e:any) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Stack
                        justifyContent="space-between"
                        direction={{ xs: "column", sm: "row" }}
                        alignItems="center"
                        my={2}
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={<CustomCheckbox defaultChecked />}
                                label="Remember this Device"
                            />
                        </FormGroup>
                        <Typography
                            component={Link}
                            href="/forgot-password"
                            fontWeight="500"
                            sx={{
                                textDecoration: "none",
                                color: "primary.main",
                            }}
                        >
                            Forgot Password?
                        </Typography>
                    </Stack>
                </Stack>
                {error && (
                    <Typography color="red" mb={2}>
                        {error}
                    </Typography>
                )}
                <Box>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>
                </Box>
            </form>
            {subtitle}
        </>
    );
};
export default AuthLogin;

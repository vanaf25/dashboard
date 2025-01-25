import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";
import { registerType } from "@/app/(DashboardLayout)/types/auth/auth";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {createClient} from "@/lib/supabase";
type AuthError = {
    message: string;
    status: number;
};

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // To handle errors
    const [loading, setLoading] = useState(false); // To show loading state

    const router = useRouter(); // Initialize useRouter
    const supabase=createClient();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                throw new Error(error.message); // Throw error if registration fails
            }

            // If registration is successful, redirect to the login page
            console.log('User registered successfully:', data.user); // Access the user inside data
            router.push('/auth/login'); // Redirect to login page
        } catch (error: any) {
            setError(error.message); // Set the error message from Supabase
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {title && (
                <Typography fontWeight="700" variant="h3" mb={1}>
                    {title}
                </Typography>
            )}

            {subtext}

            <Box mt={3}>
                <Divider />
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
                <Stack mb={3}>
                    <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
                    <CustomTextField
                        id="email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e:any) => setEmail(e.target.value)}
                        required
                    />

                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomTextField
                        id="password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e:any) => setPassword(e.target.value)}
                        required
                    />
                </Stack>

                {error && (
                    <Typography color="error" variant="body2" mb={2}>
                        {error}
                    </Typography>
                )}

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </Button>
            </Box>

            {subtitle}
        </>
    );
};

export default AuthRegister;

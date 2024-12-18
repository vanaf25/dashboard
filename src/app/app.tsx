"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@/app/(DashboardLayout)/layout/shared/customizer/RTL";
import { ThemeSettings } from "@/utils/theme/Theme";
import { useSelector } from 'react-redux';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SessionContextProvider,Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { AppState } from "@/store/store";
import "@/utils/i18n";
import "@/app/api/index";


const MyApp = ({ children,
                   initialSession
               }: { children: React.ReactNode,initialSession?:Session }) => {
    const theme = ThemeSettings();
    const customizer = useSelector((state: AppState) => state.customizer);
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());
    return (
        <>
            <SessionContextProvider  supabaseClient={supabaseClient} initialSession={initialSession as Session}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <RTL direction={customizer.activeDir}>
                            <CssBaseline />
                            {children}
                        </RTL>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </SessionContextProvider>

        </>
    );
};

export default MyApp;

"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeSettings } from "@/utils/theme/Theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "@/utils/i18n";
import "@/app/api/index";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient()

const MyApp = ({
                   children,
               }: {
    children: React.ReactNode;
}) => {
    const theme = ThemeSettings();
    return (
        <QueryClientProvider client={queryClient} >
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </QueryClientProvider>
    );
};
export default MyApp;
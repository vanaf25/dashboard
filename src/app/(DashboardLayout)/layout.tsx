"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Customizer from "./layout/shared/customizer/Customizer";
import Navigation from "./layout/horizontal/navbar/Navigation";
import HorizontalHeader from "./layout/horizontal/header/Header";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import {createClient} from "@/lib/supabase";
import { usePathname } from 'next/navigation'
const PageWrapper = styled("div")(() => ({
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent",
}));

interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    // @ts-ignore
    const customizer = useSelector((state: AppState) => state.customizer);
    const theme = useTheme();
    const MainWrapper = styled("div")(() => ({
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        padding: customizer.isHorizontal ? 0 : "20px",
    }));
    const publicRoutes = ["/login", "/register", "/forgot-password"];
    const pathname = usePathname();
    return (
        <MainWrapper>
            <title>System99</title>
            <Box width="100%">
                {/* Render Sidebar only if user is logged in */}
                {!customizer.isHorizontal && !publicRoutes.includes(pathname) && <Sidebar />}

                {customizer.isHorizontal ? <HorizontalHeader /> : ""}
                {customizer.isHorizontal ? <Navigation /> : ""}
                <PageWrapper
                    className="page-wrapper"
                    sx={{
                        ...(customizer.isCollapse && {
                            [theme.breakpoints.up("lg")]: {
                                ml: `${customizer.MiniSidebarWidth}px`,
                            },
                        }),
                        ...(!customizer.isCollapse && !customizer.isHorizontal && {
                            [theme.breakpoints.up("lg")]: {
                                ml: `${customizer.SidebarWidth}px`,
                            },
                        }),
                    }}
                >
                    <Container
                        sx={{
                            maxWidth:
                                customizer.isLayout === "boxed" ? "lg" : "100%!important",
                        }}
                    >
                        {/* BrickWallCovering Content */}
                        <Box sx={{ minHeight: "calc(100vh - 170px)", py: { sm: 3 } }}>
                            {children}
                        </Box>
                    </Container>
                    <Customizer />
                </PageWrapper>
            </Box>
        </MainWrapper>
    );
}

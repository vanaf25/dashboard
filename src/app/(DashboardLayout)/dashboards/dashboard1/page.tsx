"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageContainer from "@/app/components/container/PageContainer";

// components
import CongratulationsCard from "@/app/components/dashboards/dashboard1/CongratulationsCard";
import Payments from "@/app/components/dashboards/dashboard1/Payments";
import Products from "@/app/components/dashboards/dashboard1/Products";
import LatestDeals from "@/app/components/dashboards/dashboard1/LatestDeals";
import Customers from "@/app/components/dashboards/dashboard1/Customers";
import ProductTable from "@/app/components/dashboards/dashboard1/ProductTable";
import VisitUsa from "@/app/components/dashboards/dashboard1/VisitUsa";
import LatestReviews from "@/app/components/dashboards/dashboard1/LatestReviews";
import Welcome from "@/app/(DashboardLayout)/layout/shared/welcome/Welcome";
import BlankCard from "@/app/components/shared/BlankCard";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box>
      <BlankCard>
        <Image
            src="/logos/mainLogo.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
        />
      </BlankCard>
    </Box>
  </PageContainer>
  );
}

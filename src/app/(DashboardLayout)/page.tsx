"use client";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import PageContainer from "@/app/components/container/PageContainer";
import BlankCard from "@/app/components/shared/BlankCard";
import Image from "next/image";
import Button from "@mui/material/Button";
import FinancialDocuments from "@/app/components/financialDocuments/financialDocuments";
import CreateNew from "@/app/components/createNew/createNew";
import SupportComponent from "@/app/components/SupportComponent/SupportComponent";
import BigCalendar from "@/app/(DashboardLayout)/apps/calendar/page";
import Leads from "@/app/components/Leads/Leads";
import Projects from "@/app/components/Projects/Projects";
import {useDispatch} from "@/store/hooks";
import {useUser} from "@supabase/auth-helpers-react";
import {fetchProjects} from "@/store/apps/dasbhoard/dashboardSlice";
import Loading from "@/app/(DashboardLayout)/loading";
export default function Dashboard() {
    const dispatch=useDispatch();
    const user=useUser();
    const [isLoading,setIsLoading]=useState(true)
   useEffect(()=>{
       setIsLoading(true)
       if(user){
           dispatch(fetchProjects(user?.id)).then(res=>{
               setIsLoading(false);
           })
       }
   },[]);
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
        {isLoading ? <Loading/>:<Box>
            <BlankCard sx={{display:"flex",justifyContent:"space-between",padding:"30px",mb:1}}>
                <Box sx={{display:"flex",gap:2}}>
                    <Image
                        src="/images/logos/mainLogo.jpg"
                        width={50}
                        height={50}
                        alt="Pictur"
                    />
                    <h2>Exterior Restoration Services LLC</h2>
                </Box>
                <Button>
                    Invite Team Member
                </Button>
            </BlankCard>
            <Leads/>
            <Projects/>
            {/*
             <BlankCard sx={{display:"flex",justifyContent:"space-between",mb:2}}>
                 <Box>
                     <h2>Quickstart Quide</h2>
                 </Box>
                 <Box
                     sx={{
                         display: 'flex',
                         alignItems: 'center',
                         width: '70%',
                         gap:2
                     }}
                 >
                      Select
                     <Select defaultValue="gettingStarted" sx={{ minWidth: 150 }}>
                         <MenuItem value="gettingStarted">Getting Started</MenuItem>
                         <MenuItem value="option1">Option 1</MenuItem>
                         <MenuItem value="option2">Option 2</MenuItem>
                     </Select>

                      Secondary Typography
                     <Typography color="text.secondary">8 of 8 Complete</Typography>

                      Fill Bar
                     <Box sx={{ flex: 1 }}>
                         <LinearProgress
                             variant="determinate"
                             value={100}
                             sx={{
                                 height: 8,
                                 backgroundColor: '#e0e0e0',
                                 '& .MuiLinearProgress-bar': {
                                     backgroundColor: 'green',
                                 },
                             }}
                         />
                     </Box>
                 </Box>

             </BlankCard>
*/}
            <BigCalendar/>
            <FinancialDocuments/>
            <CreateNew/>
            <SupportComponent/>
        </Box>}
    </PageContainer>
  );
}

"use client";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import PageContainer from "@/app/components/container/PageContainer";
import BlankCard from "@/app/components/shared/BlankCard";
import Image from "next/image";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import FinancialDocuments from "@/app/components/financialDocuments/financialDocuments";
import CreateNew from "@/app/components/createNew/createNew";
import FastSavePayments from "@/app/components/FastSavePayments/FastSavePayments";
import SupportComponent from "@/app/components/SupportComponent/SupportComponent";
import BigCalendar from "@/app/(DashboardLayout)/apps/calendar/page";
interface Status{
    title:string,
    description:string,
    status:string
}
const StatusCard:React.FC<Status>=
    ({ title, description, status }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                border: '1px solid #ccc',
                overflow: 'hidden',
                width: '300px',
                boxShadow: 2,
                margin: 2, // Space between cards
            }}
        >
            {/* Border Top */}
            <Box
                sx={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#1976d2', // Replace with desired color
                }}
            ></Box>

            {/* Content */}
            <Box sx={{ padding: 2, textAlign: 'center', flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography color="text.secondary">{description}</Typography>
            </Box>

            {/* White Status Box */}
            <Box
                sx={{
                    display:"inline-block",
                    padding: '10px',
                    textAlign: 'center',
                    marginBottom:"10px",
                }}
            >
                <Typography variant="body1" color="text.primary">
                    Status: {status}
                </Typography>
            </Box>
        </Box>
    );
};
const LeadItem:React.FC<Status> = ({ title, description, status }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
            }}
        >
            {/* Title and Description */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography color="text.secondary">{description}</Typography>
            </Box>

            {/* Status */}
            <Chip label={status} color="primary" />
        </Box>
    );
};

const LeadsList = () => {
    const leads = Array.from({ length: 12 }, (_, index) => ({
        title: `Lead ${index + 1}`,
        description: 'This is the lead description.',
        status: index % 2 === 0 ? 'Meeting Scheduled' : 'In Progress', // Alternating statuses
    }));

    return (
        <BlankCard sx={{mb:2}}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                <Typography variant="h4">Leads (12)</Typography>
                <Button variant="contained">Create New Lead</Button>
            </Box>

            {/* Leads List */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {leads.map((lead, index) => (
                    <React.Fragment key={index}>
                        <LeadItem title={lead.title} description={lead.description} status={lead.status} />
                        {/* Add a Divider unless it's the last item */}
                        {index < leads.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </Box>
        </BlankCard>
    );
};
export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
    const cards = Array.from({ length: 12 }, (_, index) => ({
        title: `Card ${index + 1}`,
        description: 'This is a secondary description.',
        status: index % 2 === 0 ? 'Active' : 'Inactive', // Alternating statuses
    }));
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
        <Box>
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
            <BlankCard sx={{mb:2}}>
                <Box sx={{display: "flex",justifyContent:"space-between"}}>
                    <h2>Projects (12)</h2>
                    <Button>Create  new project</Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    {cards.map((card, index) => (
                        <StatusCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            status={card.status}
                        />
                    ))}
                </Box>
            </BlankCard>
            <LeadsList/>
            <BigCalendar/>
            <FinancialDocuments/>
            <CreateNew/>
{/*
            <FastSavePayments/>
*/}
            <SupportComponent/>
        </Box>
    </PageContainer>
  );
}

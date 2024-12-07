import React, { useState } from 'react';
import {
    Box,
    Button,
    Chip,
    Divider,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import BlankCard from "@/app/components/shared/BlankCard";

// Define types for list items and tabs
interface ListItem {
    title: string;
    description: string;
    price: string;
    status: string;
    statusColor: 'success' | 'warning' | 'info' | 'error';
}

interface TabData {
    label: string;
    items: ListItem[];
}

// Props type for TabContent
interface TabContentProps {
    items: ListItem[];
}

const TabContent: React.FC<TabContentProps> = ({ items }) => (
    <Box>
        {items.map((item, index) => (
            <Box key={index}>
                {/* List Item */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 2,
                    }}
                >
                    {/* Left-aligned content */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {item.title}
                        </Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            ${item.price}
                        </Typography>
                    </Box>

                    {/* Right-aligned Chip */}
                    <Chip label={item.status} color={item.statusColor} />
                </Box>

                {/* Divider */}
                {index < items.length - 1 && <Divider />}
            </Box>
        ))}
    </Box>
);

const FinancialDocuments: React.FC = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => setTabIndex(newIndex);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handlePopoverClose = () => setAnchorEl(null);

    const isPopoverOpen = Boolean(anchorEl);

    // Define tabs data
    const tabs: TabData[] = [
        {
            label: 'Recent',
            items: [
                { title: 'Recent Doc 1', description: 'This is recent', price: '150.00', status: 'Completed', statusColor: 'success' },
            ],
        },
        {
            label: 'Estimates',
            items: [
                { title: 'Estimate 1', description: 'Estimate details', price: '250.00', status: 'Pending', statusColor: 'warning' },
            ],
        },
        {
            label: 'Invoices',
            items: [
                { title: 'Page 1', description: 'Page details', price: '400.00', status: 'Paid', statusColor: 'success' },
            ],
        },
        {
            label: 'Change Orders',
            items: [
                { title: 'Change Order 1', description: 'Change Order details', price: '75.00', status: 'Pending', statusColor: 'warning' },
            ],
        },
        {
            label: 'Purchase Orders',
            items: [],
        },
    ];

    return (
        <BlankCard sx={{mt:2}}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                <Typography variant="h4">Financial Documents (8)</Typography>
                <Button variant="contained" onClick={handlePopoverOpen}>
                    Create New
                </Button>
                <Menu anchorEl={anchorEl} open={isPopoverOpen} onClose={handlePopoverClose}>
                    <MenuItem onClick={handlePopoverClose}>Create Document</MenuItem>
                    <MenuItem onClick={handlePopoverClose}>Create Invoice</MenuItem>
                    <MenuItem onClick={handlePopoverClose}>Create Estimate</MenuItem>
                </Menu>
            </Box>

            {/* Tabs */}
            <Tabs value={tabIndex} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={<Chip label={`${tab.label} (${tab.items.length})`} />}
                        disabled={tab.items.length === 0} // Disable tab if no items
                    />
                ))}
            </Tabs>

            {/* Tab Content */}
            <Box sx={{ marginTop: 3 }}>
                <TabContent items={tabs[tabIndex].items} />
            </Box>
        </BlankCard>
    );
};

export default FinancialDocuments;

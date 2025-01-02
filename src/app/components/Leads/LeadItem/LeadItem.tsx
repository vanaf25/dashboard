import React, { useState } from 'react';
import { Box, Typography, Chip, Button, Popover, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import {Client} from "@/app/components/Leads/Leads";
import {useDispatch} from "@/store/hooks";
import {changeProject} from "@/store/apps/dasbhoard/dashboardSlice";
import Link from 'next/link';
type LeadItemProps=Client & { onEdit: (isDateOnly?:boolean) => void; onDelete: () => void }
const LeadItem: React.FC<LeadItemProps> = ({
                                                                                       id,
                                                                                       name,
                                                                                       status,
                                                                                       onEdit,
    project,
    meetingDate,
    documents,
                                                                                       onDelete,
    ...rest
                                                                                   }) => {
    const supabase = useSupabaseClient();
    const statuses: string[] = ['In Progress', 'Completed'];
    const [currentStatus, setCurrentStatus] = useState(status);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch=useDispatch();
    const handleStatusChange = async (newStatus: string) => {
        setCurrentStatus(newStatus);
        setAnchorEl(null);
        // Update status in Supabase
        try {
            const { error } = await supabase
                .from('customers')
                .update({ status: newStatus })
                .eq('id', id);
            if (error) {
                console.error('Error updating status:', error.message);
            }
            else{
                dispatch(changeProject({id,name,status:newStatus,project,...rest}))
                /*if(newStatus==="project"){
                    dispatch(addProject())
                    removeLead();
                }*/
            }
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };
    const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {currentStatus!=="project" ?
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 2,
                    }}
                >
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Box onClick={()=>onEdit()} sx={{ cursor: 'pointer',mr:2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold',mb:2 }}>
                                {name}
                            </Typography>
                            <Typography>
                                {project}
                            </Typography>
                        </Box>
                        {meetingDate ? <Box sx={{cursor:"pointer"}}>
                            <Typography onClick={()=>onEdit(true)}>Meeting Date:
                                {new Date(meetingDate as Date).toLocaleString()}</Typography>
                        </Box>:<Button onClick={()=>onEdit(true)}>Create meeting</Button>}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Chip
                            label={currentStatus || 'In progress'}
                            color="primary"
                            onClick={handleOpenPopover}
                            sx={{ cursor: 'pointer' }}
                        />
                        <Button color="error" variant="outlined" onClick={onDelete}>
                            Delete
                        </Button>
                        {documents?.length ? <Link href={`/quote/${documents[0].id}`}>
                            <Button  variant="outlined">
                                View Quote
                            </Button>
                        </Link>:<Link href={`/newQuote/${id}?type=${project}`} >
                            <Button  variant="outlined">
                                Make Quote
                            </Button>
                        </Link>}
                    </Box>

                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClosePopover}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <List>
                            {statuses.map((status) => (
                                <ListItem key={status} disablePadding>
                                    <ListItemButton onClick={() => handleStatusChange(status)}>
                                        <ListItemText primary={status} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Popover>
                </Box>:""}
        </>

    );
};

export default LeadItem;

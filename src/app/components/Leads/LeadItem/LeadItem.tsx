import React, { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    Button,
    Popover,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useDispatch } from '@/store/hooks';
import { changeProject } from '@/store/apps/dasbhoard/dashboardSlice';
import { Client } from '@/app/components/Leads/Leads';
import { contractData } from '@/app/consts/contractData/contractData';
import ProjectPopup from '../../ProjectPopup/ProjectPopup';

type LeadItemProps = Client & {
    onEdit: (isDateOnly?: boolean) => void;
    onDelete: () => void;
};

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
    const router = useRouter();
    const statuses: string[] = ['In Progress', 'Completed'];
    const [currentDocumentId,setCurrentDocument]=useState<string | null>(
        null)
    const [isProjectPopup,setIsProjectPopup]=useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch();

    const handleStatusChange = async (newStatus: string) => {
        setCurrentStatus(newStatus);
        setAnchorEl(null);
        try {
            const { error } = await supabase
                .from('customers')
                .update({ status: newStatus })
                .eq('id', id);
            if (error) {
                console.error('Error updating status:', error.message);
            } else {
                dispatch(changeProject({ id, name, status: newStatus, project, ...rest }));
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
    const handleQuoteSelect = (event: any) => {
        const selectedType = event.target.value as string;
        router.push(`/newQuote/${id}?type=${selectedType}`);
    };
    const handleDocumentSelect = (event: any) => {
        const selectedDocId = event.target.value as string;
        router.push(`/quote/${selectedDocId}`);
    };
    return (
        <>
            {currentStatus !== 'project' && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box onClick={() => onEdit()} sx={{ cursor: 'pointer', mr: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                {name}
                            </Typography>
                            <Typography>{project}</Typography>
                        </Box>
                        {meetingDate ? (
                            <Box sx={{ cursor: 'pointer' }}>
                                <Typography onClick={() => onEdit(true)}>
                                    Meeting Date: {new Date(meetingDate as Date).toLocaleString()}
                                </Typography>
                            </Box>
                        ) : (
                            <Button onClick={() => onEdit(true)}>Create meeting</Button>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Chip
                            label={currentStatus || 'In progress'}
                            color="primary"
                            onClick={handleOpenPopover}
                            sx={{ cursor: 'pointer' }}
                        />
                        <Button color="error" variant="outlined">
                            Button
                        </Button>
                        <FormControl sx={{ width: 130 }}>
                            <InputLabel id={`quote-select-label-${id}`}>New Quote</InputLabel>
                            <Select
                                labelId={`quote-select-label-${id}`}
                                id={`quote-select-${id}`}
                                onChange={handleQuoteSelect}
                                defaultValue=""
                            >
                                {contractData.map((c) => (
                                    <MenuItem key={c.name} value={c.name}>
                                        {c.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {documents?.length ? (
                            <>
                                <FormControl sx={{ width: 130 }}>
                                    <InputLabel id={`quote-view-label-${id}`}>View Quotes</InputLabel>
                                    <Select
                                        labelId={`quote-view-label-${id}`}
                                        id={`quote-view-${id}`}
                                        onChange={handleDocumentSelect}
                                        defaultValue=""
                                    >
                                        {documents.map((c) => (
                                            <MenuItem key={c.id} value={c.id}>
                                                {c.service}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ width: 130 }}>
                                    <InputLabel id={`quote-view-label-${id}`}>Move to Projects</InputLabel>
                                    <Select
                                        labelId={`quote-view-label-${id}`}
                                        id={`quote-view-${id}`}
                                        defaultValue=""
                                        onChange={(e)=>{
                                            setCurrentDocument(e.target.value);
                                            setIsProjectPopup(true)
                                        }}
                                    >
                                        {documents.map((c) => (
                                            <MenuItem key={c.id} value={c.id}>
                                                {c.service}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </>
                        ) : (
                            ''
                        )}
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
                </Box>
            )}
            {isProjectPopup && currentDocumentId && <ProjectPopup
                id={currentDocumentId}
                name={name}
                open={isProjectPopup} close={()=>setIsProjectPopup(false)}/>}
        </>
    );
};

export default LeadItem;

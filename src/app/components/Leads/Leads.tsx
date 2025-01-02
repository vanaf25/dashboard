import React, { useState, ChangeEvent, useEffect } from 'react';
import BlankCard from "@/app/components/shared/BlankCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import MenuItem from "@mui/material/MenuItem";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import LeadItem from "@/app/components/Leads/LeadItem/LeadItem";
import {CALCULATORS} from "@/app/consts/calculators";
import {fetchCustomers} from "@/app/apis/usersApi";
import {useDispatch, useSelector} from "@/store/hooks";
import {addProject, changeProject, deleteProject} from "@/store/apps/dasbhoard/dashboardSlice";
import LeadPopupForm from "@/app/components/LeadPopupForm/LeadPopupForm";

export interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    status: string;
    meetingDate?: any;
    project:string
}
interface Document{
    id:string
}
export  type Client = FormData & { id: string; created_at: string; created_by: string,documents:Document[] };
const Leads: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [isDateOnly,setIsDateOnly]=useState(false);
    const leads:Client[]=useSelector(state=>state.dashboard.projects
    )?.filter((el:Client)=>el.status!=="project");
    const [isEditMode, setIsEditMode] = useState(false);
    const [defaultLead,setDefaultLead]=useState<Client | null >(null)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setDefaultLead(null);
        setIsEditMode(false);
        setIsDateOnly(false);
    };
    const supabase = useSupabaseClient();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
/*
    const loadCustomers = async () => {
        if (user?.id) {
            try {
                setIsLoading(true);
                const data = await fetchCustomers(user.id);
                setLeads(data);
            } catch (err: any) {
                console.log('Error:', err);
                setError(err?.message as string);
            } finally {
                setIsLoading(false);
            }
        }
    };
*/
    const handleClickEdit = (lead: Client,isDateOnly?:boolean) => {
        setIsEditMode(true);
        setDefaultLead(lead);
        handleOpen();
        setIsDateOnly(!!isDateOnly);
    };
    const handleDelete = async (leadId: string) => {
        try {
            const { error } = await supabase.from('customers').delete().eq('id', leadId);
            if (error) throw error;
            dispatch(deleteProject(leadId));
        } catch (err: any) {
            console.error('Error deleting lead:', err.message);
            setError(err.message);
        }
    };
    const dispatch=useDispatch();
    return (
        <BlankCard sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                <Typography variant="h4">Leads ({leads.length})</Typography>
                <Button variant="contained" onClick={handleOpen}>Create New Lead</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {isLoading ? (
                    <Typography>Loading...</Typography>
                ) : (
                    leads.map((lead, index) => (
                        <React.Fragment key={index}>
                            <LeadItem
                                {...lead}
                                onEdit={(isDateOnly?:boolean) => handleClickEdit(lead,isDateOnly)}
                                onDelete={() => handleDelete(lead.id)}
                            />
                            {index < leads.length - 1 && <Divider />}
                        </React.Fragment>
                    ))
                )}
            </Box>
            {/* Popup Form */}
            <LeadPopupForm dateOnly={isDateOnly} defaultLead={defaultLead} isEditMode={isEditMode}  open={open}  close={handleClose} />
        </BlankCard>
    );
}
export default Leads;

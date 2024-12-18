import React, { useState, ChangeEvent, useEffect } from 'react';
import BlankCard from "@/app/components/shared/BlankCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import MenuItem from "@mui/material/MenuItem";

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    status: string;
}

type Client = FormData & { id: string; created_at: string; created_by: string };

const fetchCustomers = async (userId: string) => {
    const response = await fetch(`/api/leads/getLeads?userId=${userId}`, {
        method: "GET",
    });
    if (!response.ok) {
        throw new Error('Failed to fetch customers');
    }
    const data = await response.json();
    return data.customers;
};

const LeadItem: React.FC<Client & { onEdit: () => void; onDelete: () => void }> = ({ name, status, onEdit, onDelete }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
            }}
        >
            <Box onClick={onEdit} sx={{ cursor: 'pointer' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip label={status || "In progress"} color="primary" />
                <Button color="error" variant="outlined" onClick={onDelete}>
                    Delete
                </Button>
            </Box>
        </Box>
    );
};

const Leads: React.FC = () => {
    const [leads, setLeads] = useState<Client[]>([]);
    const [open, setOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        status: "",
    });

    const statuses: string[] = ['Meeting Scheduled', 'In Progress', 'Completed'];
    const inputFields = [
        { label: 'Name', name: 'name' },
        { label: 'Email', name: 'email' },
        { label: 'Phone', name: 'phone' },
        { label: 'Address', name: 'address' },
        { label: 'City', name: 'city' },
        { label: 'State', name: 'state' },
        { label: 'Zip', name: 'zip' },
    ];

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIsEditMode(false);
        setFormData({ name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', status: "" });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const user = useUser();
    const supabase = useSupabaseClient();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
        loadCustomers();
    }, [user?.id]);

    const [currentLeadId, setCurrentLeadId] = useState<string | null>(null);

    const handleClickEdit = (lead: Client) => {
        setIsEditMode(true);
        setCurrentLeadId(lead.id);
        setFormData({
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            address: lead.address,
            city: lead.city,
            state: lead.state,
            zip: lead.zip,
            status: lead.status,
        });
        handleOpen();
    };

    const handleDelete = async (leadId: string) => {
        try {
            const { error } = await supabase.from('customers').delete().eq('id', leadId);
            if (error) throw error;
            setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== leadId));
        } catch (err: any) {
            console.error('Error deleting lead:', err.message);
            setError(err.message);
        }
    };

    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        if (isEditMode) {
            const { data, error } = await supabase
                .from('customers')
                .update({ ...formData })
                .eq('id', currentLeadId)
                .single();
            if (!error) {
                setLeads((prevLeads) =>
                    prevLeads.map((lead) => (lead.id === currentLeadId ? { ...lead, ...formData } : lead))
                );
                handleClose();
            } else {
                setFormError(error.details);
            }
        } else {
            const { data, error } = await supabase
                .from('customers')
                .insert([{ created_by: user?.id as string, ...formData }])
                .single();
            if (!error) {
                loadCustomers();
                handleClose();
            } else {
                setFormError(error.details);
            }
        }
        setIsSubmitting(false);
    };

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
                                onEdit={() => handleClickEdit(lead)}
                                onDelete={() => handleDelete(lead.id)}
                            />
                            {index < leads.length - 1 && <Divider />}
                        </React.Fragment>
                    ))
                )}
            </Box>

            {/* Popup Form */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>{isEditMode ? 'Edit Lead' : 'Create New Lead'}</DialogTitle>
                <DialogContent>
                    {inputFields.map((field) => (
                        <TextField
                            key={field.name}
                            fullWidth
                            margin="normal"
                            label={field.label}
                            name={field.name}
                            value={formData[field.name as keyof FormData]}
                            onChange={handleChange}
                        />
                    ))}
                    <TextField
                        fullWidth
                        margin="normal"
                        select
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </TextField>
                    {formError && <Typography color={"error"}>{formError}</Typography>}
                </DialogContent>
                <DialogActions>
                    <Button disabled={isSubmitting} onClick={handleClose}>Cancel</Button>
                    <Button disabled={isSubmitting} variant="contained" onClick={handleSubmit}>
                        {isEditMode ? 'Save Changes' : 'Save'}
                    </Button>
                </DialogActions>
            </Dialog>
        </BlankCard>
    );
};

export default Leads;

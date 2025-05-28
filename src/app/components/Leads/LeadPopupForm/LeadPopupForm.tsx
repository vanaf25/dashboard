import React, {ChangeEvent, useEffect, useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {addProject, changeProject} from "@/store/apps/dashboard/dashboardSlice";
import {useDispatch} from "@/store/hooks";
import {Client, FormData} from "../Leads"
import {contractData} from "@/app/consts/contractData/contractData";
import {createClient} from "@/lib/supabase";

interface LeadPopupFormProps{
   open:boolean,
    close:()=>void,
    isEditMode:boolean,
    defaultLead:Client | null,
    dateOnly?:boolean
}
const LeadPopupForm:React.FC<LeadPopupFormProps> = ({open,close,isEditMode,defaultLead,dateOnly}) => {
    const currentLeadId=defaultLead?.id
    const [formError, setFormError] = useState("");
    const [formData, setFormData] = useState<FormData>({
        name: defaultLead?.name || "",
        email: defaultLead?.email || "",
        phone: defaultLead?.phone || "",
        address: defaultLead?.address || "",
        city: defaultLead?.city || "",
        state: defaultLead?.state || "",
        zip: defaultLead?.zip || "",
        status: defaultLead?.status || "",
        meetingDate: defaultLead?.meetingDate ? dayjs(defaultLead.meetingDate) : null,
        project: defaultLead?.project || "",
    });
    useEffect(()=>{
        setFormData({
            name: defaultLead?.name || "",
            email: defaultLead?.email || "",
            phone: defaultLead?.phone || "",
            address: defaultLead?.address || "",
            city: defaultLead?.city || "",
            state: defaultLead?.state || "",
            zip: defaultLead?.zip || "",
            status: defaultLead?.status || "",
            meetingDate: defaultLead?.meetingDate  ? dayjs(defaultLead.meetingDate) : null,
            project: defaultLead?.project || "",
        })
    },[defaultLead])
    const [isSubmitting, setIsSubmitting] = useState(false);
    const inputFields = [
        { label: 'Name', name: 'name' },
        { label: 'Email', name: 'email' },
        { label: 'Phone', name: 'phone' },
        { label: 'Address', name: 'address' },
        { label: 'City', name: 'city' },
        { label: 'State', name: 'state' },
        { label: 'Zip', name: 'zip' },
    ];
    const [isMeetingOpen,setIsMeetingOpen]=useState(false);
    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!formData.name.trim()) errors.name = "Name is required.";
  /*      if (!formData.email.trim()) errors.email = "Email is required.";
        if (!formData.phone.trim()) errors.phone = "Phone is required.";
        if (!formData.address.trim()) errors.address = "Address is required.";
        if (!formData.city.trim()) errors.city = "City is required.";
        if (!formData.state.trim()) errors.state = "State is required.";
        if (!formData.zip.trim()) errors.zip = "Zip is required.";
        if (!formData.status.trim()) errors.status = "Status is required.";*/
        if ((isMeetingOpen || dateOnly)  && !formData.meetingDate) {
            errors.meetingDate = "Meeting Date is required.";
        }
        if (!formData.project.trim()) errors.project = "Project is required.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleClose = () => {
        close()
        setFormData({ name: '', email: '',
            phone: '', address: '', city: '', state: '',
            zip: '', status: "", meetingDate: null,project:"",
        });
    };
    const statuses: string[] = ['Meeting Scheduled in Home',
        "Meeting Scheduled Online",'In Progress',"Completed"];
    const handleDateChange = (newDate: Dayjs | null) => {
        setFormData((prev) => ({ ...prev, meetingDate: newDate }));
    };
    const dispatch=useDispatch();
    const supabase = createClient();
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async () => {
        if(!validateForm()) return;
        setIsSubmitting(true);
        /*let formState=Object.fromEntries(Object.entries(formData)
            .filter(el=>el[0]!=="meetingDate"))*/
        const meetingDate=formData.meetingDate?.toISOString();
        let formState={...formData,meetingDate};
        if (isEditMode) {
            if(dateOnly) formState.status="Meeting Scheduled"

            const { data, error } = await supabase
                .from('customers')
                .update({ ...formState })
                .eq('id', currentLeadId)
                .single();
            if (!error) {
                /* setLeads((prevLeads) =>
                     prevLeads.map((lead) => (lead.id === currentLeadId ? { ...lead, ...formData } : lead))
                 );*/
                dispatch(changeProject({id:currentLeadId,...formState}))
                handleClose();
            } else {
                setFormError(error.details);
            }
        } else {
            const { data: user } = await supabase.auth.getUser();
            console.log('currentUser:',user);
            const { data, error } = await supabase
                .from('customers')
                .insert([{ created_by: user?.user?.id as string, ...formState}])
                .select()
                .single();
            if (!error) {
                dispatch(addProject(data));
                /*
                                if(meetingDate){
                                    const { data:meeting, error } = await supabase
                                        .from('meetings') // Specify the table
                                        .insert({client_id:data.id,date:meetingDate}) // Insert the data
                                        .select() // Select the inserted data
                                        .single();
                                    console.log('meeting:',meeting);
                                }
                */
                handleClose();
            } else {
                setFormError(error.details);
            }
        }
        setIsSubmitting(false);
    };
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>{isEditMode ? 'Edit Lead' : 'Create New Lead'}</DialogTitle>
            <DialogContent>
                {!dateOnly && <Button onClick={()=>setIsMeetingOpen(prevState=>!prevState)}
                        fullWidth sx={{mb:2}}>{isMeetingOpen ? "Cancel Meeting":"Create Meeting"}</Button>}
                {(isMeetingOpen || dateOnly) && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Meeting Date"
                            value={formData.meetingDate}
                            onChange={handleDateChange}
                            minDate={dayjs()}
                        />
                        <TimePicker
                            label="Meeting Time"
                            value={formData.meetingDate}
                            onChange={handleDateChange}
                        />
                    </LocalizationProvider>
                )}
                {formErrors["meetingDate"] && <Typography color={"error"}>
                    Meeting date is required
                </Typography> }
                {formError && <Typography color="error">{formError}</Typography>}
                {!dateOnly && <>
                    <TextField
                        fullWidth
                        margin="normal"
                        select
                        label="Project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        error={Boolean(formErrors.project)}
                        helperText={formErrors.project || ''}
                    >
                        {contractData.map(el=>el.name).map((project) => (
                            <MenuItem key={project} value={project}>
                                {project}
                            </MenuItem>
                        ))}
                    </TextField>
                    {inputFields.map((field) => (
                        <TextField
                            key={field.name}
                            fullWidth
                            margin="normal"
                            label={field.label}
                            name={field.name}
                            value={formData[field.name as keyof FormData]}
                            onChange={handleChange}
                            error={Boolean(formErrors[field.name])}
                            helperText={formErrors[field.name] || ''}
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
                        error={Boolean(formErrors.status)}
                        helperText={formErrors.status || ''}
                    >
                        {statuses.map((status) => (
                            <MenuItem key={status} value={status}>
                                {status}
                            </MenuItem>
                        ))}
                    </TextField>
                </>}
            </DialogContent>
            <DialogActions>
                <Button disabled={isSubmitting} onClick={handleClose}>Cancel</Button>
                <Button disabled={isSubmitting} variant="contained" onClick={handleSubmit}>
                    {isEditMode ? 'Save Changes' : 'Save'}
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default LeadPopupForm;
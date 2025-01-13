import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useSelector } from "@/store/hooks";
import { Client } from "@/app/components/Leads/Leads";
import { useForm, Controller } from "react-hook-form";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import ProjectPopup from "@/app/components/ProjectPopup/ProjectPopup";

interface ProjectPopupForm {
    close: () => void;
    open: boolean;
}

const CreateProjectPopup: React.FC<ProjectPopupForm> = ({ close, open }) => {
    const handleClose = () => {
        close();
    };
    const leads: Client[] = useSelector((state) => state.dashboard.projects);
    const [currentLead, setCurrentLead] = useState<Client | null>(null);
    const [data,setData]=useState<any>(null);

    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            customer: "",
            document: "",
        },
    });

    const selectedCustomer = watch("customer");

    const onSubmit = (data: any) => {
        console.log("Form data submitted:", data);
        setData(data);
    };

    React.useEffect(() => {
        const selectedLead = leads.find((lead) => lead.name === selectedCustomer);
        setCurrentLead(selectedLead || null);
    }, [selectedCustomer, leads]);

    return (
        <>
            {data ? <ProjectPopup id={data.document} open={!!data} name={data.customer}
                                  close={()=>{
                                      setData(null)
                                      handleClose();
                                  }}  />:<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogContent>
                    <DialogTitle>Create New Project</DialogTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="customer-label">Choose Lead</InputLabel>
                            <Controller
                                name="customer"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        labelId="customer-label"
                                        {...field}
                                        label="Customer"
                                        displayEmpty
                                        required
                                    >
                                        {leads
                                            .filter((lead) => lead?.documents?.length)
                                            .map((lead) => (
                                                <MenuItem key={lead.id} value={lead.name}>
                                                    {lead.name}
                                                </MenuItem>
                                            ))}
                                    </Select>
                                )}
                            />
                        </FormControl>

                        {currentLead && (
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="document-label">Choose a quote type</InputLabel>
                                <Controller
                                    name="document"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            labelId="document-label"
                                            {...field}
                                            label="Document"
                                            displayEmpty
                                            required
                                        >
                                            {currentLead.documents.map((doc) => (
                                                <MenuItem key={doc.id} value={doc.id}>
                                                    {doc.service}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        )}

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>}
        </>
    );
};

export default CreateProjectPopup;

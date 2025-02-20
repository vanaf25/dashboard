"use client";
import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Typography,
    IconButton,
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import BlankCard from "@/app/components/shared/BlankCard";

// Define the structure of the form data
interface FormData {
    hiredProfessional: string;
    planningDuration: string;
    startDate: string;
    budget: string;
    specialInstructions: string;
    trashLocation: string;
    toolsLocation: string;
    canUseWater: string;
    canUseElectric: string;
    restroomAccommodation: string;
    hasSprinklerSystem: string;
    hasDog: string;
    parkingLocation: string;
    customerRequests: string[]; // Dynamic customer requests
}
interface RenovationRequestFormProps{
    onUpdate:(data:{field:string,value:string}[])=>void
}
const RenovationRequestForm: React.FC<RenovationRequestFormProps> = ({onUpdate}) => {
    const [formData, setFormData] = useState<FormData>({
        hiredProfessional: '',
        planningDuration: '',
        startDate: '',
        budget: '',
        specialInstructions: '',
        trashLocation: '',
        toolsLocation: '',
        canUseWater: '',
        canUseElectric: '',
        restroomAccommodation: '',
        hasSprinklerSystem: '',
        hasDog: '',
        parkingLocation: '',
        customerRequests: [''],
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name) {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleCustomerRequestChange = (index: number, value: string) => {
        const updatedRequests = [...formData.customerRequests];
        updatedRequests[index] = value;
        setFormData({ ...formData, customerRequests: updatedRequests });
    };

    const addCustomerRequest = () => {
        setFormData({ ...formData, customerRequests: [...formData.customerRequests, ''] });
    };

    const removeCustomerRequest = (index: number) => {
        const updatedRequests = formData.customerRequests.filter((_, i) => i !== index);
        setFormData({ ...formData, customerRequests: updatedRequests });
    };
    const selectFields = [
        {
            label: "Hired a Professional Renovator?",
            name: "hiredProfessional",
            options: ["Yes", "No"],
        },
        {
            label: "How long have you been planning to get the work done?",
            name: "planningDuration",
            options: ["few days", "a few weeks", "few months", "year or more"],
        },
        {
            label: "Any special instructions for the Install team?",
            name: "specialInstructions",
            options: ["Yes", "No"],
        },
        {
            label: "Where is the designated location for the trash?",
            name: "trashLocation",
            options: ["Trash Trailer", "NO TRASH ON SITE take each day with truck", "Bagged and left in location agreed upon by customer", "Drive way"],
        },
        {
            label: "Where is the designated location for the tools?",
            name: "toolsLocation",
            options: ["NO TOOLS Onsite take Home each day", "Drive way", "Rear of house", "Location agreed upon by customer", "Tool trailer"],
        },
        {
            label: "Can the Crew use the water at this location?",
            name: "canUseWater",
            options: ["Yes", "No"],
            notification: "If no, charge $200.00 extra for water",
        },
        {
            label: "Can we use the electric that is on location?",
            name: "canUseElectric",
            options: ["Yes", "No"],
            notification: "If no, charge $500.00 extra and inform the Installation team to bring a generator",
        },
        {
            label: "If the team needs a restroom, will you accommodate them?",
            name: "restroomAccommodation",
            options: ["Yes", "No"],
        },
        {
            label: "Do you have a sprinkler system?",
            name: "hasSprinklerSystem",
            options: ["Yes", "No"],
            notification: "If yes, inform customer; systems that impede installation may be disconnected temporarily.",
        },
        {
            label: "Do you have a dog?",
            name: "hasDog",
            options: ["Yes", "No"],
            notification: "If yes, ask them to keep the pets inside as we work",
        },
        {
            label: "Where would you like the crew to park?",
            name: "parkingLocation",
            options: ["Drive Way", "Street only", "Ask customer for parking permit"],
        },
    ];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // @ts-ignore
        const selects=selectFields.map(sel=>({field:sel.label,value:formData[sel.name]}))
        const toSend=[
            {field:"budget",value:formData.budget},
            {field:"startDate",value:formData.startDate},
            ...selects,
            ...formData?.customerRequests.map((el,index)=>({field:`Request ${index+1}`,value:el}))
        ]
        onUpdate(toSend);
    };
    return (
        <BlankCard sx={{ p: 2 }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
                {/* Customer Request Fields */}


                {/* Other fields */}
                <TextField
                    fullWidth
                    label="What date did you want your project to start?"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                    margin="normal"
                />

                <TextField
                    fullWidth
                    label="What is the budget for this project?"
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    margin="normal"
                />

                {/* Dynamically rendered select fields */}
                {selectFields.map((field, index) => (
                    <div key={index}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id={`${field.name}-label`}>{field.label}</InputLabel>
                            <Select
                                labelId={`${field.name}-label`}
                                name={field.name}
                                value={formData[field.name as keyof FormData]}
                                onChange={handleChange}
                                required
                            >
                                {field.options.map((option, idx) => (
                                    <MenuItem value={option} key={idx}>{option}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {field.name==="specialInstructions" ? <>
                            {formData.customerRequests.map((request, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <TextField
                                        fullWidth
                                        label={`Customer request ${index + 1}`}
                                        type="text"
                                        value={request}
                                        onChange={(e) => handleCustomerRequestChange(index, e.target.value)}
                                        required
                                        margin="normal"
                                    />
                                    <IconButton onClick={() => removeCustomerRequest(index)} color="error">
                                        <RemoveCircleOutline />
                                    </IconButton>
                                </div>
                            ))}
                            <Button
                                onClick={addCustomerRequest}
                                variant="outlined"
                                startIcon={<AddCircleOutline />}
                                style={{ marginBottom: '16px' }}
                            >
                                Add Customer Request
                            </Button>
                        </>:<></> }
                        {field.notification && (
                            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '16px',background:"lightblue",padding:"10px" }}>
                                {field.notification}
                            </Typography>
                        )}
                    </div>
                ))}

                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Submit
                </Button>
            </form>
        </BlankCard>
    );
};

export default RenovationRequestForm;
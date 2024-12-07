import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from '@mui/material';

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
    customerRequest1: string;
    customerRequest2: string;
    customerRequest3: string;
    customerRequest4: string;
}

const RenovationRequestForm: React.FC = () => {
    // Initialize formData with appropriate type
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
        customerRequest1: '',
        customerRequest2: '',
        customerRequest3: '',
        customerRequest4: '',
    });

    // Define event types for handlers
    const handleChange = (e:any) => {
        const { name, value } = e.target as HTMLInputElement; // Narrow down the type
        if (name) {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
            <FormControl fullWidth margin="normal">
                <InputLabel id="hiredProfessional-label">Hired a Professional Renovator?</InputLabel>
                <Select
                    labelId="hiredProfessional-label"
                    name="hiredProfessional"
                    value={formData.hiredProfessional}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="planningDuration-label">How long have you been planning to get the work done?</InputLabel>
                <Select
                    labelId="planningDuration-label"
                    name="planningDuration"
                    value={formData.planningDuration}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="few days">Few days</MenuItem>
                    <MenuItem value="a few weeks">A few weeks</MenuItem>
                    <MenuItem value="few months">Few months</MenuItem>
                    <MenuItem value="year or more">Year or more</MenuItem>
                </Select>
            </FormControl>

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

            <FormControl fullWidth margin="normal">
                <InputLabel id="specialInstructions-label">Any special instructions for the Install team?</InputLabel>
                <Select
                    labelId="specialInstructions-label"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </Select>
            </FormControl>

            {/* Additional Customer Requests */}
            {Array.from({ length: 4 }, (_, index) => (
                <TextField
                    key={index}
                    fullWidth
                    label={`Customer request ${index + 1}`}
                    type="text"
                    name={`customerRequest${index + 1}`}
                    value={formData[`customerRequest${index + 1}` as keyof FormData] || ''}
                    onChange={handleChange}
                    required
                    margin="normal"
                />
            ))}

            {/* Other Fields */}
            <FormControl fullWidth margin="normal">
                <InputLabel id="trashLocation-label">Where is the designated location for the trash?</InputLabel>
                <Select
                    labelId="trashLocation-label"
                    name="trashLocation"
                    value={formData.trashLocation}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="Trash Trailer">Trash Trailer</MenuItem>
                    <MenuItem value="Trash on SITE">Trash on SITE</MenuItem>
                    <MenuItem value="Bagged and left in location agreed upon">Bagged and left in location agreed upon</MenuItem>
                    <MenuItem value="Driveway">Driveway</MenuItem>
                </Select>
            </FormControl>

            {/* Add other fields following the same pattern */}

            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                Submit
            </Button>
        </form>
    );
};

export default RenovationRequestForm;

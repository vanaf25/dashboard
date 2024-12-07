import  { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

const RenovationRequestForm = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
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
          value={formData[`customerRequest${index + 1}`] || ''}
          onChange={handleChange}
          required
          margin="normal"
        />
      ))}

      {/* Trash and Tools Location */}
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

      <FormControl fullWidth margin="normal">
        <InputLabel id="toolsLocation-label">Where will the tools be located?</InputLabel>
        <Select
          labelId="toolsLocation-label"
          name="toolsLocation"
          value={formData.toolsLocation}
          onChange={handleChange}
          required
        >
          <MenuItem value="No tools">No tools</MenuItem>
          <MenuItem value="Driveway">Driveway</MenuItem>
          <MenuItem value="Rear of house">Rear of house</MenuItem>
          <MenuItem value="Location agreed upon by customer">Location agreed upon by customer</MenuItem>
          <MenuItem value="Tool trailer">Tool trailer</MenuItem>
        </Select>
      </FormControl>

      {/* Water and Electric Use */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="canUseWater-label">Can the Crew use the water at this location?</InputLabel>
        <Select
          labelId="canUseWater-label"
          name="canUseWater"
          value={formData.canUseWater}
          onChange={handleChange}
          required
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="canUseElectric-label">Can we use the electric that is on location?</InputLabel>
        <Select
          labelId="canUseElectric-label"
          name="canUseElectric"
          value={formData.canUseElectric}
          onChange={handleChange}
          required
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      {/* Restroom Accommodation */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="restroomAccommodation-label">If the team needs a restroom will you accommodate them?</InputLabel>
        <Select
          labelId="restroomAccommodation-label"
          name="restroomAccommodation"
          value={formData.restroomAccommodation}
          onChange={handleChange}
          required
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      {/* Sprinkler System */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="hasSprinklerSystem-label">Do you have a sprinkler system?</InputLabel>
        <Select
          labelId="hasSprinklerSystem-label"
          name="hasSprinklerSystem"
          value={formData.hasSprinklerSystem}
          onChange={handleChange}
          required
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      {/* Dog Ownership */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="hasDog-label">Do you have a dog?</InputLabel>
        <Select
          labelId="hasDog-label"
          name="hasDog"
          value={formData.hasDog}
          onChange={handleChange}
          required
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      {/* Parking Location */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="parkingLocation-label">Where would you like the crew to park?</InputLabel>
        <Select
          labelId="parkingLocation-label"
          name="parkingLocation"
          value={formData.parkingLocation}
          onChange={handleChange}
          required
        >
          <MenuItem value="Ask customer for parking permit">Ask customer for parking permit</MenuItem>
          <MenuItem value="Driveway">Driveway</MenuItem>
          <MenuItem value="Street only">Street only</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Submit
      </Button>
    </form>
  );
};

export default RenovationRequestForm;

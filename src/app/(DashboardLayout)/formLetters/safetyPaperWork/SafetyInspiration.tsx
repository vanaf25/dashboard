import { Grid, TextField, Typography, Button, Box } from '@mui/material';
import { useMemo } from 'react';
import PickImages from '../../../components/letters/PickImages/PickImages';
import Paragraphs from '../../../components/letters/parahraphs/Paragraphs';
import { useForm, Controller } from 'react-hook-form';

const SafetyInspiration = () => {
  const { control, handleSubmit } = useForm(); // Initialize react-hook-form
  const data = useMemo(() => ([
    { id: 1, question: "Is the crew wearing safety gear? Or PPE (Personal, Protective, Equipment)", answer: "Yes/No" },
    { id: 2, question: "Does the job site look like a mess? i.e., trip hazards, lunch mess or cigarette butts", answer: "NO" },
    { id: 3, question: "Did they use safety tape to tape off the demo area?", answer: "NO" },
    { id: 4, question: "Are workers smoking on the job site?", answer: "NO" },
    { id: 5, question: "If the crew smokes, are they counting smoke breaks and picking up cigarette butts?", answer: "NO" },
    { id: 6, question: "Is there a first aid kit onsite and a fire extinguisher?", answer: "NO" },
    { id: 7, question: "Does the crew have sufficient water?", answer: "NO" },
    { id: 8, question: "Are ladders set up within safety guidelines? i.e., no ladder on tarps, no ladders on scaffolding", answer: "NO" },
    { id: 9, question: "Are power tools set up properly to prevent cuts? i.e., no saw guards pinned back/removed", answer: "NO" }
  ]), []);

  // Handle form submission
  const onSubmit = (formData) => {
    console.log(formData); // You can handle the data here (e.g., send it to a backend)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        sx={{
          borderCollapse: 'collapse',
          marginBottom: "10px",
          marginTop: "20px"
        }} container direction="column" spacing={2}>
        {data.map((row) => (
          <Grid container item key={row.id} spacing={2}>
            <Grid item sx={{ border: '1px solid black', padding: 1 }} xs={1}>
              <Typography>{row.id}</Typography>
            </Grid>
            <Grid sx={{ border: '1px solid black', padding: 1 }} item xs={9}>
              <Typography>{row.question}</Typography>
            </Grid>
            <Grid sx={{ border: '1px solid black', padding: 1 }} item xs={2}>
              <Typography>{row.answer}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Text Field for Concerns */}
      <Controller
        name="concerns"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="List any concerns or changes you would like the production team to make or be aware of."
            multiline
            rows={10}
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
        )}
      />

      {/* Estimated working hours */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Estimated working hours left until project is completed?</Typography>
        <Controller
          name="estimatedHours"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Provide estimated hours"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          )}
        />
      </Box>

      {/* Question for the customer */}
      <Typography sx={{ mb: 2, textAlign: "center" }} variant="h6">Questions for the customer</Typography>

      <Controller
        name="workProcessFeedback"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            sx={{ mb: 2 }}
            fullWidth
            variant="outlined"
            label={"How do you feel the work process is going, especially with regard to speed and quality?"}
          />
        )}
      />

      <Controller
        name="frustrationFeedback"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Are there any specific areas of frustration or concern you would like us to correct or be aware of?"
            multiline
            rows={2}
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
        )}
      />

      <PickImages />

      <Paragraphs sections={["Installation crew wearing safety gear, All 4 sides of the house, trash storage location, trash on the ground, tool location, safety tape installed, tarps for trash put down on the ground when trash is being removed, and amount of water onsite."]} />

      {/* Other Notes */}
      <Controller
        name="otherNotes"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Other Notes"
            multiline
            rows={3}
            variant="outlined"
            sx={{ mb: 2 }}
            fullWidth
          />
        )}
      />

      {/* Submit Button */}
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  );
};

export default SafetyInspiration;

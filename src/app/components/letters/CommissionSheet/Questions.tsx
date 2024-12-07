import React, { useState } from 'react';
import {Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Checkbox, Grid} from '@mui/material';
import PickImages from "../PickImages/PickImages";
import PickVideos from "../PickVideos/PickVideos";

const initialChecklistData = [
  { question: 'Did you fully fill out the measure sheet completely?', answer: false },
  { question: 'Did you show the customer the picture presentation?', answer: false },
  { question: 'Did you ask the customer the closing statement?', answer: false },
  { question: 'Did you make a video of the home?', answer: false },
  { question: 'Did you go over the install instructions with the customer?', answer: false },
  { question: 'Did you fill out the material list?', answer: false },
  { question: 'Did you send the customer their quote and contract?', answer: false },
];

const Checklist = () => {
  const [checklistData, setChecklistData] = useState(initialChecklistData);

  const handleItemClick = (index:number) => {
    const updatedChecklist = [...checklistData];
    updatedChecklist[index].answer = !updatedChecklist[index].answer;
    setChecklistData(updatedChecklist);
  };

  return (
    <Grid container>
      <Grid xs={12} sm={7}>
        <Card variant="outlined" sx={{ maxWidth: 600,mr:2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Customer Visit Checklist
            </Typography>
            <List>
              {checklistData.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{cursor:"pointer",userSelect:"none"}} button onClick={() => handleItemClick(index)}>
                    <Checkbox
                      checked={item.answer}
                      color="primary"
                    />
                    <ListItemText primary={item.question} />
                  </ListItem>
                  {index < checklistData.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={5}>
        <PickImages/>
        <PickVideos/>
      </Grid>
    </Grid>

  );
};

export default Checklist;

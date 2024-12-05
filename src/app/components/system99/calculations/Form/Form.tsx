import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Box, Button, MenuItem, Paper, TextField, Typography} from "@mui/material";
import Card from '../Cards/Card/Card';
import Select from "react-select";

const FormCreator = ({inputFields,result,url}) => {
  const { register,
    handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,setIsSubmitted]=useState(false)
  const [resultFields,setResultFields]=useState(result)
  const onSubmit = data => {
    console.log(data);
    setIsSubmitting(true);
    console.log(process.env);
    fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        setIsSubmitting(false);
        setIsSubmitted(true)
        setResultFields(prevState=>prevState.map(el=>{
          if(res[el.id]!==undefined){
            return {...el,value:res[el.id]}
          }
          return el
        }))
        console.log('res:', res);
      });
  };

  const filterFields = (e) => {
    if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab", "Enter"].includes(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <>
      <Paper
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          maxWidth: 600,
          margin: "10px auto",
          padding: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant={"h5"} sx={{textAlign:"center",mb:1}}>{url}</Typography>
        {inputFields.map((field, index) =>{
          if (field.type==="select"){
            console.log('field:',field.options);
           return  <Select
              fullWidth
              sx={{mb:1}}
              key={index}
              id="demo-simple-select"
              {...register(field.name, { valueAsNumber: true, required: true })}
              label={field.label}
            >
             <MenuItem value={2}>2</MenuItem>
              {field.options.map(option=><MenuItem key={option} value={option}>{option}</MenuItem>)}
            </Select>
          }
          else {
            return <TextField
              key={index}
              onKeyDown={filterFields}
              type="number"
              min="0"
              sx={{ mb: 1 }}
              fullWidth
              {...register(field.name, { valueAsNumber: true, required: true })}
              id={field.id}
              label={field.label}
              variant="outlined"
            />

          }
                  }
        )}
        <Box>
          <Button fullWidth disabled={isSubmitting} type="submit" variant="contained">
            {isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </Box>
      </Paper>

      {isSubmitted ? (
        <Card resultFields={resultFields} />
      ) : ""}
    </>
  );
};

export default FormCreator;

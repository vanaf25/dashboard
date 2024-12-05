import { Paper, Typography } from "@mui/material";
import React from "react";

interface ResultField {
  label: string;
  value: string | number;
}
export interface CardProps {
  resultFields: ResultField[];
  _id?:string,
}

const Card: React.FC<CardProps> = ({ resultFields }) => {
  console.log('resultFields:', resultFields);
  return (
      <Paper sx={{ maxWidth: 600, margin: "10px auto", padding: "10px" }}>
        {resultFields.map((field, index) => (
            <Typography key={index}>
              {field.label}: {field.value}
            </Typography>
        ))}
      </Paper>
  );
};

export default Card;

import { Paper, Typography } from "@mui/material";
import React from "react";
import BlankCard from "@/app/components/shared/BlankCard";

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
      <BlankCard sx={{ maxWidth: 600, margin: "10px auto", padding: "10px" }}>
        {resultFields.map((field, index) => (
            <Typography sx={{mb:1}} key={index}>
              {field.label}:  {field.value}
            </Typography>
        ))}
      </BlankCard>
  );
};

export default Card;

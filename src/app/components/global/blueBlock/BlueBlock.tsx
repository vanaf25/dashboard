import { TextField, TextFieldProps } from '@mui/material';
import React from "react";

interface BlueBlockProps {
  fullWidth?: boolean;
  text?:string,
    placeholder?:string,
}

const BlueBlock: React.FC<BlueBlockProps> = ({ fullWidth,text,placeholder }) => {
  return (
      <TextField
          fullWidth={fullWidth}
          size="small"
          id="standard-basic"
          defaultValue={text}
          label={`${placeholder || "Provide value" }`}
          variant="standard"
      />
  );
};

export default BlueBlock;

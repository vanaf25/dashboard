import { TextField, TextFieldProps } from '@mui/material';
import React from "react";

interface BlueBlockProps {
  fullWidth?: boolean;
  text?:string,
}

const BlueBlock: React.FC<BlueBlockProps> = ({ fullWidth,text }) => {
  return (
      <TextField
          fullWidth={fullWidth}
          size="small"
          id="standard-basic"
          defaultValue={text}
          label="Provide value"
          variant="standard"
      />
  );
};

export default BlueBlock;

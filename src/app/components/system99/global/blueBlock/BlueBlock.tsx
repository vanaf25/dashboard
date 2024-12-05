import { TextField, TextFieldProps } from '@mui/material';
import React from "react";

interface BlueBlockProps {
  fullWidth?: boolean;
}

const BlueBlock: React.FC<BlueBlockProps> = ({ fullWidth }) => {
  return (
      <TextField
          fullWidth={fullWidth}
          size="small"
          id="standard-basic"
          label="Standard"
          variant="standard"
      />
  );
};

export default BlueBlock;

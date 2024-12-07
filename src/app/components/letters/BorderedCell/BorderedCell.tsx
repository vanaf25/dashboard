import React from 'react';
import Box from '@mui/material/Box';

interface BorderedCellProps {
  children: React.ReactNode;
}
const BorderedCell: React.FC<BorderedCellProps> = ({ children }) => {
  return (
      <Box sx={{ border: "1px solid black", p: 0.5 }}>
        {children}
      </Box>
  );
};

export default BorderedCell;

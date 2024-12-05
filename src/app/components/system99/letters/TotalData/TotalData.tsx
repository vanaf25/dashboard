import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
interface TotalDataProps{
    header:string,
    total:string
}
const TotalData:React.FC<TotalDataProps> = ({header,total}) => {
  return (
    <Box
      sx={{
        width:250,
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '0',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          padding:"5px 0",
          backgroundColor: '#1266a1', // Blue background for header
          color: 'white', // White text color for header
        }}
      >
        {header}
      </Typography>
      <Typography variant="body1" sx={{ paddingTop: '8px', background:"#E0E0E0" }}>
        {total}
      </Typography>
    </Box>
  );
};

export default TotalData;

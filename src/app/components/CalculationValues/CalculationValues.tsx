import React from 'react';
import { List, ListItem, Typography} from "@mui/material";
interface CalculationValues{
    values?:{[key:string]:string}
}
const CalculationValues:React.FC<CalculationValues> = ({values}) => {
    const additionalParamsArray=Object.entries(values  || {})
    return (
            <List>
                {additionalParamsArray.map(([key, value]) => (
                    <ListItem key={key} divider sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography fontWeight="bold" sx={{ mr: 2,fontSize:20,fontWeight:500 }}>
                            {key}
                        </Typography>
                        <Typography  sx={{fontSize:20,fontWeight:500}} color="primary">
                            {value}
                        </Typography>
                    </ListItem>
                ))}
            </List>
    );
};

export default CalculationValues;
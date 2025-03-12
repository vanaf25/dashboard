import React from 'react';
import {Card, Grid, Typography} from "@mui/material";
import CalculationValues from "@/app/components/CalculationValues/CalculationValues";
interface DefaultCalculatorsProps{
    calculators:{name:string,values:any}[]
}
const DefaultCalculators:React.FC<DefaultCalculatorsProps> = ({calculators}) => {
    console.log('calculators:',calculators);
    return (
        <Grid container sx={{mb:2}} spacing={2}>
            {calculators?.map((el: any, index: number) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Card sx={{ p: 2 }}>
                        <Typography variant="h4" textAlign="center" gutterBottom>
                            {el.name}
                        </Typography>
                        <CalculationValues values={el.values} />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default DefaultCalculators;
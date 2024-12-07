import { Grid, Paper, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  greenBackground: {
    backgroundColor: '#4CAF50', // Green background color for text block
    padding: "5px",
    textAlign:"center",
    color: 'white',
  },
  greyBackground: {
    backgroundColor: '#F0F0F0', // Grey background for amount cell
    padding: "5px",
    textAlign: 'center',
  },
  blueText: {
    color: '#2196F3', // Blue text color for the amount
  },
}));

const ContractDetails = ({contractAmount,materialBudget,timeBonus}) => {
  const classes = useStyles()

  return (
    <Grid sx={{mb:2}} container spacing={2}>
      <Grid item xs={4}>
        <Paper>
          {/* Green section for the label */}
          <Box className={classes.greenBackground}>
            <Typography variant="h6">Contract Amount</Typography>
          </Box>
          {/* Grey section for the amount */}
          <Box className={classes.greyBackground}>
            <Typography variant="h4" className={classes.blueText}>${contractAmount}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          {/* Green section for the label */}
          <Box className={classes.greenBackground}>
            <Typography variant="h6">Material Budget</Typography>
          </Box>
          {/* Grey section for the amount */}
          <Box className={classes.greyBackground}>
            <Typography variant="h4" className={classes.blueText}>${materialBudget}</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          {/* Green section for the label */}
          <Box className={classes.greenBackground}>
            <Typography variant="h6">Time Bonus</Typography>
          </Box>
          {/* Grey section for the amount */}
          <Box className={classes.greyBackground}>
            <Typography variant="h4" className={classes.blueText}>${timeBonus}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContractDetails;

import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(TextField)(({ theme }) => ({
    backgroundColor: "#e3f2fd",
    borderRadius: theme.shape.borderRadius,
    padding: 0, // Adds some internal padding
    marginLeft: theme.spacing(2),
    marginRight:theme.spacing(2),
    "& .MuiInputBase-root": {
        height: "2rem",
    },
    "& .MuiInputBase-input": {
        padding: theme.spacing(1),
    },
}));
export default StyledInput
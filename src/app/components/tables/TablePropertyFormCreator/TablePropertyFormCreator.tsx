import React from 'react';
import {MenuItem, Paper, TextField} from "@mui/material";
import {TableProperty} from "@/app/types/tablesTypes";
interface Props{
    inputFields: TableProperty[];
    onChangeHandler:(name:string,value:string)=>void
}
const TablePropertyFormCreator: React.FC<Props> = ({ inputFields,onChangeHandler }) => {
    return (
        <>
            <Paper
                sx={{ maxWidth: 600, margin: "10px auto", padding: "10px" }}
            >
                {inputFields.map((field, index) =>
                    field.type === "select" ? (
                        <TextField
                            key={index}
                            value={field.value}
                            onChange={(e)=>{
                                onChangeHandler(field.name,e.target.value)
                            }}
                            select
                            fullWidth
                            sx={{ mb: 1 }}
                            label={field.label}
                        >
                            {field.options?.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    ) : (
                        <TextField
                            key={index}
                            type="text"
                            sx={{ mb: 1 }}
                            fullWidth
                            value={field.value}
                            onChange={(e)=>{onChangeHandler(field.name,e.target.value)}}
                            label={field.label}
                            variant="outlined"
                        />
                    )
                )}
                {/*<Box>
                    <Button fullWidth  type="submit" variant="contained">
                        { "Submit"}
                    </Button>
                </Box>*/}
            </Paper>

        </>
    );
};
export default TablePropertyFormCreator;
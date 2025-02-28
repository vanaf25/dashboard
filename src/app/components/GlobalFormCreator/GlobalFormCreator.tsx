"use client"
import React from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import {useRouter} from "next/navigation";

interface GlobalFormCreator {
    url: string;
    inputFields: { label: string; name: string; id?: string; type?: string; options?: number[] }[];
}

const GlobalFormCreator: React.FC<GlobalFormCreator> = ({ inputFields, url }) => {
    const { register, handleSubmit } = useForm();
    const router=useRouter();
    const onSubmit = async (data: any) => {
        try {
            const queryParams = new URLSearchParams(data).toString();
            router.push(`${url}/calculators?${queryParams}`);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    const filterFields = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^\d$|^Backspace$|^ArrowLeft$|^ArrowRight$|^Delete$|^Tab$|^Enter$/.test(e.key)) {
            e.preventDefault();
        }
    };
    return (
        <>
            <Paper
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{ maxWidth: 600, margin: "10px auto", padding: "10px" }}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" sx={{ textAlign: "center", mb: 1 }}>
                    {url}
                </Typography>
                {inputFields.map((field, index) =>
                    field.type === "select" ? (
                        <TextField
                            key={index}
                            select
                            fullWidth
                            sx={{ mb: 1 }}
                            label={field.label}
                            {...register(field.name, { required: true })}
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
                            type="number"
                            inputProps={{ min: 0 }}
                            sx={{ mb: 1 }}
                            fullWidth
                            onKeyDown={filterFields}
                            {...register(field.name, { required: true })}
                            id={field.id}
                            label={field.label}
                            variant="outlined"
                        />
                    )
                )}
                <Box>
                    <Button fullWidth  type="submit" variant="contained">
                        { "Submit"}
                    </Button>
                </Box>
            </Paper>

        </>
    );
};

export default GlobalFormCreator;

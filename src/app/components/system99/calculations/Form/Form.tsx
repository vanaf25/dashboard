import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box, Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import Card from '../Cards/Card/Card';

interface FormCreatorProps {
    url: string;
    result: { id: string; value: number; label: string }[];
    inputFields: { label: string; name: string; id: string; type?: string; options?: number[] }[];
}

const FormCreator: React.FC<FormCreatorProps> = ({ inputFields, result, url }) => {
    const { register, handleSubmit } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [resultFields, setResultFields] = useState(result);

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            setIsSubmitting(false);
            setIsSubmitted(true);
            setResultFields(prevState =>
                prevState.map(el => ({
                    ...el,
                    value: res[el.id] !== undefined ? res[el.id] : el.value,
                }))
            );
        } catch (error) {
            setIsSubmitting(false);
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
                    <Button fullWidth disabled={isSubmitting} type="submit" variant="contained">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </Box>
            </Paper>

            {isSubmitted && <Card resultFields={resultFields} />}
        </>
    );
};

export default FormCreator;

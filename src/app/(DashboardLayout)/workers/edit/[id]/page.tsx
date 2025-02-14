"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { TextField, Button, Box, Typography, Alert, CircularProgress } from "@mui/material";
import { useGetWorkerQuery } from "@/app/hooks/useWorkers";
import BlankCard from "@/app/components/shared/BlankCard";

interface WorkerForm {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

const fields: { name: keyof WorkerForm; label: string; type: string; validation: any }[] = [
    { name: "fullName", label: "Full Name", type: "text", validation: { required: "Full Name is required" } },
    { name: "email", label: "Email", type: "email", validation: { required: "Email is required" } },
    { name: "phone", label: "Phone", type: "text", validation: { required: "Phone is required" } },
    { name: "address", label: "Address", type: "text", validation: { required: "Address is required" } },
];

const Page: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<WorkerForm>();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { data, isLoading } = useGetWorkerQuery();

    // Set default values when data is loaded
    useEffect(() => {
        if (data) {
            reset(data); // Reset the form with fetched data
        }
    }, [data, reset]);

    const onSubmit: SubmitHandler<WorkerForm> = async (formData) => {
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post<{ message: string }>("/api/workers/create", formData);
            setSuccessMessage(response.data.message);
            reset();
        } catch (error: any) {
            setErrorMessage(error.response?.data?.error || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <BlankCard sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h5" mb={2}>Edit Worker</Typography>
            {isLoading ? <CircularProgress sx={{ display: "block", mx: "auto", my: 2 }} />:<></>}
            {successMessage ? <Alert severity="success">{successMessage}</Alert>:<></>}
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert>:<></>}
            {!isLoading ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map(({ name, label, type, validation }) => (
                        <TextField
                            key={name}
                            label={label}
                            type={type}
                            fullWidth
                            margin="normal"
                            {...register(name, validation)}
                            error={!!errors[name]}
                            helperText={errors[name]?.message}
                        />
                    ))}

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : "Submit"}
                    </Button>
                </form>
            ):<></>}
        </BlankCard>
    );
};

export default Page;

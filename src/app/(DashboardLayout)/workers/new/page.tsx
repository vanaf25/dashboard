"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import {
    TextField,
    Button,
    Box,
    Typography,
    Alert,
    CircularProgress,
    Grid,
} from "@mui/material";
import BlankCard from "@/app/components/shared/BlankCard";
import { useRouter } from "next/navigation";
import {useQueryClient} from "@tanstack/react-query";

// Define TypeScript interface for form inputs
interface WorkerForm {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    state: string;
    city: string;
    zip: string;
    id?: string;
}

// Define fields dynamically
const fields: { name: keyof WorkerForm; label: string; type: string; validation: any }[] = [
    { name: "fullName", label: "Full Name", type: "text", validation: { required: "Full Name is required" } },
    { name: "email", label: "Email", type: "email", validation: { required: "Email is required" } },
    { name: "phone", label: "Phone", type: "text", validation: { required: "Phone is required" } },
    { name: "address", label: "Address", type: "text", validation: { required: "Address is required" } },
    { name: "state", label: "State", type: "text", validation: { required: "State is required" } },
    { name: "city", label: "City", type: "text", validation: { required: "City is required" } },
    { name: "zip", label: "Zip", type: "text", validation: { required: "Zip is required" } },
];

const Page: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<WorkerForm>();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const queryClient = useQueryClient();

    const onSubmit: SubmitHandler<WorkerForm> = async (data) => {
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post<{ message: string; worker: WorkerForm }>("/api/workers/create", data);
            setSuccessMessage(response.data.message);
            reset();
            const worker=response?.data?.worker
            console.log('response:',worker);
            if(worker){
                const oldData = queryClient.getQueryData<WorkerForm[]>(["workers"]);
                if (oldData) {
                    queryClient.setQueryData(["workers"], [...oldData, worker]);
                }
                if(worker.id) router.push(`/workers/${worker?.id}`)
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data?.error || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <BlankCard sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h5" mb={2}>Add Worker</Typography>

            {successMessage ? <Alert severity="success">{successMessage}</Alert>:<></>}
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert>:<></>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    {fields.map(({ name, label, type, validation }) => (
                        <Grid item xs={12} sm={6} key={name}>
                            <TextField
                                label={label}
                                type={type}
                                fullWidth
                                {...register(name, validation)}
                                error={!!errors[name]}
                                helperText={errors[name]?.message}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Submit"}
                </Button>
            </form>
        </BlankCard>
    );
};

export default Page;

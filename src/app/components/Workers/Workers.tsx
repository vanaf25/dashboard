"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Card, CardContent, Typography, Button, Box, CircularProgress, Alert, Grid } from "@mui/material";
import BlankCard from "../shared/BlankCard";
import Link from "next/link";

// Define Worker Type
interface Worker {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

// Workers Component
const Workers: React.FC = () => {
    const [workers, setWorkers] = useState<Worker[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch workers from API
    const fetchWorkers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<{ workers: Worker[] }>("/api/workers/getAll");
            setWorkers(response.data.workers);
        } catch (err: any) {
            setError(err.response?.data?.error || "Failed to load workers");
        } finally {
            setLoading(false);
        }
    };

    // Load workers on mount
    useEffect(() => {
        fetchWorkers();
    }, []);

    return (
        <BlankCard sx={{ p: 2, mb: 2 }}>
            <Typography variant={"h3"} gutterBottom>Workers</Typography>
            <Link href="workers/new">
                <Button fullWidth variant="contained" color="primary">
                    Create New Worker
                </Button>
            </Link>

            <Box mt={3}>
                {loading && <CircularProgress />}
                {error && <Alert severity="error">{error}</Alert>}

                {!loading && !error && workers.length === 0 && (
                    <Typography>No workers found.</Typography>
                )}

                {/* Display workers dynamically in a responsive grid */}
                {!loading && !error && (
                    <Grid container spacing={3} mt={2}>
                        {workers.map((worker) => (
                            <Grid item xs={12} sm={6} md={4} key={worker.id}>
                                <Link href={`/workers/${worker.id}`} style={{ textDecoration: "none" }}>
                                    <Card
                                        sx={{
                                            p: 2,
                                            border: "1px solid #ddd",
                                            boxShadow: 3,
                                            transition: "0.3s",
                                            "&:hover": { boxShadow: 6 },
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                                {worker.fullName}
                                            </Typography>
                                            <Typography color="textSecondary">{worker.email}</Typography>
                                            <Typography color="textSecondary">{worker.phone}</Typography>
                                            <Typography color="textSecondary">{worker.address}</Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </BlankCard>
    );
};

export default Workers;

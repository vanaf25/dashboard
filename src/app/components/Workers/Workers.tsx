"use client";
import React from "react";
import { Card, CardContent, Typography, Button, Box, CircularProgress, Alert, Grid } from "@mui/material";
import BlankCard from "../shared/BlankCard";
import Link from "next/link";
import {useGetWorkersQuery} from "@/app/hooks/useWorkers";
import WorkerCard from "@/app/components/Workers/WorkerCard/WorkerCard";
const Workers: React.FC = () => {
    const {data:workers,error,isLoading}=useGetWorkersQuery()
    return (
        <BlankCard sx={{ p: 2, mb: 2 }}>
            <Typography variant={"h3"} gutterBottom>Workers</Typography>
            <Link href="workers/new">
                <Button fullWidth variant="contained" color="primary">
                    Create New Worker
                </Button>
            </Link>

            <Box mt={3}>
                {isLoading && <CircularProgress />}
                {error && <Alert severity="error">{(error as Error).message}</Alert>}

                {!isLoading && !error && workers?.length === 0 && (
                    <Typography>No workers found.</Typography>
                )}

                {/* Display workers dynamically in a responsive grid */}
                {!isLoading && !error && workers && (
                    <Grid container spacing={3} mt={2}>
                        {workers?.map((worker) => (
                            <Grid item xs={12} sm={6} md={4} key={worker.id}>
                                <Link href={`/workers/${worker.id}`} style={{ textDecoration: "none" }}>
                                    <WorkerCard worker={worker} />
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

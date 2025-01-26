"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { contractData } from "@/app/consts/contractData/contractData";
import TasksFields from "@/app/components/TasksFields/TasksFields";
import BlankCard from "@/app/components/shared/BlankCard";
const Page: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [type, setType] = useState<string | null>(null);
    const { slug } = useParams();
    useEffect(() => {
        const typeFromQuery = searchParams.get("type");
        setType(typeFromQuery);
    }, [router, searchParams]);
    const field = contractData.find((el) => el.name === type);
    return (
        <BlankCard>
            {!type && field ? (
                <Typography color={"error"}>Valid Project is required</Typography>
            ) : (
                <Box>
                    {field && type && <TasksFields type={type}
                                                   slug={slug as string}
                                                   fields={field?.fields} />}
                </Box>
            )}
        </BlankCard>
    );
};

export default Page;

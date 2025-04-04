"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {Loading} from "@/app/components/global/loading/Loading";
import {Typography} from "@mui/material";
import Alert from "@mui/material/Alert";
import measurementsApi from "@/app/apis/measurementApi";
import {Measurement} from "@/app/types/measurementsTypes";
import CalculationValues from "@/app/components/CalculationValues/CalculationValues";
import BlankCard from "@/app/components/shared/BlankCard";
import ExteriorSidingTables from "@/app/components/tables/TablePages/ExteriorSidingTables/ExteriorSidingTables";
import TableNotes from "@/app/components/system99/TableNotes/TableNotes";

const Page = () => {
    const { id } = useParams();
    const queryKeys=["measurement", id]
    const { data, isLoading, error } = useQuery<Measurement>({
        queryKey: queryKeys,
        queryFn: () => measurementsApi.getMeasurement(id as string),
        enabled: !!id,
    });

    return (
        <div>
            {isLoading ? <Loading/>:<>
                {error?.message ? <Alert severity="error" sx={{ mb: 2 }}>
                    <Typography variant={"h3"}>
                        Error: {error?.message}
                    </Typography>
                </Alert>: <>
                    {data && <>
                        <BlankCard sx={{maxWidth:500,margin:"10px auto"}}>
                            <CalculationValues values={data.measurementDetails}  />
                          <TableNotes/>
                        </BlankCard>
                        <ExteriorSidingTables queryKeys={queryKeys} tables={data.tables}/>
                    </>}
                </>}
            </>}
        </div>
    );
};

export default Page;

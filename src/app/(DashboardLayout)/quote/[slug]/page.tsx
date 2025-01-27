"use client";
import React from "react";
import {useParams, useSearchParams} from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TasksFields from "@/app/components/TasksFields/TasksFields";
import { contractData } from "@/app/consts/contractData/contractData";
import { Button } from "@mui/material";
import DocumentHeader from "@/app/components/DocumentHeader/DocumentHeader";
import DocumentTermsConditions from "@/app/components/DocumentTermsConditions/DocumentTermsConditions";
import DocumentFooter from "@/app/components/DocumentFooter/DocumentFooter";
import Link from "next/link";
import {fetchDocument} from "@/app/apis/documentApi";
import Loading from "@/app/(DashboardLayout)/loading";
import QuoteForPrint from "@/app/components/QuoteForPrint/QuoteForPrint";
import {FileComponent, FolderComponent} from "@/app/components/FolderComponent/FolderComponent";
const Page = () => {
    const { slug } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["document", slug],
        queryFn: () => fetchDocument(slug as string),
        enabled: !!slug,
    });
    console.log('loading:',isLoading);
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    return (
        <>
        {isLoading ?  <Loading />:<Box>
            {error ?  <Typography color={"error"}>
                Error loading document: {(error as Error).message}</Typography>:<>
                {type==="quote" || type==="contract" ? <QuoteForPrint data={data} type={type}/>
                    :type==="update" ? <Box>
                    {data && (
                        <>
                            <Link href={`?type=quote`}>
                                <Button sx={{ mb: 2 }} fullWidth>
                                    View Printable Quote Format
                                </Button>
                            </Link>
                            {data.type==="contract" &&
                                <Link href={`?type=contract`}>
                                <Button sx={{ mb: 2 }} fullWidth>
                                    View Printable Contract Format
                                </Button>
                            </Link>}
                            <DocumentHeader
                                customers={data.customers}
                                profiles={data.profiles}
                                type={data.type}
                            />
                            <TasksFields
                                defaultCustomField={data.custom_fields}
                                defaultNoteToClient={data.notes}
                                defaultRowsItems={data.line_items}
                                currentId={data.id}
                                selectedTerms={data.terms ? data.terms : []}
                                isContract={data.type === "contract"}
                                fields={contractData.find((el) => el.name === data.service)?.fields || []}
                                type={data.service}
                                slug=""
                                selectedFields={data.fields.map((f: any) => f.order)}
                                update
                            />
                            {data.type === "contract" && <DocumentTermsConditions data={data} />}
                            <DocumentFooter
                                customers={data.customers}
                                profiles={data.profiles}
                            />
                        </>
                    )}
                    </Box>:<Box display={"flex"} flexDirection={"column"} gap={3}>
                        <Typography variant={"h3"} sx={{mb:2}}>Documents for {data.service} for services   </Typography>
                        <Link href={"/quote/image"}>
                            <FolderComponent name="Images">
                                <FileComponent name="img2.png" />
                                <FileComponent name="img3.png" />
                                <FileComponent name="img4.png" />
                            </FolderComponent>
                        </Link>
                        <FolderComponent name="Another Documents">
                            <FileComponent name="doc1.pdf" />
                            <FileComponent name="doc2.docx" />
                        </FolderComponent>
                        <FolderComponent name="Quotes and Contracts">
                            <Link href={"?type=quote"}>
                                <FileComponent name="Quote to print" />
                            </Link>
                            {data.type==="contract" ? <Link href={"?type=contract"}>
                                <FileComponent name="Contract to print" />
                            </Link>:""}
                            <Link href={"?type=update"}>
                                <FileComponent name="Edit data" />
                            </Link>
                        </FolderComponent>
                    </Box>   }
            </>}
        </Box>}
            </>
            );
};

export default Page;

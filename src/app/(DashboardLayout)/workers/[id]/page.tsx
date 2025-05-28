"use client"
import {Box} from '@mui/material';
import React from 'react';
import {FileComponent, FolderComponent} from "@/app/components/FolderComponent/FolderComponent";
import Link from "next/link";
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import {useParams} from "next/navigation";
import Loading from "@/app/(DashboardLayout)/loading";
import WorkerCard from "@/app/components/Workers/WorkerCard/WorkerCard";

const Page = () => {
    const anotherDocuments = [
        'Breach Of  Non Disclosure',
        'Drug Test Consent',
        'Drug Test Notice',
        'Non Disclosure Agreement',
        'Release Agreement',
    ];
    const productionPaperWork = [
        'AdvanceApproval',
        'AdvanceFormRequest',
        'Agreement',
        'Application',
        'Ethics',
        'Expectations',
        'GoldenRules',
        'HarshTermination',
        'MutualTermination',
        'NewWorkerExpectations',
        'Notice1',
        'Notice2',
        'Notice3',
        'SiteRules',
        'Termination'
    ];
    const salesManager=[
        'Back Charge Notice',
        'Comission Structure',
        'Missed Lead',
        'Missed Sales Goal',
        'New Client Questions',
        "Location ID Pics"
    ]
    const safetyPaperWork= ["IncidentReport","SafetyInspiration","SafetyViolation"]
    const subContractPaperWork=["SubContract","PointOfContact","Termination"]
    const { id } = useParams();
    const {data,isLoading}=useGetWorkerQuery()
    return (
        <div>
            {isLoading ? <Loading/>:data && <>
                <Box sx={{maxWidth:300,margin:"0 auto 20px"}}>
                    <WorkerCard worker={data} />
                </Box>
                <FolderComponent name="Another Documents">
                    {anotherDocuments.map(doc=><Link key={doc}
                                                     href={`${id}/anotherDocuments/${doc.replace(/\s+/g, '')}`}>
                        <FileComponent name={doc}/>
                    </Link>)}
                </FolderComponent>
                <FolderComponent name={"Production Paper Work"}>
                    {productionPaperWork.map(doc=><Link key={doc}
                                                        href={`${id}/ProductionPaperWork/${doc.replace(/\s+/g, '')}`}>
                        <FileComponent name={doc}/>
                    </Link>)}
                </FolderComponent>
                <FolderComponent name={"Sales Manager"}>
                    {salesManager.map(doc=><Link key={doc}
                                                        href={`${id}/salesManager/${doc.replace(/\s+/g, '')}`}>
                        <FileComponent name={doc}/>
                    </Link>)}
                </FolderComponent>
                <FolderComponent name={"Safety Paper Work"}>
                    {safetyPaperWork.map(doc=><Link key={doc}
                                                 href={`${id}/safetyPaperWork/${doc.replace(/\s+/g, '')}`}>
                        <FileComponent name={doc}/>
                    </Link>)}
                </FolderComponent>
                <FolderComponent name={"subContractPaperWork"}>
                    {subContractPaperWork.map(doc=><Link key={doc}
                                                    href={`${id}/subContractPaperWork/${doc.replace(/\s+/g, '')}`}>
                        <FileComponent name={doc}/>
                    </Link>)}
                </FolderComponent>
            </>}

        </div>
    );
};

export default Page;
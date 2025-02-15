"use client";
import {Box, Button} from '@mui/material';
import React, {ReactNode, useState} from 'react';
import {useGetQuoteQuery} from "@/app/hooks/useQuote";
import Loading from "@/app/(DashboardLayout)/loading";
import Typography from "@mui/material/Typography";
import {PDFDownloadLink} from "@react-pdf/renderer";
import GeneratePdf from "@/app/utils/GeneratePdf";
import {ElementType, PDFElem} from "@/app/types/exportPdfTypes";
import SignaturePad from "@/app/components/letters/SignaturePad/SignaturePad";
import {PageSize} from "@react-pdf/types";
import {useGetWorkerQuery} from "@/app/hooks/useWorkers";
import {useGetProfileQuery} from "@/app/hooks/useProfile";
import {CompanyDetails, UserDetails} from "@/app/components/global/CustomerDetails/CustomerDetails";
import DocumentHeaderLayout from "@/app/components/DocumentHeaderLayout/DocumentHeaderLayout";
interface DocumentLayoutProps{
    children:ReactNode  | ReactNode[],
    exportElems?:PDFElem[],
    pdfName?:string,
    withOutHeader?:boolean,
    pdfTitle?:string,
    pageType?:PageSize,
    withSignature?:boolean
    withCompanyName?:boolean,
}
const WorkerLayout:React.FC<DocumentLayoutProps> = ({children
                                                          ,exportElems
                                                          ,withOutHeader
                                                          ,pdfTitle
                                                          ,pdfName,
                                                        withCompanyName,
                                                          withSignature,pageType}) => {
    const {data, isLoading, error } = useGetWorkerQuery();
    const [signatureUrl,setSignatureUrl]=useState("");
    const {data:profile,isLoading:isProfileLoading,error:profileError}=useGetProfileQuery()
    return (
        <Box className={"forPrint"}>
            {isLoading || isProfileLoading ? <Loading/>:<Box>
                {error || profileError ?  <Typography color={"error"}>
                    Error loading document: {(error as Error)?.message} {profileError?.message}</Typography>:data && profile ? <>
                    {exportElems && <PDFDownloadLink     document={<GeneratePdf
                        pageType={pageType}
                        pdfTitle={pdfTitle}
                        withCompanyName={withCompanyName}
                        withOutHeader={withOutHeader}
                        data={{profiles:profile,customers:{...data,name:data.fullName}}}
                        elems={!withSignature ?
                        exportElems:[...exportElems,{type:ElementType.IMG,src:signatureUrl,content:""}] } />}
                                                         fileName={`${pdfName}.pdf`}>
                        <Button size={"large"} fullWidth sx={{mb:2}}>Export to PDF</Button>
                    </PDFDownloadLink>}
                    {!withOutHeader && <DocumentHeaderLayout>
                        <UserDetails
                            title={"Worker info"}
                            customer={{...data,name:data.fullName}}/>
                        <CompanyDetails company={profile}/>
                    </DocumentHeaderLayout>}
                    {children}

                    {withSignature ? <Box sx={{mt:3}}>
                        <SignaturePad onSave={(str)=>setSignatureUrl(str)} />
                    </Box> :<></>}
                </>:""}
            </Box>}
        </Box>
    );
};

export default WorkerLayout;
"use client";
import {Box, Button} from '@mui/material';
import React, {ReactNode, useState} from 'react';
import {useGetQuoteQuery} from "@/app/hooks/useQuote";
import Loading from "@/app/(DashboardLayout)/loading";
import Typography from "@mui/material/Typography";
import {CompanyDetails, UserDetails} from "@/app/components/global/CustomerDetails/CustomerDetails";
import DocumentHeaderLayout from "@/app/components/DocumentHeaderLayout/DocumentHeaderLayout";
import {PDFDownloadLink} from "@react-pdf/renderer";
import GeneratePdf from "@/app/utils/GeneratePdf";
import {ElementType, PDFElem} from "@/app/types/exportPdfTypes";
import SignaturePad from "@/app/components/letters/SignaturePad/SignaturePad";
interface DocumentLayoutProps{
    children:ReactNode  | ReactNode[],
    exportElems?:PDFElem[],
    pdfName?:string,
    withOutHeader?:boolean,
    pdfTitle?:string,
    withSignature?:boolean
}
const DocumentLayout:React.FC<DocumentLayoutProps> = ({children
                                                          ,exportElems
                                                          ,withOutHeader
                                                          ,pdfTitle
                                                          ,pdfName,withSignature}) => {
    const {data, isLoading, error } = useGetQuoteQuery();
    const [signatureUrl,setSignatureUrl]=useState("");
    return (
        <Box className={"forPrint"}>
            {isLoading ? <Loading/>:<Box>
                {error ?  <Typography color={"error"}>
                Error loading document: {(error as Error).message}</Typography>:data ? <>
                        {exportElems && <PDFDownloadLink     document={<GeneratePdf
                            pdfTitle={pdfTitle}
                            withOutHeader={withOutHeader}
                            data={data} elems={!withSignature ?  exportElems:[...exportElems,{type:ElementType.IMG,src:signatureUrl,content:""}] } />}
                                     fileName={`${pdfName}.pdf`}>
                        <Button size={"large"} fullWidth sx={{mb:2}}>Export to PDF</Button>
                    </PDFDownloadLink>}
                        <DocumentHeaderLayout>
                        <UserDetails
                            customer={data?.customers}/>
                        <CompanyDetails company={data?.profiles}/>
                    </DocumentHeaderLayout>
                    {children}

                    {withSignature ? <Box sx={{mt:3}}>
                        <SignaturePad onSave={(str)=>setSignatureUrl(str)} />
                    </Box> :<></>}
                </>:""}
            </Box>}
        </Box>
    );
};

export default DocumentLayout;
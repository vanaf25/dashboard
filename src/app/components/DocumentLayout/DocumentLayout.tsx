"use client";
import {Box, Button} from '@mui/material';
import React,{ReactNode} from 'react';
import {useGetQuoteQuery} from "@/app/hooks/useQuote";
import Loading from "@/app/(DashboardLayout)/loading";
import Typography from "@mui/material/Typography";
import {CompanyDetails, UserDetails} from "@/app/components/global/CustomerDetails/CustomerDetails";
import DocumentHeaderLayout from "@/app/components/DocumentHeaderLayout/DocumentHeaderLayout";
import {PDFDownloadLink} from "@react-pdf/renderer";
import GeneratePdf from "@/app/utils/GeneratePdf";
import {PDFElem} from "@/app/types/exportPdfTypes";
interface DocumentLayoutProps{
    children:ReactNode  | ReactNode[],
    exportElems?:PDFElem[],
    pdfName?:string,
    withOutHeader?:boolean,
    pdfTitle?:string,
}
const DocumentLayout:React.FC<DocumentLayoutProps> = ({children
                                                          ,exportElems
                                                          ,withOutHeader,pdfTitle,pdfName}) => {
    const {data, isLoading, error } = useGetQuoteQuery();
    return (
        <Box className={"forPrint"}>
            {isLoading ? <Loading/>:<Box>
                {error ?  <Typography color={"error"}>
                Error loading document: {(error as Error).message}</Typography>:data ? <>
                        {exportElems && <PDFDownloadLink     document={<GeneratePdf
                            pdfTitle={pdfTitle}
                            withOutHeader={withOutHeader}
                            data={data} elems={exportElems} />}
                                     fileName={`${pdfName}.pdf`}>
                        <Button size={"large"} fullWidth sx={{mb:2}}>Export to PDF</Button>
                    </PDFDownloadLink>}
                        <DocumentHeaderLayout>
                        <UserDetails
                            customer={data?.customers}/>
                        <CompanyDetails company={data?.profiles}/>
                    </DocumentHeaderLayout>
                    {children}
                </>:""}
            </Box>}
        </Box>
    );
};

export default DocumentLayout;
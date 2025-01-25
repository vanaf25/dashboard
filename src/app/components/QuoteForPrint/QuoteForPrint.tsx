import React, {useMemo} from 'react';
import Box from "@mui/material/Box";
import {Document, Page as PDFPage, PDFDownloadLink, StyleSheet, Text, View} from "@react-pdf/renderer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DocumentHeader from "@/app/components/DocumentHeader/DocumentHeader";
import Card from "@mui/material/Card";
import PaymentCalculation from "@/app/components/TasksFields/PaymentCalculation/PaymentCalculation";
import DocumentTermsConditions from "@/app/components/DocumentTermsConditions/DocumentTermsConditions";
import DocumentFooter from "@/app/components/DocumentFooter/DocumentFooter";
import PrintableDocumentHeader from "@/app/components/ReactPdf/PrintableDocumentHeader/PrintableDocumentHeader";
import PrintablePaymentCalculations
    from "@/app/components/ReactPdf/PrintablePaymentCalculations/PrintablePaymentCalculations";
import DocumentTermsConditionsPDF from "@/app/components/ReactPdf/PrintableTermsConditions/PrintableTermsConditions";
interface QuoteForPrintProps{
    data:any,
    type:string
}
export  const styles = StyleSheet.create({
    page: { padding: 20, backgroundColor: "#F0F5F9",color:"#111c2d" },
    section: { marginBottom: 10, padding: 10, backgroundColor: "white", borderRadius: 10 },
    title: { fontSize: 24, textAlign: "center", marginBottom: 20,color:"#111c2d" },
    heading: { fontSize: 18, marginBottom: 10,color:"#111c2d"},
    description: { fontSize: "10px",fontWeight:400,color:"#111c2d" },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20,
    },
    text: {
        fontSize: 12,
    },
    textWithMargin:{
        fontSize:12,
        marginBottom:"10px",
    }
});
const PDFDocument = ({ data, type, isContract }: any) => (
    <Document>
        <PDFPage  size="A4" wrap={false}  style={styles.page}>
            <Text style={styles.title}>{type || "Quote"} for {data.service}</Text>
            <PrintableDocumentHeader type={isContract ? "contract":"quote"} customers={data.customers} profiles={data.profiles}  />
            <Text style={styles.title}>Proposed Work Scope</Text>
            {data.fields?.map((field: any, index: number) => (
                <View  key={index}  style={styles.section}>
                    <Text style={styles.heading}>{field.title}</Text>
                    {<Text style={styles.description}>{field.description}</Text>}
                </View>
            ))}
            <Text style={styles.title}>Additional Work description:</Text>
            {data.custom_fields?.map((field: any, index: number) => (
                <View  key={index}  style={styles.section}>
                    <Text style={styles.heading}>{field.value}</Text>
                </View>
            ))}
            {!isContract && <PrintablePaymentCalculations rowData={data.line_items}/>}
            {isContract && (
                <Text style={styles.textWithMargin}>
                    All work described above will be accomplished in accordance with companies Standard Installation
                    System and Terms and Conditions which is part of this Proposal and Agreement and incorporated herein
                    by reference. The work will be guaranteed in accordance with companies Limited Labor Warranty.
                </Text>
            )}
            {isContract && <DocumentTermsConditionsPDF data={data} />}
            {!isContract && data.notes && (<>
                <Text style={styles.heading}>Extra information: </Text>
                <View style={styles.section}>
                    <Text style={styles.description}>{data.notes}</Text>
                </View>
            </>)}
            <View style={styles.footerContainer}>
                <Text style={styles.text}>Company Phone: {data?.profiles?.phone}</Text>
                <Text style={styles.text}>
                    Company Address: {data?.customers?.company_address} {data?.profiles?.city} {data?.profiles?.state}.{' '}
                    {data?.profiles?.zip}
                </Text>
            </View>
        </PDFPage>
    </Document>
);
const QuoteForPrint:React.FC<QuoteForPrintProps> = ({data,type}) => {
    const isContract = useMemo(() => type === "contract" && data?.type === "contract", [type, data]);
    return (
            <Box>
                {data && (
                    <>
                        <PDFDownloadLink
                            document={<PDFDocument data={data} type={type} isContract={isContract}/>}
                            fileName={`${type || "quote"}_${data.service}.pdf`}
                        >
                            <Button fullWidth sx={{mb: 2, fontSize: "20px"}}>
                                {"EXPORT TO PDF"}
                            </Button>
                        </PDFDownloadLink>

                        <div id={"toPDF"} style={{background: "#F0F5F9", padding: "20px"}}>
                            <Typography sx={{mb: "20px", textAlign: "center"}}
                                        variant={"h2"}>{type || "quote"} for {data.service} </Typography>
                            <DocumentHeader
                                customers={data.customers}
                                profiles={data.profiles}
                                type={isContract ? "contract" : "quote"}
                            />
                            <Typography sx={{mb: 2, textAlign: "center"}} variant={"h2"}>Proposed Work
                                Scope</Typography>
                            {data.fields && data.fields?.map((field: any, index: number) => <Card sx={{mb:2,p:2}}
                                                                                                  key={index}>
                                <Typography variant={"h4"} sx={{mb: 1}}>{field.title}</Typography>
                                {isContract ? <Typography>{field.description}</Typography> : <></>}
                            </Card>)}
                            <Typography variant={"h5"} sx={{mb: 2}}>Additional Work Description</Typography>
                            {data.custom_fields && data.custom_fields?.map((field: any, index: number) =>
                                <Card sx={{p:2,mb:2}}
                                      key={index}>
                                    <Typography variant={"h4"}>{field.value}</Typography>
                                </Card>)}
                            {isContract && <Typography sx={{mb: 2}}>
                                All work described above will be accomplished in accordance with
                                companies Standard Installation System and Terms and Conditions which is
                                part
                                of this Proposal and Agreement and incorporated herein by reference.
                                The work will be guaranteed in accordance with companies Limited Labor
                                Warranty.
                            </Typography>}
                            {data.line_items && !isContract && <PaymentCalculation rowData={data.line_items} isForPrint/>}
                            {!isContract && <>
                                {data.notes && <>
                                    <Typography variant={"h5"} sx={{mb: 2}}>Extra information:</Typography>
                                    <Card sx={{p:2,mb:2}}>
                                        <Typography variant={"h4"}>{data.notes}</Typography>
                                    </Card>
                                </>}
                            </>}
                            {isContract && <DocumentTermsConditions isForPrint data={data}/>}
                            <DocumentFooter
                                customers={data.customers}
                                profiles={data.profiles}
                            />
                        </div>
                    </>
                )}
            </Box>);
};

export default QuoteForPrint;
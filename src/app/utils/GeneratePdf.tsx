import React from 'react';
import { Document, Page, StyleSheet, Text, View, Image } from '@react-pdf/renderer';
import { ElementType, PDFElem } from "@/app/types/exportPdfTypes";
import PrintableDocumentHeader from "@/app/components/ReactPdf/PrintableDocumentHeader/PrintableDocumentHeader";
import GenerateTablePDF from "@/app/utils/GenerateTablePDF";
import PDFListCard, {ListCardElem} from "@/app/components/ReactPdf/PDFListCard/PDFListCard";
import {PageSize} from "@react-pdf/types";

export const styles = StyleSheet.create({
    page: { padding: 20, backgroundColor: "#F0F5F9", color: "#111c2d" },
    section: { marginBottom: 10, padding: 10, backgroundColor: "white", borderRadius: 10 },
    bigTitle: { fontSize: 28, textAlign: "center", marginBottom: 15, color: "#111c2d" },
    title: { fontSize: 24, textAlign: "center", marginBottom: 20, color: "#111c2d" },
    mediumTitle: { fontSize: 22, marginBottom: 10 },
    heading: { fontSize: 18, marginBottom: 10, color: "#111c2d" },
    h4: { fontSize: 16, marginBottom: 10 },
    h4Center: { fontSize: 16, marginBottom: 10,marginTop:5,textAlign:"center" },
    description: { fontSize: "10px", fontWeight: 400, color: "#111c2d" },
    text: { fontSize: 12 },
    textWithMargin: { fontSize: 12, marginBottom: "10px" },

    // New Styles for Image & Date Block
    imageDateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 10,
        paddingBottom: 5,
        gap: 10,
        marginTop:10,
    },
    signatureElem:{
        width: "50%",
    },
    signatureElemWrapper: {
        width:"100%",
        borderBottomWidth: 1,
        alignItems:"center",
        paddingBottom:5,
        borderBottomColor: "#111c2d",
    },
    image: {
        height: 75,
        width: 100,
    },
    dateText: {
        fontSize: 14,
        textAlign:"center",
        color: "#111c2d",
    },
});

export interface GeneratePDFProps {
    elems: PDFElem[];
    data?: any;
    pdfTitle?: string;
    withOutHeader?: boolean;
    pageType?:PageSize,
    cardListRows?:ListCardElem[]
}

const GeneratePdf: React.FC<GeneratePDFProps> = ({ elems, data, pdfTitle,
                                                     withOutHeader
                                                     ,cardListRows
                                                 ,pageType }) => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <Document>
            <Page size={pageType || `A4`} style={styles.page}>
                <Text style={styles.bigTitle}>{data?.profiles?.companyName}</Text>
                {pdfTitle && <Text style={styles.title}>{pdfTitle}</Text>}

                {!withOutHeader && data && (
                    <PrintableDocumentHeader type={"quote"} customers={data?.customers} profiles={data?.profiles} />
                )}
                {elems.map((el, index) => {
                    const getStyle = () => {
                        switch (el.type) {
                            case ElementType.P:
                                return styles.textWithMargin;
                            case ElementType.H3:
                                return styles.heading;
                            case ElementType.H2:
                                return styles.title;
                            case ElementType.H4:
                                return styles.h4;
                            case ElementType.IMG:
                                return styles.image;
                            default:
                                return styles.section;
                        }
                    };
                    switch (el.type) {
                        case ElementType.TABLE:
                            return <GenerateTablePDF key={index} tableRef={el.tableRef} data={el.rows as any[]}
                                                     columns={el.columns} title={el.title} />

                        case ElementType.SECTION:
                            return (
                                <View key={index} style={styles.section}>
                                    {el.title && <Text style={el.content ? styles.heading : { ...styles.heading, marginBottom: 0 }}>{el.title}</Text>}
                                    {el.content && <Text style={el.title ? styles.description : styles.text}>{el.content.replace(/\n\s+/g, " ")}</Text>}
                                </View>
                            );
                        case ElementType.ListCard:
                            return <>{el.cardListRows ? <PDFListCard rows={el.cardListRows} />:<></>}</>
                        case ElementType.IMG:
                            return (
                                <View key={index} style={styles.imageDateContainer}>
                                    <View style={styles.signatureElem}>
                                        <View style={styles.signatureElemWrapper}>
                                            {el.src ? <Image style={styles.image} src={el.src} /> : null}
                                        </View>
                                        <View>
                                            <Text style={styles.h4Center}>Signature</Text>
                                        </View>
                                    </View>
                                    <View style={styles.signatureElem} >
                                           <View style={styles.signatureElemWrapper}>
                                               <Text style={styles.dateText}>{currentDate}</Text>
                                           </View>
                                        <View>
                                            <Text style={styles.h4Center}>Date</Text>
                                        </View>
                                       </View>

                                </View>
                            );

                        default:
                            return (
                                <>{el.content ? <Text key={index} style={getStyle()}>
                                    {el.content.replace(/\n\s+/g, " ")}
                                </Text>:<></>}</>
                            );
                    }
                })}
            </Page>
        </Document>
    );
}
export default GeneratePdf;

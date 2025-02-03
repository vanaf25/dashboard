import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { ElementType, PDFElem } from "@/app/types/exportPdfTypes";
import PrintableDocumentHeader from "@/app/components/ReactPdf/PrintableDocumentHeader/PrintableDocumentHeader";
import GenerateTablePDF from "@/app/utils/GenerateTablePDF";

export const styles = StyleSheet.create({
    page: { padding: 20, backgroundColor: "#F0F5F9", color: "#111c2d" },
    section: { marginBottom: 10, padding: 10, backgroundColor: "white", borderRadius: 10 },
    bigTitle: { fontSize: 28, textAlign: "center", marginBottom: 15, color: "#111c2d" },
    title: { fontSize: 24, textAlign: "center", marginBottom: 20, color: "#111c2d" },
    mediumTitle: { fontSize: 22, marginBottom: 10 },
    heading: { fontSize: 18, marginBottom: 10, color: "#111c2d" },
    h4:{fontSize:16,marginBottom:10},
    description: { fontSize: "10px", fontWeight: 400, color: "#111c2d" },
    text: { fontSize: 12 },
    textWithMargin: { fontSize: 12, marginBottom: "10px" },
});

export interface GeneratePDFProps {
    elems: PDFElem[];
    data?: any;
    pdfTitle?: string;
    withOutHeader?: boolean;
}

const GeneratePdf: React.FC<GeneratePDFProps> = ({ elems, data, pdfTitle, withOutHeader }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.bigTitle}>{data?.profiles?.companyName}</Text>
                {pdfTitle && <Text style={styles.title}>{pdfTitle}</Text>}
                {data && !withOutHeader && (
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
                                return styles.h4
                            default:
                                return styles.section;
                        }
                    };

                    switch (el.type) {
                        case ElementType.TABLE:
                            return <GenerateTablePDF key={index} data={el.rows as any[]} columns={el.columns} title={el.title}  />;

                        case ElementType.SECTION:
                            return (
                                <View key={index} style={styles.section}>
                                    {el.title && <Text style={el.content ? styles.heading:{...styles.heading,marginBottom:0}}>{el.title}</Text>}
                                    {el.content && <Text style={el.title ? styles.description : styles.text}>
                                        {el.content.replace(/\n\s+/g, " ")}
                                    </Text>}
                                </View>
                            );

                        default:
                            return (
                                <Text key={index} style={getStyle()}>
                                    {el.content.replace(/\n\s+/g, " ")}
                                </Text>
                            );
                    }
                })}
            </Page>
        </Document>
    );
};

export default GeneratePdf;

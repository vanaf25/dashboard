import React, { useMemo } from 'react';
import { Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { TERMS } from "@/app/consts/contractData/contractData";
import BlankCard from "@/app/components/shared/BlankCard"; // You can replace this with a `View` component
import {styles as GlobalStyles} from "@/app/components/QuoteForPrint/QuoteForPrint"
interface DocumentTermsConditionsProps {
    data: any;
}

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    highlightedText: {
        backgroundColor: 'yellow',
        padding: '0 4px',
        borderRadius: 4,
    },
    table: {
        borderWidth: 1,
        borderColor: '#d3d3d3',
        marginBottom: 10,
        width: '100%',
    },
    tableCell: {
        padding: 5,
        textAlign: 'center',
    },
    row:{
        flexDirection:"row",
    },
    card: {
        marginBottom: 20,
    },
    termTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    termDescription: {
        fontSize: 12,
    },
    mb:{
        marginBottom:"10px",
    }
});

const DocumentTermsConditionsPDF: React.FC<DocumentTermsConditionsProps> = ({ data }) => {
    const contractDataRows = [
        {
            percentage: 30,
            description: 'Due within 3 days of executing this contract.',
        },
        {
            percentage: 45,
            description:
                'Due 5 days after the arrival of supplies and the start of work, whichever comes first.',
        },
        {
            percentage: 25,
            description: 'Due and payable in full at the company\'s office at the address below, in full,upon . ',
        },
    ];
    const terms = TERMS.filter((term) => !data?.terms?.includes(term.order));
    return (
        <Document>
            <View style={styles.page}>
                {/* Title */}
                <Text style={styles.title}>Terms And Conditions:</Text>

                {/* Contract Price Section */}
                <View style={styles.section}>
                    <Text>
                        All labor and material necessary to perform the work described above will be furnished for the sum of{' '}
                        <Text style={styles.highlightedText}>{data.totalPrice}</Text> (the “Contract Price”).
                    </Text>
                </View>
                {/* Table */}
                <View>
                    {/* Table Rows */}
                    {contractDataRows.map((row, index) => (
                        <View style={styles.row}  key={index}>
                            <Text style={styles.tableCell}>{row.percentage}%</Text>
                            <Text style={styles.tableCell}>${((row.percentage / 100) * data.totalPrice).toFixed(2)}</Text>
                            <Text style={styles.tableCell}>{row.description}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.mb}>
                    <Text>
                        94% (substantial completion) of completion of the work and prior to the completion of any punch out list submitted to the company by the Customer. Past due accounts will have a delinquent charge imposed on the balance at the rate of 10% per month. If the company hires an attorney to collect any sums owed, Customer agrees to pay attorney's fees and costs of collection including additional fees for time spend by the company on collecting from the Customer. All work described above will be accomplished in accordance with the Company's Standard Installation Process and Standard General Conditions which is part of this Contract and Agreement and or is incorporated herein by reference.  The work will be guaranteed in accordance with The Company's Limited Labor Warranty which is not part of this contract and will be issued upon completion of the worked and only after all bills are paid by the Customer
                    </Text>
                </View>
                {/* Terms */}
                {terms.map((term) => (
                    <View style={GlobalStyles.section} key={term.order}>
                        <Text style={GlobalStyles.heading}>{term.title}</Text>
                        <Text style={GlobalStyles.description}>{term.description}</Text>
                    </View>
                ))}
            </View>
        </Document>
    );
};

export default DocumentTermsConditionsPDF;

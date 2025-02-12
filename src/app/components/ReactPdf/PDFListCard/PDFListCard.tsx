import React from "react";
import {  Text, View, StyleSheet } from "@react-pdf/renderer";
export interface ListCardElem{
    field: string;
    value: string | number
}
  interface PdfListCardProps {
    rows: ListCardElem[];
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        border: "1px solid black",
        width: "100%",
        marginBottom:20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        paddingVertical: 5,
    },
    lastRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    text: {
        fontSize: 12,
    },
    boldText: {
        fontSize: 12,
        fontWeight: "bold",
    },
});

const PdfListCard: React.FC<PdfListCardProps> = ({ rows }) => {
    return (
        <View style={styles.container}>
            {rows.map((row, index) => (
                <View key={row.field} style={index !== rows.length - 1 ? styles.row : styles.lastRow}>
                    <Text style={styles.text}>{row.field}</Text>
                    <Text style={styles.boldText}>{row.value}</Text>
                </View>
            ))}
        </View>
    );
};

export default PdfListCard;

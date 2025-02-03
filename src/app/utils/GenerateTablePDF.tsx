import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { PDFColumn } from "@/app/types/exportPdfTypes";

// Styles to simulate border-collapse: collapse
const styles = StyleSheet.create({
    table: { flexDirection: "column", width: "auto", borderWidth: 1, borderColor: "black",marginBottom:20 },
    tableRow: { flexDirection: "row" },
    tableColHeader: {
        padding: 5,
        flexDirection: "column",
        justifyContent:"center",
        backgroundColor: "#D3D3D3",
        borderBottomWidth:1,
        borderBottomColorColor: "white",
        borderRightWidth:1,
        borderBottomRightColor: "white",
        marginRight: -1,
        marginBottom:-1
    },
    tableCol: {
        padding: 5,
        borderBottomWidth:1,
        borderBottomColorColor: "black",
        borderRightWidth:1,
        borderBottomRightColor: "black",
        marginRight: -1,
        marginBottom:-1    },
    tableCellHeader: { fontWeight: "bold" },
    tableCell: { textAlign: "center" },
});

interface PDFTableProps {
    data: any[];
    title?: string;
    columns?: PDFColumn[];
}

const PDFTable: React.FC<PDFTableProps> = ({ data, title, columns }) => (
    <>
        {title && <Text style={{ fontSize: 16, marginBottom: 10 }}>{title}</Text>}
        <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
                {columns?.map((col, index) => (
                    <View
                        style={[
                            styles.tableColHeader,
                            { flex: col.flex || 1 },
                        ]}
                        key={col.field}
                    >
                        <Text style={[styles.tableCellHeader, styles.tableCell]}>{col.field}</Text>
                    </View>
                ))}
            </View>

            {/* Table Rows */}
            {data.map((row, rowIndex) => (
                <View style={styles.tableRow} key={rowIndex}>
                    {columns?.map((col, colIndex) => (
                        <View
                            style={[
                                styles.tableCol,
                                { flex: col.flex || 1 },
                            ]}
                            key={colIndex}
                        >
                            <Text style={styles.tableCell}>{typeof row[col.field] === "boolean"
                                ? row[col.field] ? "yes" : "no"
                                : row[col.field]}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    </>
);

export default PDFTable;

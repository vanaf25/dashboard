import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import {RowData} from "@/app/components/TasksFields/PaymentCalculation/PaymentCalculation";

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 12,
        fontFamily: "Helvetica",
    },
    table: {
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#d3d3d3",
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3",
    },
    tableHeader: {
        backgroundColor: "#f5f5f5",
        fontWeight: "bold",
    },
    tableCell: {
        flex: 1, // Ensures equal width for all cells
        padding: 5,
        borderRightWidth: 1,
        borderRightColor: "#d3d3d3",
        textAlign: "center",
    },
    lastCell: {
        borderRightWidth: 0, // Removes the right border for the last cell
    },
    tableFooter: {
        backgroundColor: "#f0f8ff",
        fontWeight: "bold",
    },
});

const PaymentCalculationPDF:React.FC<{rowData:RowData[]}> = ({ rowData }) => {
    // Calculate totals
    const total = rowData.reduce((sum, row) => sum + row.price, 0);
    const month84 = rowData.reduce((sum, row) => sum + row.price / 84, 0);
    const month36 = rowData.reduce((sum, row) => sum + row.price / 36, 0);

    return (
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={styles.tableCell}>Description</Text>
                        <Text style={styles.tableCell}>Price</Text>
                        <Text style={styles.tableCell}>84 Months</Text>
                        <Text style={[styles.tableCell, styles.lastCell]}>36 Months</Text>
                    </View>

                    {/* Table Rows */}
                    {rowData.map((row) => (
                        <View style={styles.tableRow} key={row.id}>
                            <Text style={styles.tableCell}>{row.description}</Text>
                            <Text style={styles.tableCell}>${row.price.toFixed(2)}</Text>
                            <Text style={styles.tableCell}>
                                ${(row.price / 84).toFixed(2)}
                            </Text>
                            <Text style={[styles.tableCell, styles.lastCell]}>
                                ${(row.price / 36).toFixed(2)}
                            </Text>
                        </View>
                    ))}

                    {/* Table Footer */}
                    <View style={[styles.tableRow, styles.tableFooter]}>
                        <Text style={styles.tableCell}>Total</Text>
                        <Text style={styles.tableCell}>${total.toFixed(2)}</Text>
                        <Text style={styles.tableCell}>${month84.toFixed(2)}</Text>
                        <Text style={[styles.tableCell, styles.lastCell]}>
                            ${month36.toFixed(2)}
                        </Text>
                    </View>
                </View>
    );
};

export default PaymentCalculationPDF;

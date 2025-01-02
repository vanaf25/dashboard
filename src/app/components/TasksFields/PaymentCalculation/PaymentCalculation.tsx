import React, { useEffect, useMemo, useRef, useState } from "react";
import TableName from "@/app/components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";
import {
    ColDef,
    ValueGetterParams,
    ValueFormatterParams,
    ValueParserParams,
    CellValueChangedEvent,
} from "ag-grid-community";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export interface RowData {
    id: number;
    description: string;
    price: number;
}

interface PaymentCalculationProps {
    rowData: RowData[];
    setRowData: React.Dispatch<React.SetStateAction<RowData[]>>;
}

const PaymentCalculation: React.FC<PaymentCalculationProps> = ({
                                                                   rowData,
                                                                   setRowData,
                                                               }) => {
    const columnDefs: ColDef[] = useMemo(
        () => [
            {
                headerName: "Description",
                field: "description",
                flex: 2,
                editable: true,
            },
            {
                headerName: "Price",
                field: "price",
                flex: 1,
                editable: true,
                valueFormatter: (params: ValueFormatterParams) =>
                    `$${Number(params.value).toFixed(2)}`,
                valueParser: (params: ValueParserParams) =>
                    Number(params.newValue) || 0,
            },
            {
                headerName: "84 Months",
                field: "84month",
                flex: 1,
                valueGetter: (params: ValueGetterParams) =>
                    (params.data.price / 84).toFixed(2),
                valueFormatter: (params: ValueFormatterParams) => `$${params.value}`,
            },
            {
                headerName: "36 Months",
                field: "36month",
                flex: 1,
                valueGetter: (params: ValueGetterParams) =>
                    (params.data.price / 36).toFixed(2),
                valueFormatter: (params: ValueFormatterParams) => `$${params.value}`,
            },
            {
                headerName: "Actions",
                flex: 1,
                cellRenderer: (params: any) => {
                    const handleDelete = () => {
                        const updatedData = rowData.filter(
                            (row) => row.id !== params.data.id
                        );
                        setRowData(updatedData);
                    };

                    return (
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    );
                },
            },
        ],
        [rowData]
    );

    const addRow = () => {
        const newRow: RowData = {
            id: Date.now(),
            description: "",
            price: 0,
        };
        setRowData((prevData) => [...prevData, newRow]);
    };

    const gridRef = useRef(null);
    const [totalData, setTotalData] = useState({
        total: 0,
        month84: 0,
        month36: 0,
    });

    const calculateTotalValues = () => {
        const total = rowData.reduce((sum, row) => sum + row.price, 0);
        const month84 = rowData.reduce((sum, row) => sum + row.price / 84, 0);
        const month36 = rowData.reduce((sum, row) => sum + row.price / 36, 0);

        setTotalData({
            total: parseFloat(total.toFixed(2)),
            month84: parseFloat(month84.toFixed(2)),
            month36: parseFloat(month36.toFixed(2)),
        });
    };

    const onCellValueChanged = (event: CellValueChangedEvent<RowData>) => {
        calculateTotalValues();
        const updatedData = rowData.map((row) =>
            row.id === event.data.id
                ? { ...row, [event.colDef.field as keyof RowData]: event.newValue }
                : row
        );
        setRowData(updatedData);
    };

    useEffect(() => {
            calculateTotalValues();
    }, [rowData]);

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                onClick={addRow}
                style={{ marginBottom: 10 }}
            >
                Add Row
            </Button>
            <TableName>Monthly Payment Calculation with No Interest Added</TableName>
            <Table
                rows={rowData}
                customRef={gridRef}
                columns={columnDefs}
                onCellValueChanged={onCellValueChanged}
            />
            <Card sx={{ maxWidth: 400, margin: "10px auto", padding: 1 }}>
                <CardContent>
                    <Typography variant="h5" sx={{mb:2}} gutterBottom>
                        Total Data Summary
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                sx={{ fontSize: "18px" }}
                            >
                                Total:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" sx={{ fontSize: "18px" }}>
                                ${totalData.total}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                sx={{ fontSize: "18px" }}
                            >
                                84 Months:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" sx={{ fontSize: "18px" }}>
                                ${totalData.month84}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                sx={{ fontSize: "18px" }}
                            >
                                36 Months:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" sx={{ fontSize: "18px" }}>
                                ${totalData.month36}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PaymentCalculation;

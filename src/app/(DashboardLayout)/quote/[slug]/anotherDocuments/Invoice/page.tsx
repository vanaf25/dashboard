"use client";
import { Paper, Typography, TextField, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Table from "@/app/components/letters/Table/Table";
import { useMemo, useRef, useState } from "react";
import filterPositiveNumbers from "@/app/utils/filterPositiveNumbers";
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import ListCard from "@/app/components/letters/ListCard/ListCard";
import calculateTotalAmount from "@/app/utils/calculateTotalAmount";
import getRowData from "@/app/utils/getRowData";
import { ElementType } from "@/app/types/exportPdfTypes";
import { DatePicker } from '@mui/x-date-pickers';
import type { AgGridReact as AgGridReactType } from "ag-grid-react";
import dayjs from "dayjs";

const Page = () => {
    const sentences = [
        "Balance's are due and payable in full, upon 94% of completion of the work listed above and prior to the completion of any punch out list submitted to the above Company by the Customer listed above.",
        "Past due accounts will have a Late Fee imposed on the balance in the amount of 10% of the balance that is due.",
        "Accounts that are past due will incur this late fee each month the balance is past due until the invoice is paid in full."
    ];

    const [totalInvoiceAmount, setTotalInvoiceAmount] = useState(0);
    const [dateSold, setDateSold] = useState<any>(null);
    const [poNumber, setPoNumber] = useState("");
    const [dateBalance, setDateBalance] = useState<any>(null);

    const invoiceColumns = useMemo(() => ([
        {
            field: "quantity",
            flex: 1,
            cellEditor: "agNumberCellEditor",
            cellDataType: "number",
            editable: true,
            label: "Quantity"
        },
        {
            field: "description",
            editable: true,
            label: "Description",
            flex: 2
        },
        {
            field: "rate",
            flex: 1,
            cellEditor: "agNumberCellEditor",
            cellDataType: "number",
            editable: true,
            label: "Rate or Item Cost"
        },
        {
            field: "amount",
            flex: 1,
            valueGetter: (p:any) => {
                if (p.data.quantity && p.data.rate) return +(p.data.quantity) * +(p.data.rate);
                return "";
            }
        }
    ]), []);

    const invoiceRows = useMemo(() => Array.from({ length: 6 }, () => ({ description: "", amount: "" })), []);
    const invoiceTableRef = useRef<AgGridReactType>(null);
    const [actualRowData, setActualRowData] = useState<any[]>(invoiceRows);

    const onCellValueChanged = (e:any) => {
        filterPositiveNumbers(e);
        setTotalInvoiceAmount(calculateTotalAmount(invoiceTableRef, "amount"));
        if (invoiceTableRef?.current?.api) {
            const rowData = getRowData(invoiceTableRef?.current?.api, e.rowIndex);
            setActualRowData(prevState => prevState.map((row,index) => index ==e.rowIndex ? rowData : row));
        }
    };

    const thanksMessage = "Thank you for your business and please call us if you have any questions regarding your bill";
    const cardListData=useMemo(()=>([
        { field: "subtotal", value: totalInvoiceAmount },
        { field: "30 days late", value: 300 },
        { field: "60 days late", value: 500 },
        { field: "90 days late", value: 700 },
        { field: "collections", value: 400 },
        { field: "total due", value: totalInvoiceAmount+300+500+700+400},
    ]),[totalInvoiceAmount])
    const exportableElems=[
        {
            type:ElementType.TABLE,
            content:"",
            columns:[
            {field:"dateSold",flex:1},
                {field:"poNumber",flex:1},
                {field:"dateBalance",flex:1}],
            rows:[{
                dateSold:dateSold ? dayjs(dateSold).format("MM/DD/YYYY") : "N/A",
                poNumber,
                dateBalance:dateBalance ? dayjs(dateBalance).format("MM/DD/YYYY") : "N/A"}]
        },
        {
            columns:invoiceColumns,
            type:ElementType.TABLE,rows:actualRowData,content:""},
        {type:ElementType.SECTION,content:`
         DUE TO LONG DELAYS IN CHECKS CLEARING OUR ACCOUNT BECAUSE OF COVID,
          WE REQUEST CASH PAYMENT FOR THIS INVOICE`},
        {type:ElementType.ListCard,cardListRows:cardListData},
        ...sentences.map(el=>({type:ElementType.P,content:el})),
        {type:ElementType.SECTION,content:thanksMessage}
    ]
    return (
        <DocumentLayout pdfName={"Invoice"} pdfTitle={"Invoice"} exportElems={exportableElems}>
            <Typography gutterBottom sx={{ mb: 3 }} textAlign={"center"} variant={"h3"}>Invoice</Typography>

            {/* Replacing first table with a Grid Layout */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={4}>
                    <DatePicker
                        label="Date Sold"
                        value={dateSold}
                        onChange={(newValue) => setDateSold(newValue)}
                        slotProps={{ textField: { fullWidth: true } }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="P.O. No."
                        fullWidth
                        value={poNumber}
                        onChange={(e) => setPoNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <DatePicker
                        label="Date Balance or Payment Due"
                        value={dateBalance}
                        onChange={(newValue) => setDateBalance(newValue)}
                        slotProps={{ textField: { fullWidth: true } }}
                    />
                </Grid>
            </Grid>
            {/* Invoice Table */}
            <Table customRef={invoiceTableRef} onCellValueChanged={onCellValueChanged} rows={invoiceRows} columns={invoiceColumns} />

            <Box sx={{ display: "flex", justifyContent: "space-between", gap: "20px", mb: 2 }}>
                <Box sx={{ maxWidth: 500 }}>
                    <Paper sx={{ p: 1 }}>
                        <Typography>
                            DUE TO LONG DELAYS IN CHECKS CLEARING OUR ACCOUNT BECAUSE OF COVID, WE REQUEST CASH PAYMENT FOR THIS INVOICE.
                        </Typography>
                    </Paper>
                </Box>
                <ListCard
                    rows={[
                        { field: "subtotal", value: totalInvoiceAmount },
                        { field: "30 days late", value: 300 },
                        { field: "60 days late", value: 500 },
                        { field: "90 days late", value: 700 },
                        { field: "collections", value: 400 },
                        { field: "total due", value: 3400 },
                    ]}
                />
            </Box>

            <Paragraphs sections={sentences} />

            <Paper sx={{ display: "inline-block", p: 2, margin: "10px auto" }}>
                <Typography>{thanksMessage}</Typography>
            </Paper>
        </DocumentLayout>
    );
};

export default Page;

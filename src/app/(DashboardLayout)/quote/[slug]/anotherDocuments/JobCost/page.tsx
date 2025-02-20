"use client";
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Table from "@/app/components/letters/Table/Table";
import TableWithOutHeaders from "@/app/components/letters/TableWithoutHeaders/TableWithOutHeaders";
import calculateSeriesOfNumbers from "@/app/utils/calculateSeriesOfNumbers";
import calculateTotalAmount from "@/app/utils/calculateTotalAmount";
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import type {AgGridReact as AgGridReactType} from "ag-grid-react/dist/types/src/agGridReact";
import {ElementType, PDFElem} from "@/app/types/exportPdfTypes";
import getActualTableData from "@/app/utils/getActualTableData";
import {TextField, Typography} from "@mui/material";

const totalKeys = ["amount", "totalPay", "totalCost"];

const Page = () => {
  const firstTableRef = useRef<AgGridReactType>(null);
  const laborTableRef = useRef<AgGridReactType>(null);
  const fullBidSubTableRef = useRef<AgGridReactType>(null);
  const totalPaymentsTableRef = useRef<AgGridReactType>(null);
  const totalTableRef:React.MutableRefObject<any> = useRef(null);

  const [result, setResult] = useState({ income: 0, expense: 0, balance: 0, projectTaxes: 0 });

  const updateTotalTable = useCallback((ref:React.RefObject<any>, key:string, totalKey:string) => {
    const amount = calculateTotalAmount(ref, key);
    const expense = calculateTotalAmount(laborTableRef, "totalPay") +
      calculateTotalAmount(firstTableRef, "amount") +
      calculateTotalAmount(fullBidSubTableRef, "totalCost");
    const income = calculateTotalAmount(totalPaymentsTableRef, "total");
    const balance = income - expense;
    const projectTaxes = Math.round((balance * 2) * 100) / 100;
    setResult({ expense, income, balance, projectTaxes });

    let firstRowNode = totalTableRef?.current?.api?.getDisplayedRowAtIndex(0);
    if (firstRowNode) firstRowNode.setDataValue(totalKey, amount);
  }, []);

  const updateSupplies = useCallback(() => {
    updateTotalTable(firstTableRef, "amount", "supplies");
  }, [updateTotalTable,totalTableRef.current]);

  const updateFullBidSub = useCallback(() => {
    updateTotalTable(fullBidSubTableRef, "totalCost", "fullBidSub");
  }, [updateTotalTable,totalTableRef.current]);

  const updateTotalPayments = useCallback(() => {
    updateTotalTable(totalPaymentsTableRef, "total", "totalPayments");
  }, [updateTotalTable,totalTableRef.current]);

  const updateLaborSub = useCallback(() => {
    updateTotalTable(laborTableRef, "totalPay", "laborSub");
  }, [updateTotalTable,totalTableRef.current]);

  useEffect(() => {
    updateSupplies();
  }, [updateSupplies]);

  useEffect(() => {
    updateFullBidSub();
  }, [updateFullBidSub]);

  useEffect(() => {
    updateTotalPayments();
  }, [updateTotalPayments]);

  useEffect(() => {
    updateLaborSub();
  }, [updateLaborSub]);
  const onCellValueChanged = useCallback((params:any) => {
    const newValue = params.newValue;
    const oldValue = params.oldValue;
    if (newValue <= 0) {
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    } else {
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, newValue);
      updateSupplies();
      updateFullBidSub();
      updateTotalPayments();
      updateLaborSub();
    }
  }, [updateSupplies, updateFullBidSub, updateTotalPayments, updateLaborSub]);

  // Мемоизация колонок и строк для каждой таблицы
  const firstTableColumns = useMemo(() => [
    { field: 'supplierName', editable: true, headerName: 'Supplier Name',flex:2 },
    { field: 'description', editable: true, headerName: 'Description of Page Used',flex:2 },
    { field: 'date', cellDataType: "date",flex:1.5,
      valueFormatter: (params:any) => {
        const date = new Date(params.value);
        return date.toLocaleDateString(); // Форматирование даты
      },
      editable: true, headerName: 'Date' },
    { field: 'checkNumber', editable: true, headerName: 'Check #' },
    { field: 'amount', cellDataType: "number", editable: true,
      cellEditor: 'agNumberCellEditor', headerName: 'Amount',
      valueFormatter: (params:any) => parseFloat(params.value).toFixed(2) // Округление до двух знаков
    }
  ], []);

  const firstTableRows = useMemo(() => [
    {
      "supplierName": "ABC Supplies",
      "description": "Wood planks for construction",
      "date": "2024-09-30",
      "checkNumber": "12345",
      "amount": 1500
    },
    {
      "supplierName": "ABC Supplies",
      "description": "Wood planks for construction",
      "date": "2024-09-30",
      "checkNumber": "12345",
      "amount": 1500
    },
    {
      "supplierName": "ABC Supplies",
      "description": "Wood planks for construction",
      "date": "2024-09-30",
      "checkNumber": "12345",
      "amount": 1500
    },
    // Остальные строки...
  ], []);

  // Аналогично мемоизируйте колонки и строки для остальных таблиц
  const laborTableColumns = useMemo(() => [
    { field: 'subcontractLaborName', editable: true, headerName: 'Subcontract Labor Name' },
    { field: 'rate', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Rate' },
    { field: 'week1', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Week 1' },
    { field: 'week2', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Week 2' },
    { field: 'week3', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Week 3' },
    { field: 'week4', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Week 4' },
    { field: 'week5', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Week 5' },
    { field: 'week6', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Week 6' },
    { field: 'totalHours', valueGetter: (p:any) => calculateSeriesOfNumbers(p, "week", 6),
      headerName: 'Total Hours' },
    { field: 'totalPay', valueGetter: (p:any) => {
        const total = p.getValue('totalHours');
        if (total !== null && p.data.rate !== null) {
          return ((+total) * (+p.data.rate)).toFixed(2);
        }
        return "-";
      }, headerName: 'Total Pay',
      valueFormatter: (params:any) => params.value !== "-" ? `$${params.value}` : params.value
    }
  ], []);

  const laborTableRows = useMemo(() => [
    {
      "subcontractLaborName": "John Doe",
      "rate": 25.00,
      "week1": 40,
      "week2": 38,
      "week3": 42,
      "week4": 36,
      "week5": 40,
      "week6": 38,
      "totalPay": "-"
    },
    {
      "subcontractLaborName": "John Doe",
      "rate": 25.00,
      "week1": 40,
      "week2": 38,
      "week3": 42,
      "week4": 36,
      "week5": 40,
      "week6": 38,
      "totalPay": "-"
    },
    {
      "subcontractLaborName": "John Doe",
      "rate": 25.00,
      "week1": 40,
      "week2": 38,
      "week3": 42,
      "week4": 36,
      "week5": 40,
      "week6": 38,
      "totalPay": "-"
    },
    {
      "subcontractLaborName": "John Doe",
      "rate": 25.00,
      "week1": 40,
      "week2": 38,
      "week3": 42,
      "week4": 36,
      "week5": 40,
      "week6": 38,
      "totalPay": "-"
    },
  ], []);

  const fullBidSubTableColumns = useMemo(() => [
    { field: 'subcontractorName',editable:true,headerName: 'Full Bid Subcontractor Name' },
    { field: 'deposit', cellEditor: 'agNumberCellEditor', editable:true, headerName: 'Deposit' },
    { field: 'payment1',cellEditor: 'agNumberCellEditor', editable: true, headerName: 'Payment 1' },
    { field: 'payment2', cellEditor: 'agNumberCellEditor', editable: true, headerName: 'Payment 2' },
    { field: 'payment3',cellEditor: 'agNumberCellEditor', editable: true, headerName: 'Payment 3' },
    { field: 'payment4',cellEditor: 'agNumberCellEditor', editable: true, headerName: 'Payment 4' },
    { field: 'payment5', cellEditor: 'agNumberCellEditor', editable: true, headerName: 'Payment 5' },
    { field: 'totalSiteHours',cellEditor: 'agNumberCellEditor', editable: true, headerName: 'Total Site Hours' },
    { field: 'totalCost', headerName: 'Total Cost',
      valueGetter: (p:any) => {
        const payments = calculateSeriesOfNumbers(p, "payment", 5);
        if (payments !== "-" && p.data.deposit) {
          return +payments + Number((+p.data.deposit).toFixed(2));
        }
        return "-";
      },
      valueFormatter: (params:any) => params.value !== "-" ? `$${params.value}` : params.value
    }
  ], []);

  const fullBidSubTableRows = useMemo(() => [
    {
      "subcontractorName": "ABC Construction",
      "deposit": 5000,
      "payment1": 3000,
      "payment2": 4000,
      "payment3": 2500,
      "payment4": 2000,
      "payment5": 1500
    },
    {
      "subcontractorName": "ABC Construction",
      "deposit": 5000,
      "payment1": 3000,
      "payment2": 4000,
      "payment3": 2500,
      "payment4": 2000,
      "payment5": 1500
    },
    // Остальные строки...
  ], []);

  const totalPaymentsTableColumns = useMemo(() => [
    { field: 'paymentsReceived', editable: true, headerName: 'Payments Received' },
    { field: 'payment1', cellDataType: "number", editable: true, cellEditor: 'agNumberCellEditor',
      headerName: 'Payment 1' },
    { field: 'payment1Date', cellDataType: "date",
      valueFormatter: (params:any) => {
        const date = new Date(params.value);
        return date.toLocaleDateString(); // Форматирование даты
      }, editable: true, headerName: 'Date' },
    { field: 'payment2', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Payment 2' },
    { field: 'payment2Date', cellDataType: "date",
      editable: true, headerName: 'Date',
      valueFormatter: (params:any) => {
        const date = new Date(params.value);
        return date.toLocaleDateString(); // Форматирование даты
      }
    },
    { field: 'payment3', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Payment 3' },
    { field: 'payment3Date',
      valueFormatter: (params:any) => {
        const date = new Date(params.value);
        return date.toLocaleDateString(); // Форматирование даты
      },
      cellDataType: "date", editable: true, headerName: 'Date' },
    { field: 'payment4', editable: true, cellEditor: 'agNumberCellEditor', headerName: 'Payment 4' },
    { field: 'payment4Date',
      valueFormatter: (params:any) => {
        const date = new Date(params.value);
        return date.toLocaleDateString(); // Форматирование даты
      },
      editable: true, cellDataType: "date", headerName: 'Date' },
    { field: 'total', valueGetter: (p:any) => calculateSeriesOfNumbers(p, "payment", 4),
      headerName: 'Total',
      valueFormatter: (params:any) => params.value !== "-" ? `$${params.value}` : params.value
    }
  ], []);

  const totalPaymentsTableRows = useMemo(
    () => [
      {
        "paymentsReceived": "Contract payments",
        "payment1": 5000,
        "payment1Date": "2024-09-01",
        "payment2": 3000,
        "payment2Date": "2024-09-30",
        "payment3": 2500,
        "payment3Date": "2024-09-20",
        "payment4": 2000,
        "payment4Date": "2024-09-25"
      },
      {
        "paymentsReceived": "Change Order 1",
        "payment1": 4000,
        "payment1Date": "2024-10-01",
        "payment2": 2500,
        "payment2Date": "2024-10-15",
        "payment3": 3000,
        "payment3Date": "2024-10-30",
        "payment4": 3500,
        "payment4Date": "2024-11-05"
      },
      {
        "paymentsReceived": "Change Order 2",
        "payment1": 6000,
        "payment1Date": "2024-10-05",
        "payment2": 4500,
        "payment2Date": "2024-10-20",
        "payment3": 3200,
        "payment3Date": "2024-11-01",
        "payment4": 4000,
        "payment4Date": "2024-11-15"
      },
      {
        "paymentsReceived": "Change Order 3",
        "payment1": 3500,
        "payment1Date": "2024-09-10",
        "payment2": 1500,
        "payment2Date": "2024-09-30",
        "payment3": 500,
        "payment3Date": "2024-10-05",
        "payment4": 2000,
        "payment4Date": "2024-10-15"
      },
      {
        "paymentsReceived": "Change Order 4",
        "payment1": 3500,
        "payment1Date": "2024-09-10",
        "payment2": 1500,
        "payment2Date": "2024-09-30",
        "payment3": 500,
        "payment3Date": "2024-10-05",
        "payment4": 2000,
        "payment4Date": "2024-10-15"
      },
      {
        "paymentsReceived": "Change Order 5",
        "payment1": 3500,
        "payment1Date": "2024-09-10",
        "payment2": 1500,
        "payment2Date": "2024-09-30",
        "payment3": 500,
        "payment3Date": "2024-10-05",
        "payment4": 2000,
        "payment4Date": "2024-10-15"
      },
      {
        "paymentsReceived": "Change Order 6",
        "payment1": 3500,
        "payment1Date": "2024-09-10",
        "payment2": 1500,
        "payment2Date": "2024-09-30",
        "payment3": 500,
        "payment3Date": "2024-10-05",
        "payment4": 2000,
        "payment4Date": "2024-10-15"
      },
    ]
    , []);

  const totalTableColumns = useMemo(() => [
    { field: 'total', headerName: '' },
    { field: 'supplies', headerName: 'Supplies' },
    { field: 'laborSub', headerName: 'Labor Sub' },
    { field: 'fullBidSub', headerName: 'Full Bid Sub' },
    { field: 'totalPayments', headerName: 'Total Payments' }
  ], []);

  const totalTableRows = useMemo(() => [{
    supplies: 0,
    total: "Total",
    laborSub: 0,
    fullBidSub: 0,
    totalPayments: 0
  }], []);

  // Мемоизация столбцов и строк для TableWithOutHeaders
  const summaryTableRows = useMemo(() => [
    { field: "Income", value: `$${result.income}` },
    { field: "Expense", value: `$${result.expense}` },
    { field: "Balance", value: `$${result.balance}` }
  ], [result]);

  const taxesTableRows = useMemo(() => [
    { field: "Projected Taxes", value: `$${result.projectTaxes}` }
  ], [result]);
  useEffect(()=>{
    console.log(getActualTableData(firstTableRef));
  },[firstTableRef])
  const [projectStatus, setProjectStatus] = useState("");
  const [projectExperience, setProjectExperience] = useState("");
  const exportElms=useMemo<PDFElem[]>(()=>([
    {type:ElementType.ListCard,cardListRows:Object.entries(result).map(el=>({field:el[0],value:el[1]}))},
    {type:ElementType.P,content:`Project status: ${projectStatus}`},
    {type:ElementType.P,content:`Project Experience: ${projectExperience}`},
    {type:ElementType.TABLE,columns:firstTableColumns,tableRef:firstTableRef},
    {type:ElementType.TABLE,columns:laborTableColumns,tableRef:laborTableRef},
    {type:ElementType.TABLE,columns:fullBidSubTableColumns,tableRef:fullBidSubTableRef},
    {type:ElementType.TABLE,columns:totalPaymentsTableColumns,tableRef:totalPaymentsTableRef},
    {type:ElementType.TABLE,columns:totalTableColumns,tableRef:totalTableRef}
  ]),[projectStatus,projectExperience,firstTableRef,laborTableRef,
    fullBidSubTableRef,totalPaymentsTableRef,totalTableRef])
  return (
    <DocumentLayout pageType={"A1"} pdfName={"JobCost"} pdfTitle={"JobCost"} exportElems={exportElms}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h2">Job Cost</Typography>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ mr: 2 }}>Project Status:</Typography>
            <TextField
                size="small"
                id="project-status"
                label="Provide value"
                variant="standard"
                value={projectStatus}
                onChange={(e) => setProjectStatus(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ mr: 2 }}>Project Experience:</Typography>
            <TextField
                size="small"
                id="project-experience"
                label="Provide value"
                variant="standard"
                value={projectExperience}
                onChange={(e) => setProjectExperience(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Table
        columns={firstTableColumns}
        rows={firstTableRows}
        customRef={firstTableRef}
        onCellValueChanged={onCellValueChanged}
      />
      <Table
        onCellValueChanged={onCellValueChanged}
        rows={laborTableRows}
        columns={laborTableColumns}
        customRef={laborTableRef}
      />
      <Table
        onCellValueChanged={onCellValueChanged}
        columns={fullBidSubTableColumns}
        customRef={fullBidSubTableRef}
        rows={fullBidSubTableRows}
      />
      <Table
        onCellValueChanged={onCellValueChanged}
        customRef={totalPaymentsTableRef}
        columns={totalPaymentsTableColumns}
        rows={totalPaymentsTableRows}
      />
      <Table
        columns={totalTableColumns}
        customRef={totalTableRef}
        rows={totalTableRows}
        onCellValueChanged={onCellValueChanged}
      />
      <Box sx={{ display: "flex" }}>
        <TableWithOutHeaders
          sx={{ width: 300, mr: 1,borderRadius:0 }}
          rows={summaryTableRows}
        />
        <Box>
          <TableWithOutHeaders
              sx={{borderRadius:0}}
            rows={taxesTableRows}
          />
        </Box>
      </Box>
    </DocumentLayout>
  );
};


export default Page;

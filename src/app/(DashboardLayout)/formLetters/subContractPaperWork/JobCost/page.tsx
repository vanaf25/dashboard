"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Box from '@mui/material/Box';
import Table from '../../../../components/letters/Table/Table';
import TableWithOutHeaders from '../../../../components/letters/TableWithoutHeaders/TableWithOutHeaders';
import calculateSeriesOfNumbers from '../../../../utils/calculateSeriesOfNumbers';
import calculateTotalAmount from '../../../../utils/calculateTotalAmount';
import ContractDetails from '../../../../components/letters/ContractDetails/ContractDetails';
/*
import UserDetails from '../../../../components/letters/UserDetails/UserDetails';
*/
const totalKeys = ["amount", "totalPay", "totalCost"];
const JobCost = () => {
  const contractDetails={contractAmount:1000,materialBudget:1000,timeBonus:1000}
  const firstTableRef = useRef<any>(null);
  const laborTableRef = useRef<any>(null);
  const fullBidSubTableRef = useRef<any>(null);
  const totalTableRef = useRef<any>(null);
  const [result, setResult] = useState({bonusAchieved:0 });
  const updateTotalTable = useCallback((ref:React.MutableRefObject<any>, key:string, totalKey:string) => {
    console.log('upd!');
    const amount = calculateTotalAmount(ref, key);
    let firstRowNode = totalTableRef?.current?.api?.getDisplayedRowAtIndex(0);
    let secondRowNode=totalTableRef?.current?.api?.getDisplayedRowAtIndex(1);
    const totalPayments= calculateTotalAmount(laborTableRef, "totalPay")+
      calculateTotalAmount(fullBidSubTableRef, "totalCost")
    const totalPayments2=contractDetails.materialBudget-totalPayments
    console.log('first:',firstRowNode)
    console.log("second:",secondRowNode);
    if (firstRowNode){
      firstRowNode.setDataValue(totalKey,amount)
      firstRowNode.setDataValue(
        "totalPayments",
        totalPayments
      )
    }
    if(secondRowNode){
      if (totalKey==="supplies" || totalKey==="laborSub" || totalKey==="fullBidSub" ){
        setResult({ bonusAchieved:totalPayments2<0 ?
            totalPayments2+calculateTotalAmount(firstTableRef,"amount")+contractDetails.timeBonus:0 });
      }
      if (totalKey==="supplies") secondRowNode.setDataValue(totalKey,contractDetails.contractAmount-amount)
      if (totalKey==="laborSub" || totalKey==="fullBidSub"){
        secondRowNode.setDataValue("totalPayments",totalPayments2)
      }
    }
  }, []);
  const updateSupplies = useCallback(() => {
    updateTotalTable(firstTableRef, "amount", "supplies");
  }, [updateTotalTable,totalTableRef.current]);

  const updateFullBidSub = useCallback(() => {
    updateTotalTable(fullBidSubTableRef, "totalCost", "fullBidSub");
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
    updateLaborSub();
  }, [updateLaborSub]);
  const onCellValueChanged = useCallback((params:any) => {
    console.log('paramsL', params);
    const newValue = params.newValue;
    const oldValue = params.oldValue;
    if (newValue <= 0) {
      console.log('lessThen 0');
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    } else {
      console.log('more than 0');
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, newValue);
      updateSupplies();
      updateFullBidSub();
      updateLaborSub();
      console.log('totalKeys', totalKeys);
    }
  }, [updateSupplies, updateFullBidSub, updateLaborSub]);

  // Мемоизация колонок и строк для каждой таблицы
  const firstTableColumns = useMemo(() => [
    { field: 'supplierName', editable: true, headerName: 'Supplier Name' },
    { field: 'description', editable: true, headerName: 'Description of Page Used' },
    { field: 'date', cellDataType: "date",
      valueFormatter: (params:any) => {
        const date = new Date(params.value);
        return date.toLocaleDateString(); // Форматирование даты
      },
      editable: true, headerName: 'Date' },
    { field: 'checkNumber', editable: true, headerName: 'time' },
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
          return (+total) * (+p.data.rate);
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
    // Остальные строки...
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
          return payments + (+p.data.deposit).toFixed(2);
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
  const totalTableColumns = useMemo(() => [
    { field: 'total', headerName: '' },
    { field: 'supplies',flex:1, headerName: 'Supplies' },
    { field: 'laborSub', flex:1, headerName: 'Hourly Sub ' },
    { field: 'fullBidSub', flex:1, headerName: 'Non Hourly Sub' },
    { field: 'totalPayments', flex:1, headerName: 'Total Payments' }
  ], []);
  const totalTableRows = useMemo(() => [{
    supplies: 0,
    total: "Total",
    laborSub: 0,
    fullBidSub: 0,
    totalPayments: 0
  },
    {
      supplies: 0,
      total: "Balance of budget",
      laborSub: null,
      fullBidSub: null,
      totalPayments: 0
    }
  ], []);
  const summaryTableRows = useMemo(() => [
    { field: "Bonus Archived", value: `$${result.bonusAchieved}` },
  ], [result]);
  const onGridReady=useCallback(()=> {
    console.log('ready!!')
    updateSupplies()
    updateLaborSub()
    updateFullBidSub()
  },[]);

  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto" }}>
      <ContractDetails {...contractDetails}/>
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
        columns={totalTableColumns}
        customRef={totalTableRef}
        rows={totalTableRows}
        onGridReady={onGridReady}
      />
      <Box sx={{ display: "flex" }}>
        <TableWithOutHeaders
          sx={{ width: 300, mr: 1 }}
          rows={summaryTableRows}
        />
      </Box>
    </Box>
  );
};


export default JobCost;

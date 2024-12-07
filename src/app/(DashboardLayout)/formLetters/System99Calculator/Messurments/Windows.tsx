"use client";
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Table from "../../../../components/letters/Table/Table";
import TableName from "../../../../components/letters/TableName/TableName";
import {getAllRowsByType} from "../../../../apis/tablesApi";
import CircularProgress from "@mui/material/CircularProgress";
import numberParser from "../../../../utils/numberParser";
import getActualRowData from "../../../../utils/getActualRowData";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import TotalCalculationsTable from "../../../../components/letters/TotalCalculationsTable/TotalCalculationsTable";

const Windows = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [data,setData]=useState(false);
  const [totalData,setTotalData]=useState(null);
  const ref=useRef(null);
  const calculateWindowsMath=useCallback(()=>{
    if(data.length && ref.current){
      const sumFirstColumn = calculateTotalAmount(ref, 'under_3_feet_wide');
      const sumSecondColumn = calculateTotalAmount(ref, 'between_3_and_6_feet_wide');
      const sumThirdColumn = calculateTotalAmount(ref, 'over_6_feet_wide');
      // Window calculations for each category
      const windows3FeetAndUnder = [sumFirstColumn, 200, sumFirstColumn * sumSecondColumn];
      const windowsBetween3And6Feet = [sumSecondColumn, 264, sumSecondColumn * 264];
      const windowsOver6Feet = [sumThirdColumn, 332, sumThirdColumn * 332];

      // Window math array
      const windowMath = [sumFirstColumn, sumSecondColumn, sumThirdColumn];

      // Labor cost calculations
      const laborCost = [
        windowMath[0] * 110,
        windowMath[1] * 125,
        windowMath[2] * 125
      ];

      // Final totals
      const totalLaborCostForWindows = laborCost.reduce((acc, val) => acc + val, 0);
      const totalNumberOfWindows = windowMath.reduce((acc, val) => acc + val, 0);
      const windowUnitedInches = windows3FeetAndUnder[2] + windowsBetween3And6Feet[2] + windowsOver6Feet[2];
      const windowBoardCount = [
        windowUnitedInches,
        windowUnitedInches / 144,
        Math.round(windowUnitedInches / 144)
      ];
      const windowOutsideTrim = windowBoardCount[2];

      setTotalData({
        windows3FeetAndUnder,
        windowsBetween3And6Feet,
        windowsOver6Feet,
        windowMath,
        laborCost,
        totalLaborCostForWindows,
        totalNumberOfWindows,
        windowUnitedInches,
        windowBoardCount,
        windowOutsideTrim
      });
    }
  },[data,  ref.current])
  useEffect(()=>{
    if (data.length) calculateWindowsMath()
  },[data])
  useEffect(() => {
    const func= async()=>{
      setIsLoading(true)
     const res=await getAllRowsByType("windows");
      if(res.length){
        setData(res)
        calculateWindowsMath()
      }
      setIsLoading(false);
    }
    func()
  }, []);

  const windowsColumns = useMemo(() =>([
    {
      headerName: '3 feet Tall and under',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      editable: true,
      flex: 1,
      valueParser: numberParser,
      field: 'under_3_feet_wide',
    },
    {
      headerName: 'Less than 3 feet wide and less than 6 feet tall',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'between_3_and_6_feet_wide',
      editable: true,
      flex: 1,
      valueParser: numberParser
    },
    {
      headerName: 'Over 6 feet wide on any side',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'over_6_feet_wide',
      editable: true,
      flex: 1,
      valueParser: numberParser
    }
  ]), []);
  const onCellValueChanged=useCallback(async (params)=>{
      await getActualRowData(params.api,params.node.rowIndex,params.data.id,"windows")
    calculateWindowsMath()
  },[])
  const windowMath = useMemo(() => {
    const data = totalData || {
      windows3FeetAndUnder: [0, 0, 0],
      windowsBetween3And6Feet: [0, 0, 0],
      windowsOver6Feet: [0, 0, 0],
      windowMath: [0, 0, 0],
      laborCost: [0, 0, 0],
      totalLaborCostForWindows: 0,
      totalNumberOfWindows: 0,
      windowUnitedInches: 0,
      windowBoardCount: [0, 0, 0],
      windowOutsideTrim: 0
    };

    return [
      { label: 'Windows 3 Feet Wide and Under (0)', value: data.windows3FeetAndUnder[0] },
      { label: 'Windows 3 Feet Wide and Under (1)', value: data.windows3FeetAndUnder[1] },
      { label: 'Windows 3 Feet Wide and Under (2)', value: data.windows3FeetAndUnder[2] },

      { label: 'Windows Between 3 and 6 Feet (0)', value: data.windowsBetween3And6Feet[0] },
      { label: 'Windows Between 3 and 6 Feet (1)', value: data.windowsBetween3And6Feet[1] },
      { label: 'Windows Between 3 and 6 Feet (2)', value: data.windowsBetween3And6Feet[2] },

      { label: 'Windows Over 6 Feet (0)', value: data.windowsOver6Feet[0] },
      { label: 'Windows Over 6 Feet (1)', value: data.windowsOver6Feet[1] },
      { label: 'Windows Over 6 Feet (2)', value: data.windowsOver6Feet[2] },

      { label: 'Window Math (0)', value: data.windowMath[0] },
      { label: 'Window Math (1)', value: data.windowMath[1] },
      { label: 'Window Math (2)', value: data.windowMath[2] },

      { label: 'Labor Cost (0)', value: data.laborCost[0] },
      { label: 'Labor Cost (1)', value: data.laborCost[1] },
      { label: 'Labor Cost (2)', value: data.laborCost[2] },

      { label: 'Total Labor Cost for Windows', value: data.totalLaborCostForWindows },
      { label: 'Total # of Windows', value: data.totalNumberOfWindows },
      { label: 'Window United Inches', value: data.windowUnitedInches },

      { label: 'Window Board Count (0)', value: data.windowBoardCount[0] },
      { label: 'Window Board Count (1)', value: data.windowBoardCount[1] },
      { label: 'Window Board Count (2)', value: data.windowBoardCount[2] },

      { label: 'Window Outside 1x4x12 Trim', value: data.windowOutsideTrim }
    ];
  }, [totalData]);
  useEffect(()=>()=>{
    console.log('window math columns:',["label","value"])
    console.log(' math rows:',windowMath);
  },[windowMath])
  return (
    <div>
      {isLoading ? <CircularProgress/>:<>
        <TableName>
          Windows
        </TableName>
        <Table customRef={ref}
               onCellValueChanged={onCellValueChanged}
               columns={windowsColumns} rows={data}/>
        {totalData && <TotalCalculationsTable rowData={windowMath} tableName={"Window Math"}/>}
      </>}
    </div>
  );
};

export default Windows;

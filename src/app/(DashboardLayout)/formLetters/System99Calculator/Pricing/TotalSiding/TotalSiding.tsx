import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {getAllRowsByType} from "@/app/apis/tablesApi";
import Table from "../../../../../components/letters/Table/Table";
import TableName from "../../../../../components/letters/TableName/TableName";
import getActualRowData from "../../../../../utils/getActualRowData";
import calculateTotalAmount from "../../../../../utils/calculateTotalAmount";
import {sidingColumns} from "@/app/consts/formletters/system99Calculator";
import TotalCalculationsTable from "../../../../../components/letters/TotalCalculationsTable/TotalCalculationsTable";
/*function getDifferences(obj1, obj2) {
  const differences = {};
  if (!obj1) obj1={}
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  allKeys.forEach(key => {
    if (obj1[key] !== obj2[key]) {
      differences[key] = obj2[key]; // Store the value from obj2
    }
  });
  return differences;
}*/
const getTotalRows=(totalData:any)=>{
  return totalData  ? [{ label: 'Siding Square Footage (D)', value: totalData.sidingSquareFootage ?? 0 },
    ...totalData.freezeBoard?.map((item:any, index:number) => ({ label: `Freeze Board 1x4 (Part ${index + 1})`, value: item })) ?? [],
    ...totalData.hardieHandNails?.map((item:any, index:number) => ({ label: `Hardie Hand Nails (Part ${index + 1})`, value: item?.toFixed(2) ?? "0.00" })) ?? [],
    { label: 'Hardie Color Match Trim', value: totalData.hardieColorMatchTrim?.toFixed(2) ?? "0.00" },
    { label: 'Square Foot per Item', value: totalData.squareFootPerItem ?? 0 },
    { label: 'Quantity Needed', value: totalData.quantityNeeded?.toFixed(2) ?? "0.00" },
    { label: 'Number of Nails Needed', value: totalData.numberOfNailsNeeded?.toFixed(2) ?? "0.00" },
    { label: 'Number of Boxes', value: totalData.numberOfBoxes ?? 0 },
    { label: 'Siding Linear Footage', value: totalData.sidingLinearFootage ?? 0 },
    { label: 'Hardie Color Match Base', value: totalData.hardieColorMatchBase?.toFixed(2) ?? "0.00" },
    ...totalData.hardieCoilNails?.map((item:any, index:number) => ({ label: `Hardie Coil Nails (Part ${index + 1})`, value: item?.toFixed(2) ?? "0.00" })) ?? [],
    { label: 'Paint Siding Labor Cost', value: totalData.paintSidingLaborCost?.toFixed(2) ?? "0.00" },
    { label: 'Install Hardie Siding', value: totalData.installHardieSiding?.toFixed(2) ?? "0.00" },
    { label: 'Siding Labor Cost', value: totalData.sidingLaborCost?.toFixed(2) ?? "0.00" },
    { label: 'OSB and Plywood Labor', value: totalData.osbAndPlywoodLabor?.toFixed(2) ?? "0.00" },
    { label: 'Double Six', value: totalData.doubleSix ?? 0 },
    { label: 'Dutch Lap', value: totalData.dutchLap ?? 0 },
    { label: 'Seven Inch', value: totalData.sevenInch ?? 0 },
    { label: 'Number of 5.25 Inch Planks', value: totalData.numberOf5InchPlanks ?? 0 },
    { label: 'Number of 8.24 Inch Planks', value: totalData.numberOf8InchPlanks ?? 0 },
    { label: 'Number of 11.5 Inch Planks', value: totalData.numberOf11InchPlanks ?? 0 }]:[]
}
const TotalSiding = () => {
  const ref=useRef(null);
  const [data,setData]=useState<any[]>([]);
  const [totalData,setTotalData]=useState<any>(null)
  const calculateTotal=(changedInCell=false)=>{
    const sidingSquareFootage = calculateTotalAmount(ref, 'total_sq_footage_siding');
    const sumLengthA = calculateTotalAmount(ref, 'length');
    const sumLengthD = calculateTotalAmount(ref, 'total_sq_footage_siding');
    const sumHeightB = calculateTotalAmount(ref, 'height');
    const sumPlanksI = calculateTotalAmount(ref, 'four_inch_planks');
    const sumPlanksJ = calculateTotalAmount(ref, 'seven_planks');
    const sumPlanksK = calculateTotalAmount(ref, 'ten_half_inch_planks');
    const sumColumnQ=calculateTotalAmount(ref,"double_six")
    const sumOfDutchLup=calculateTotalAmount(ref,"dutch_lap");
    const sevenRowsAmount=calculateTotalAmount(ref,"seven_rows_repeat");
    // Additional calculations
    const freezeBoard = [sumLengthA, sumLengthA / 12, Math.round(sumLengthA / 12)];
    const hardieHandNails = [sumHeightB * 2.7, (sumHeightB * 2.7) / 500];
    const hardieColorMatchTrim = sidingSquareFootage / 300;
    const squareFootPerItem = 32;
    const quantityNeeded = sumLengthA / squareFootPerItem;
    const numberOfNailsNeeded = quantityNeeded * 20;
    const numberOfBoxes = Math.round(numberOfNailsNeeded / 1200);
    const sidingLinearFootage = sumLengthA;
    const hardieColorMatchBase = sumLengthD / 200;
    const hardieCoilNails = [sumLengthD * 7.5, (sumLengthD * 7.5) / 3000];
    const paintSidingLaborCost = sumLengthD * 0.85;
    const installHardieSiding = sumLengthD * 3.6;
    const sidingLaborCost=sumLengthD*2.7
    const numberOf5InchPlanks = sumPlanksI;
    const numberOf8InchPlanks = sumPlanksJ;
    const numberOf11InchPlanks = sumPlanksK;
    const newTotalData={
      sidingLaborCost,
      osbAndPlywoodLabor:sumLengthD*1.5,
      doubleSix:sumColumnQ,
      dutchLap:sumOfDutchLup,
      sidingSquareFootage,
      sevenInch:sevenRowsAmount,
      freezeBoard,
      hardieHandNails,
      hardieColorMatchTrim,
      squareFootPerItem,
      quantityNeeded,
      numberOfNailsNeeded,
      numberOfBoxes,
      sidingLinearFootage,
      hardieColorMatchBase,
      hardieCoilNails,
      paintSidingLaborCost,
      installHardieSiding,
      numberOf5InchPlanks,
      numberOf8InchPlanks,
      numberOf11InchPlanks
    }
    setTotalData(newTotalData);
    if(changedInCell){
      console.log('newTotalRows:',getTotalRows(newTotalData))
    }
  }
  const totalRows = useMemo(() => {
    if (!totalData) return []; // Return an empty array if totalData is null or undefined
    return [
      { label: 'Siding Square Footage (D)', value: totalData.sidingSquareFootage ?? 0 },
      ...totalData.freezeBoard?.map((item:any, index:number) => ({ label: `Freeze Board 1x4 (Part ${index + 1})`, value: item })) ?? [],
      ...totalData.hardieHandNails?.map((item:any, index:number) => ({ label: `Hardie Hand Nails (Part ${index + 1})`, value: item?.toFixed(2) ?? "0.00" })) ?? [],
      { label: 'Hardie Color Match Trim', value: totalData.hardieColorMatchTrim?.toFixed(2) ?? "0.00" },
      { label: 'Square Foot per Item', value: totalData.squareFootPerItem ?? 0 },
      { label: 'Quantity Needed', value: totalData.quantityNeeded?.toFixed(2) ?? "0.00" },
      { label: 'Number of Nails Needed', value: totalData.numberOfNailsNeeded?.toFixed(2) ?? "0.00" },
      { label: 'Number of Boxes', value: totalData.numberOfBoxes ?? 0 },
      { label: 'Siding Linear Footage', value: totalData.sidingLinearFootage ?? 0 },
      { label: 'Hardie Color Match Base', value: totalData.hardieColorMatchBase?.toFixed(2) ?? "0.00" },
      ...totalData.hardieCoilNails?.map((item:any, index:number) => ({ label: `Hardie Coil Nails (Part ${index + 1})`, value: item?.toFixed(2) ?? "0.00" })) ?? [],
      { label: 'Paint Siding Labor Cost', value: totalData.paintSidingLaborCost?.toFixed(2) ?? "0.00" },
      { label: 'Install Hardie Siding', value: totalData.installHardieSiding?.toFixed(2) ?? "0.00" },
      { label: 'Siding Labor Cost', value: totalData.sidingLaborCost?.toFixed(2) ?? "0.00" },
      { label: 'OSB and Plywood Labor', value: totalData.osbAndPlywoodLabor?.toFixed(2) ?? "0.00" },
      { label: 'Double Six', value: totalData.doubleSix ?? 0 },
      { label: 'Dutch Lap', value: totalData.dutchLap ?? 0 },
      { label: 'Seven Inch', value: totalData.sevenInch ?? 0 },
      { label: 'Number of 5.25 Inch Planks', value: totalData.numberOf5InchPlanks ?? 0 },
      { label: 'Number of 8.24 Inch Planks', value: totalData.numberOf8InchPlanks ?? 0 },
      { label: 'Number of 11.5 Inch Planks', value: totalData.numberOf11InchPlanks ?? 0 },
    ];
  }, [totalData]);

  useEffect(()=>{
    if (ref.current && data.length) calculateTotal()
  },[ref.current,data]);
  useEffect(() => {
    const func=async ()=>{
      const res=await getAllRowsByType("siding2");
      if(Array.isArray(res)) setData(res);
    }
    func()
  }, []);
  const columnDefs = useMemo(() => {
    const lightBlueStyle = {
      backgroundColor: '#ADD8E6', color: '#000000' };// Light blue background with black text
    const columns =sidingColumns
    return columns.map(column => ({
      ...column,
      cellStyle: column.editable ? lightBlueStyle : null,
    }));
  }, []);
  const onCellValueChanged = useCallback(async (params:any) => {
      const newValue = params.newValue;
      const oldValue = params.oldValue;
      if (newValue <= 0) {
        console.log('lessThen 0');
        params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
      }
      else{
        console.log('greater than o!');
        await getActualRowData(params.api,params.node.rowIndex,params.data.id);
        calculateTotal(true)
      }
  }, [totalData]);
  return (
  <div>
        <TableName>Total siding</TableName>
        <Table  onCellValueChanged={onCellValueChanged} customRef={ref}
               columns={columnDefs} rows={data}/>
    {totalData && <TotalCalculationsTable tableName={"Siding math"} rowData={totalRows}/>}
    </div>
  );
};

export default TotalSiding;

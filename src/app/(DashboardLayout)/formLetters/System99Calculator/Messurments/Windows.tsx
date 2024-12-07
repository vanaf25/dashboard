"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Table from "../../../../components/letters/Table/Table";
import TableName from "../../../../components/letters/TableName/TableName";
import { getAllRowsByType } from "@/app/apis/tablesApi";
import CircularProgress from "@mui/material/CircularProgress";
import numberParser from "../../../../utils/numberParser";
import getActualRowData from "../../../../utils/getActualRowData";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import TotalCalculationsTable from "../../../../components/letters/TotalCalculationsTable/TotalCalculationsTable";

// Define data types for rows and total data
interface WindowRow {
  id?: string; // Optional if fetched rows don't always include an ID
  under_3_feet_wide: number;
  between_3_and_6_feet_wide: number;
  over_6_feet_wide: number;
}

interface TotalData {
  windows3FeetAndUnder: [number, number, number];
  windowsBetween3And6Feet: [number, number, number];
  windowsOver6Feet: [number, number, number];
  windowMath: [number, number, number];
  laborCost: [number, number, number];
  totalLaborCostForWindows: number;
  totalNumberOfWindows: number;
  windowUnitedInches: number;
  windowBoardCount: [number, number, number];
  windowOutsideTrim: number;
}

interface WindowMathRow {
  label: string;
  value: number;
}

const Windows = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<WindowRow[]>([]);
  const [totalData, setTotalData] = useState<TotalData | null>(null);
  const ref = useRef<any>(null);

  const calculateWindowsMath = useCallback(() => {
    if (Array.isArray(data) && ref.current) {
      const sumFirstColumn = calculateTotalAmount(ref, "under_3_feet_wide");
      const sumSecondColumn = calculateTotalAmount(ref, "between_3_and_6_feet_wide");
      const sumThirdColumn = calculateTotalAmount(ref, "over_6_feet_wide");

      // Window calculations for each category
      const windows3FeetAndUnder: [number, number, number] = [
        sumFirstColumn,
        200,
        sumFirstColumn * 200,
      ];
      const windowsBetween3And6Feet: [number, number, number] = [
        sumSecondColumn,
        264,
        sumSecondColumn * 264,
      ];
      const windowsOver6Feet: [number, number, number] = [
        sumThirdColumn,
        332,
        sumThirdColumn * 332,
      ];

      const windowMath: [number, number, number] = [
        sumFirstColumn,
        sumSecondColumn,
        sumThirdColumn,
      ];

      const laborCost: [number, number, number] = [
        windowMath[0] * 110,
        windowMath[1] * 125,
        windowMath[2] * 125,
      ];

      const totalLaborCostForWindows = laborCost.reduce((acc, val) => acc + val, 0);
      const totalNumberOfWindows = windowMath.reduce((acc, val) => acc + val, 0);
      const windowUnitedInches =
          windows3FeetAndUnder[2] + windowsBetween3And6Feet[2] + windowsOver6Feet[2];
      const windowBoardCount: [number, number, number] = [
        windowUnitedInches,
        windowUnitedInches / 144,
        Math.round(windowUnitedInches / 144),
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
        windowOutsideTrim,
      });
    }
  }, [data]);

  useEffect(() => {
    if (Array.isArray(data)) calculateWindowsMath();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getAllRowsByType("windows");
      if (Array.isArray(res)) {
        setData(res);
        calculateWindowsMath();
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const windowsColumns = useMemo(() => [
    {
      headerName: "3 feet Tall and under",
      cellDataType: "number",
      cellEditor: "agNumberCellEditor",
      editable: true,
      flex: 1,
      valueParser: numberParser,
      field: "under_3_feet_wide",
    },
    {
      headerName: "Less than 3 feet wide and less than 6 feet tall",
      cellDataType: "number",
      cellEditor: "agNumberCellEditor",
      field: "between_3_and_6_feet_wide",
      editable: true,
      flex: 1,
      valueParser: numberParser,
    },
    {
      headerName: "Over 6 feet wide on any side",
      cellDataType: "number",
      cellEditor: "agNumberCellEditor",
      field: "over_6_feet_wide",
      editable: true,
      flex: 1,
      valueParser: numberParser,
    },
  ], []);

  const onCellValueChanged = useCallback(
      async (params: any) => {
        await getActualRowData(params.api, params.node.rowIndex, params.data.id);
        calculateWindowsMath();
      },
      [calculateWindowsMath]
  );

  const windowMath = useMemo<WindowMathRow[]>(() => {
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
      windowOutsideTrim: 0,
    };

    return [
      { label: "Total Labor Cost for Windows", value: data.totalLaborCostForWindows },
      { label: "Total # of Windows", value: data.totalNumberOfWindows },
      { label: "Window United Inches", value: data.windowUnitedInches },
      { label: "Window Outside 1x4x12 Trim", value: data.windowOutsideTrim },
    ];
  }, [totalData]);

  return (
      <div>
        {isLoading ? (
            <CircularProgress />
        ) : (
            <>
              <TableName>Windows</TableName>
              <Table customRef={ref} onCellValueChanged={onCellValueChanged} columns={windowsColumns} rows={data} />
              {totalData && <TotalCalculationsTable rowData={windowMath} tableName="Window Math" />}
            </>
        )}
      </div>
  );
};

export default Windows;

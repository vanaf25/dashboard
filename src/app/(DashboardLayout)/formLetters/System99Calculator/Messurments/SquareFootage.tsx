"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Grid, Box, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Loading } from "@/app/components/global/loading/Loading";
import { sidingColumns } from "@/app/consts/formletters/system99Calculator";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import getActualRowData from "../../../../utils/getActualRowData";
import { getAllTablesByType } from "@/app/apis/tablesApi";
import Table from "@/app/components/letters/Table/Table";

type TableDataRow = {
  length?: number | null;
  height?: number | null;
  [key: string]: number | null | undefined;
};

type TableName = {
  name: string | null;
  ref: React.MutableRefObject<AgGridReact | null>;
  columns: any[]; // Specify the column definition type if using a predefined type from `ag-grid-react`
  rowData: TableDataRow[] | undefined;
};

const SquareFootage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tablesData, setTablesData] = useState<any[]>([]);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const frontSidingRef = useRef<AgGridReact | null>(null);
  const rearSidingRef = useRef<AgGridReact | null>(null);
  const firstSideSidingRef = useRef<AgGridReact | null>(null);
  const secondSideSidingRef = useRef<AgGridReact | null>(null);
  const extraBuildingRef = useRef<AgGridReact | null>(null);
  const extraBuilding2Ref = useRef<AgGridReact | null>(null);
  const smthRef = useRef<AgGridReact | null>(null);
  const smthRef2 = useRef<AgGridReact | null>(null);
  useEffect(() => {
    const fetchTables = async () => {
      try {
        setIsLoading(true);
        const res = await getAllTablesByType("siding");
        if (Array.isArray(res)) setTablesData(res);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchTables();
  }, []);

  const tableNames: TableName[] = useMemo(() => {
    return [
      { name: "Front SIDING", ref: frontSidingRef },
      { name: "Rear SIDING", ref: rearSidingRef },
      { name: null, ref: smthRef },
      { name: "1st side SIDING", ref: firstSideSidingRef },
      { name: "2nd side SIDING", ref: secondSideSidingRef },
      { name: null, ref: smthRef2 },
      { name: "Siding for Extra building", ref: extraBuildingRef },
      { name: "Siding for Extra building 2", ref: extraBuilding2Ref },
    ].map((el) => {
      if (el.name) {
        return {
          ...el,
          columns: sidingColumns.map((c) =>
              c.field !== "length" && c.field !== "height"
                  ? { ...c, hide: true,flex:1 }
                  : {...c,flex:1}
          ),
          rowData: tablesData.find((table) => table.tableName === el.name)?.rows,
        };
      }
      return {
        ...el,
        columns: [
          {
            headerName: "Inside Corners 12 feet and under",
            cellDataType: "number",
            cellEditor: "agNumberCellEditor",
            field: "insideCornersUnder12",
            editable: true,
          },
          {
            headerName: "Inside Corners between 12 & 24 long",
            cellDataType: "number",
            cellEditor: "agNumberCellEditor",
            field: "insideCorners12to24",
            editable: true,
          },
        ],
        rowData: Array(5).fill({
          insideCornersUnder12: null,
          insideCorners12to24: null,
        }),
      };
    });
  }, [tablesData]);
  const calculateTotalHeightAmount = (array: TableName[]) => {
    const total = array.reduce((acc, current) => {
      return (
          acc + Number(calculateTotalAmount(current.ref, "height")) || 0
      );
    }, 0);
    setTotalHeight(total);
  };
  const onCellValueChanged = useCallback(
      async (params: any) => {
        const { newValue, oldValue, colDef, api, node, data } = params;
        if (newValue <= 0) {
          api.getRowNode(node.id)?.setDataValue(colDef.field, oldValue);
        } else {
          if (colDef.field === "height") {
            calculateTotalHeightAmount(tableNames);
          }
          await getActualRowData(api, node.rowIndex, data.id);
        }
      },
      [tableNames]
  );

  return (
      <>
        {isLoading ? (
            <Loading />
        ) : (
            <Box sx={{ mb: 2 }}>
              <Grid sx={{ mb: 2 }} container spacing={2}>
                {tableNames.map((name) => (
                    <Grid item xs={12} sm={4} key={name.name || "unnamed"}>
                      <Box sx={{ border: "1px solid #ddd", borderRadius: "8px" }}>
                        {name.name && (
                            <Box
                                sx={{
                                  backgroundColor: "#4caf50",
                                  padding: "8px",
                                  textAlign: "center",
                                }}
                            >
                              <Typography
                                  variant="h6"
                                  component="h2"
                                  sx={{ color: "#fff" }}
                              >
                                {name.name}
                              </Typography>
                            </Box>
                        )}
                          <Table
                              onCellValueChanged={onCellValueChanged}
                              columns={name.columns}
                              rows={name.rowData as TableDataRow[]}
                              customRef={name.ref}
                              domLayout="autoHeight"
                          />
                      </Box>
                    </Grid>
                ))}
              </Grid>
              <Typography>Total Height: {totalHeight}</Typography>
            </Box>
        )}
      </>
  );
};

export default SquareFootage;

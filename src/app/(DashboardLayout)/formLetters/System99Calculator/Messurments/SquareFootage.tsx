"use client";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Grid, Box, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Loading } from "@/app/components/global/loading/Loading";
import { sidingColumns } from "@/app/consts/formletters/system99Calculator";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import getActualRowData from "../../../../utils/getActualRowData";
import { getAllTablesByType, updateRowChanged } from "@/app/apis/tablesApi";
import Table from "@/app/components/letters/Table/Table";
import Button from "@mui/material/Button";
import getRowData from "@/app/utils/getRowData";
import Alert from "@mui/material/Alert";
import {AxiosError} from "axios";
import getActualTableData from "@/app/utils/getActualTableData";
interface TableRow {
  id: string;
  length: number;
  height:number;
}

interface TableData {
  tableName: string;
  rows: TableRow[];
}

interface ErrorResponse {
  error: string;
}
const SquareFootage: React.FC = () => {
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const frontSidingRef = useRef<AgGridReact | null>(null);
  const rearSidingRef = useRef<AgGridReact | null>(null);
  const firstSideSidingRef = useRef<AgGridReact | null>(null);
  const secondSideSidingRef = useRef<AgGridReact | null>(null);
  const extraBuildingRef = useRef<AgGridReact | null>(null);
  const extraBuilding2Ref = useRef<AgGridReact | null>(null);
  const smthRef = useRef<AgGridReact | null>(null);
  const smthRef2 = useRef<AgGridReact | null>(null);
  const router = useRouter();

  const { data: tablesData = [], isLoading,error  } = useQuery<TableData[], any>({
    queryKey: ["sidingTables"],
    queryFn: () => getAllTablesByType("siding"),
    staleTime: Infinity,
  });
  const updateRowMutation = useMutation({
    mutationFn: ({ id, rowData }: { id: string; rowData: any }) => updateRowChanged(id, rowData),
    onSuccess: (updatedRow, variables) => {
      const { id, rowData } = variables;
      if (Array.isArray(tablesData)) {
        tablesData.forEach((table:TableData) => {
          if (table.rows) {
            const rowIndex = table.rows.findIndex((row) => row.id === id);
            if (rowIndex !== -1) {
              table.rows[rowIndex] = { ...rowData };
            }
          }
        });
      }
    },
  });

  const tableNames = useMemo(() => {
    if (!Array.isArray(tablesData)) return [];

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
          columns: [
            ...sidingColumns
                .filter((c) => c.field === "length" || c.field === "height")
                .map((col) => ({ ...col, flex: 1 })),
            {
              headerName: "Show",
              field: "show",
              flex: 1,
              cellRenderer: (params: ICellRendererParams) => {
                const handleClick = () => {
                  const actualData = getRowData(el.ref.current?.api || null, params?.node?.rowIndex);
                  if(actualData.length>0 && actualData.height>0){
                    router.push(
                        `ExteriorSiding/calculators?wallLength=${actualData.length}&wallHeight=${actualData.height}`
                    );
                  }
                };
                return (
                    <Button onClick={handleClick} variant="contained" color="primary">
                      Show
                    </Button>
                );
              },
            },
          ],
          rowData: (tablesData.find((table: TableData) => table.tableName === el.name)?.rows || []) as TableRow[],
        };
      }
      return {
        ...el,
        columns: [
          { headerName: "Inside Corners 12 feet and under", field: "insideCornersUnder12", editable: true },
          { headerName: "Inside Corners between 12 & 24 long", field: "insideCorners12to24", editable: true },
        ],
        rowData: Array(5).fill({ insideCornersUnder12: null, insideCorners12to24: null }),
      };
    });
  }, [tablesData]);

  const calculateTotalHeightAmount = (array:any[]) => {
    const total = array.reduce((acc, current) =>{
      const totalTable=getActualTableData(current.ref)
      return acc+totalTable.reduce((acc,cur)=>acc+(cur.length*cur.height),0)
    },0)
    setTotalHeight(total);
  };
  useEffect(() => {
    calculateTotalHeightAmount(tableNames.filter(el=>el.name))
  }, [tableNames,tablesData]);
  const onCellValueChanged = useCallback((params: any) => {
    const { newValue, oldValue, colDef, api, node, data } = params;
    if (newValue <= 0) {
      api.getRowNode(node.id)?.setDataValue(colDef.field, oldValue);
    } else {
      if (colDef.field === "height" || colDef.field === "length" ) {
        calculateTotalHeightAmount(tableNames.filter(el=>el.name));
      }
      const rowData = getRowData(api, node.rowIndex);
      updateRowMutation.mutate({ id: data.id, rowData });
    }
  }, [tableNames, updateRowMutation]);
  console.log('error:',error);
  return (
      <>
        {isLoading ? (
            <Loading />
        ) : (
            <Box sx={{ mb: 2 }}>
              {error ? (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    <Typography variant={"h3"}>
                      Error: {error?.response?.data?.message}
                    </Typography>
                  </Alert>
              ):<>
                <Alert severity="info" sx={{ mb: 2 }}>
                  <Typography variant={"h3"}>
                    To Edit Table data db click on cell and after providing a value press Tab(Then you will
                    start edit next cell)
                    Or press Enter
                  </Typography>
                  <Typography variant={"h3"}>
                    If You want cancell editing click esc
                  </Typography>
                </Alert>
                <Grid sx={{ mb: 2 }} container spacing={2}>
                  {tableNames.map((name,index) => (
                      <Grid item xs={12} md={4} sm={6} key={index}>
                        <Box sx={{ border: "1px solid #ddd", borderRadius: "8px" }}>
                          {name.name && (
                              <Box sx={{ backgroundColor: "#4caf50", padding: "8px", textAlign: "center" }}>
                                <Typography variant="h6" component="h2" sx={{ color: "#fff" }}>
                                  {name.name}
                                </Typography>
                              </Box>
                          )}
                          <Table onCellValueChanged={name.name ?  onCellValueChanged:()=>{}} columns={name.columns} rows={name.rowData} customRef={name.ref} domLayout="autoHeight" />
                        </Box>
                      </Grid>
                  ))}
                </Grid>
                <Typography>Total Height: {totalHeight}</Typography>
              </>}

            </Box>
        )}
      </>
  );
};

export default SquareFootage;
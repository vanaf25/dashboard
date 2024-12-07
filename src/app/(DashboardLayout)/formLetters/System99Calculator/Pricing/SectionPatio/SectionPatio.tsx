import { useCallback, useMemo, useRef, useState } from 'react';
import Concrete from "../../Messurments/Concrete";
import Excavation from "../../Messurments/Excavation";
import { Box, Grid, Typography } from "@mui/material";
import { roundToTwoDecimalPlaces } from "../ProductTable";
import Table from "../../../../../components/letters/Table/Table";
import getDataFromColumn from "../../../../../utils/getDataFromColumn";
import TableName from "../../../../../components/letters/TableName/TableName";
import calculateTotalAmount from "../../../../../utils/calculateTotalAmount";

interface TotalData {
  multiplyLengthTotal: number;
  excavationSFTotal: number;
  "4inSlab": number;
  rebar: number;
  "2x6x8": number;
}

const SectionPatio = () => {
  const concreteRef = useRef<any>(null); // Reference for the Concrete table
  const newTableRef = useRef<any>(null); // Reference for the New Table
  const formUpRef = useRef<any>(null);
  const excavationRef = useRef<any>(null);

  const [totalData, setTotalData] = useState<TotalData>({
    multiplyLengthTotal: 0,
    excavationSFTotal: 0,
    "4inSlab": 0,
    rebar: 0,
    "2x6x8": 0,
  });

  const formUpColumns = useMemo(
      () => [
        { headerName: "main", field: "main" },
        {
          headerName: "main/8",
          field: "main/8",
          valueGetter: (params: any) => params.data.main / 8 || 0,
        },
        {
          headerName: "rounded",
          field: "rounded",
          valueGetter: (params: any) => Math.round(params.data["main/8"] / 8) || 0,
        },
      ],
      []
  );

  const formUpRows = useMemo(
      () => [
        { main: 0, "main/8": 0, rounded: 0 },
        { main: 0, "main/8": 0, rounded: 0 },
        { main: 0, "main/8": 0, rounded: 0 },
        { main: 0, "main/8": 0, rounded: 0 },
        { main: 0, "main/8": 0, rounded: 0 },
      ],
      []
  );

  const excavationColumns = useMemo(
      () => [
        {
          headerName: "Excavation SF",
          field: "sf",
          valueGetter: ({ data }: any) => data.length * data.width,
        },
      ],
      []
  );

  const excavationRows = useMemo(() => ({ sf: 0 }), []);

  const columnDefs = useMemo(
      () => [
        {
          headerName: "LengthMultiply",
          field: "lengthMultiply",
          valueGetter: (params: any) => {
            const length = params.data.length || 0;
            return length * 12;
          },
          editable: false,
        },
        {
          headerName: "WidthMultiply",
          field: "widthMultiply",
          valueGetter: (params: any) => {
            const width = params.data.width || 0;
            return width * 12;
          },
          editable: false,
        },
        {
          headerName: "TotalMultiply",
          field: "totalMultiply",
          valueGetter: (params: any) => {
            const lengthMultiply = params.getValue("lengthMultiply");
            const widthMultiply = params.getValue("widthMultiply");
            return lengthMultiply * widthMultiply;
          },
          editable: false,
        },
        {
          headerName: "Slab 1",
          field: "slab1",
          valueGetter: (params: any) => {
            const totalMultiply = params.getValue("totalMultiply");
            return totalMultiply * 4;
          },
          editable: false,
        },
        {
          headerName: "Slab 2",
          field: "slab2",
          valueGetter: (params: any) => {
            const totalMultiply = params.getValue("totalMultiply");
            return totalMultiply * 6;
          },
          editable: false,
        },
        {
          headerName: "Slab SF",
          field: "slab2",
          valueGetter: (params: any) => {
            const width = params.data.width || 0;
            const height = params.data.width || 0;
            return width * height;
          },
          editable: false,
        },
        {
          headerName: "Cubic inch",
          field: "cubicInch",
          valueGetter: (params: any) => {
            const slab1 = params.getValue("slab1");
            return slab1 / 1728;
          },
          editable: false,
        },
        {
          headerName: "Cubic ft.",
          field: "cubicFt",
          valueGetter: (params: any) => {
            const cubicInch = params.getValue("cubicInch") || 0;
            return roundToTwoDecimalPlaces(cubicInch / 27);
          },
          editable: false,
        },
      ],
      []
  );

  const newTableRowData = useMemo(
      () => [
        { lengthNew: 0, widthNew: 0 },
        { lengthNew: 0, widthNew: 0 },
        { lengthNew: 0, widthNew: 0 },
        { lengthNew: 0, widthNew: 0 },
        { lengthNew: 0, widthNew: 0 },
        { lengthNew: 0, widthNew: 0 },
      ],
      []
  );

  const onCellValueChanged = (e: any) => {
    console.log("e:", e);
    const { rowIndex } = e;
    updateNewTableData(rowIndex);
    setTotalData((prevState) => ({
      ...prevState,
      "4inSlab":
          calculateTotalAmount(concreteRef, "slab1Round") +
          calculateTotalAmount(concreteRef, "slab2Round"),
    }));
  };
  const onExcavationValueChanged = () => {
    setTotalData((prevState: any) => ({
      ...prevState,
      excavationSFTotal: calculateTotalAmount(excavationRef, "sf"),
    }));
  };

  const onNewValueChanged = () => {
    setTotalData((prevState: any) => ({
      ...prevState,
      rebar: calculateTotalAmount(newTableRef, "lengthNew/20"),
    }));
  };
  const newTableColumnDefs = useMemo(() => [
    { headerName: 'Length', field: 'lengthNew' },
    { headerName: 'Width', field: 'widthNew' },
    {headerName: "Rebar pieces 8",field: "lengthNew/20"},
    { headerName: 'Total rebar liner feet', field: 'sum' },

  ], []);
  const onFormUpValueChanged = () => {
    setTotalData((prevState: any) => ({
      ...prevState,
      "2x6x8": calculateTotalAmount(formUpRef, "rounded"),
    }));
  };
  const updateNewTableData = useCallback(
      (changedRowIndex: any) => {
        const gridApi = newTableRef.current?.api;
        const formUpApi = formUpRef?.current?.api;

        if (!gridApi || !formUpApi) return;

        const lengthData = getDataFromColumn(concreteRef, "length");
        const widthData = getDataFromColumn(concreteRef, "width");

        gridApi.forEachNode((rowNode: any, index: any) => {
          const lengthNew = roundToTwoDecimalPlaces(lengthData[changedRowIndex] / 18);
          const widthNew = roundToTwoDecimalPlaces(widthData[changedRowIndex] / 18);

          if (rowNode.rowIndex === changedRowIndex) {
            rowNode.setDataValue("lengthNew", lengthNew);
            rowNode.setDataValue("widthNew", widthNew);
          }
        });
      },
      []
  );

  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Concrete  additionalColumns={columnDefs}
                       onCellValueChanged={onCellValueChanged}
                       customRef={concreteRef} />
            <TableName>
              Pieces of rebar
            </TableName>
            <Table onCellValueChanged={onNewValueChanged} customRef={newTableRef} columns={newTableColumnDefs} rows={newTableRowData}/>
            <TableName>2x6 form up</TableName>
            <Table
                customRef={formUpRef}
                onCellValueChanged={onFormUpValueChanged}
                rows={formUpRows} columns={formUpColumns}/>
            <Excavation customRef={excavationRef}
                        onCellValueChanged={onExcavationValueChanged}
                        additionalColumns={excavationColumns}
                        additionalRow={excavationRows}  />
            <div>
              <Typography variant={"h4"}>Labor costs</Typography>
              <Box sx={{display:"flex"}}>
                <Typography sx={{mr:3}}>{totalData.multiplyLengthTotal}</Typography>
                <Typography>{totalData.multiplyLengthTotal*2.45}</Typography>
              </Box>
              <Box sx={{display:"flex"}}>
                <Typography sx={{mr:3}}>{totalData.excavationSFTotal}</Typography>
                <Typography>{totalData.excavationSFTotal*1.65}</Typography>
              </Box>
              <Typography>Labor patio:{(totalData.excavationSFTotal*1.65)
                  +(totalData.multiplyLengthTotal*2.45)}</Typography>

              <Typography>4in Slab:{totalData["4inSlab"]}</Typography>
              <Typography>Rebar 1/2: {totalData.rebar}</Typography>
              <Typography>2x6x8: {totalData["2x6x8"]}</Typography>

            </div>
          </Grid>
        </Grid>
      </div>
  );
};

export default SectionPatio;


"use client";
import { TextField, Typography, Button } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Box from "@mui/material/Box";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import Table from "@/app/components/letters/Table/Table";
import BlankCard from "@/app/components/shared/BlankCard";
import { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ElementType } from "@/app/types/exportPdfTypes";
import transformDayjsDate from "@/app/utils/transformDayjsDate";
import dayjs from "dayjs";

// Custom cell renderer for the delete button
const DeleteButtonRenderer = (props: any) => {
  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.node); // Pass the node to the delete function
    }
  };

  return (
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete
      </Button>
  );
};

const IncidentReport = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    incidentAddress: "",
    date: null,
    time: null,
    weather: "",
    otherFactors: "",
    description: "",
  });

  const defaultRows = useMemo(
      () => [...Array(6)].map(() => ({ name: "name", worker: "", DOB: "", SS: "", Injury: false })),
      []
  );

  const defaultRows2 = useMemo(
      () => [...Array(6)].map(() => ({ name: "", status: "Unknown", worker: "", hospitalName: "" })),
      []
  );

  const [rows1, setRows1] = useState(defaultRows);
  const [rows2, setRows2] = useState(defaultRows2);

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (date: any) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleTimeChange = (time: any) => {
    console.log("time:", time);
    setFormData((prev) => ({ ...prev, time }));
  };

  // Handler for updating row state when a cell value changes in Table 1
  const onCellValueChangedTable1 = (event: any) => {
    const updatedRows = rows1.map((row, index) =>
        index === event.rowIndex ? { ...row, [event.colDef.field]: event.newValue } : row
    );
    setRows1(updatedRows);
  };

  // Handler for updating row state when a cell value changes in Table 2
  const onCellValueChangedTable2 = (event: any) => {
    const updatedRows = rows2.map((row, index) =>
        index === event.rowIndex ? { ...row, [event.colDef.field]: event.newValue } : row
    );
    setRows2(updatedRows);
  };

  const columns1 = useMemo(
      () => [
        { field: "name", flex: 3, editable: true },
        { field: "DOB", editable: true, flex: 1 },
        { field: "SS", headerName: "Last 4 SS#", editable: true, flex: 1 },
        { field: "Injury", flex: 1, editable: true, cellEditor: "agCheckboxCellEditor" },
        {
          field: "actions",
          headerName: "Actions",
          cellRenderer: DeleteButtonRenderer,
          cellRendererParams: {
            onDelete: (node: any) => {
              console.log('node:',node.rowIndex);
              setRows1(prevState =>prevState.filter((el,index)=>node.rowIndex!=index))
              ref1.current?.api.applyTransaction({ remove: [node.data] }); // Delete row using AG Grid API
            },
          },
          flex: 1,
        },
      ],
      []
  );
  const columns2 = useMemo(
      () => [
        { field: "name", flex: 2, editable: true },
        { field: "hospitalName", editable: true, headerName: "Hospital Name" },
        {
          field: "status",
          headerName: "Status",
          editable: true,
          cellEditor: "agSelectCellEditor",
          cellEditorParams: { values: ["Unknown", "Minor", "Severe", "Fatality"] },
          flex: 1,
        },
        {
          field: "actions",
          headerName: "Actions",
          cellRenderer: DeleteButtonRenderer,
          cellRendererParams: {
            onDelete: (node: any) => {
              setRows2(prevState =>prevState.filter((el,index)=>node.rowIndex!==index))
              ref2.current?.api.applyTransaction({ remove: [node.data] }); // Delete row using AG Grid API
            },
          },
          flex: 1,
        },
      ],
      []
  );

  const ref1 = useRef<AgGridReact>(null);
  const ref2 = useRef<AgGridReact>(null);

  const addRowTable1 = () => {
    const newRow = { name: "", worker: "", DOB: "", SS: "", Injury: false };
    ref1.current?.api.applyTransaction({ add: [newRow] });
    setRows1(prevState =>([...prevState,newRow]))
  };

  const addRowTable2 = () => {
    const newRow = { name: "", status: "Unknown", worker: "", hospitalName: "" };
    ref2.current?.api.applyTransaction({ add: [newRow] });
    setRows2(prevState =>([...prevState,newRow]))
  };

  return (
      <WorkerLayout
          withSignature
          withOutHeader
          exportElems={[
            {
              type: ElementType.ListCard,
              cardListRows: [
                { field: "Customer name if any", value: formData.customerName },
                { field: "Address of incident:", value: formData.incidentAddress },
                { field: "Date", value: transformDayjsDate(formData.date) },
                { field: "Time", value: formData.time ? dayjs(formData.time).format("HH:mm") : "" },
              ],
            },
            { type: ElementType.P, content: "Other factors:" },
            {
              type: ElementType.SECTION,
              content: formData.otherFactors,
              additionalStyling: !formData.description ? { padding: "30px 10px" } : {},
            },
            { type: ElementType.TABLE, columns: columns1.filter((c) => c.field !== "actions"), rows: rows1 },
            { type: ElementType.TABLE, columns: columns2.filter((c) => c.field !== "actions"), rows: rows2 },
            { type: ElementType.P, content: `Brief description of what happened including order of events:` },
            {
              type: ElementType.SECTION,
              content: formData.description,
              additionalStyling: !formData.description ? { padding: "60px 10px" } : {},
            },
          ]}
          pdfTitle={"Incident Report"}
          pdfName={"Incident Report"}
      >
        <BlankCard>
          <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
            Incident Report
          </Typography>
          <Box sx={{ mb: 3 }}>
            <TextField
                label="Customer name if any"
                variant="outlined"
                sx={{ mb: 1 }}
                fullWidth
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
            />
            <TextField
                label="Address of incident"
                variant="outlined"
                sx={{ mb: 1 }}
                fullWidth
                name="incidentAddress"
                value={formData.incidentAddress}
                onChange={handleChange}
            />
            <Box sx={{ display: "flex", mb: 1 }}>
              <DemoContainer sx={{ mr: 1 }} components={["DatePicker"]}>
                <DatePicker label="Date" value={formData.date} onChange={handleDateChange} />
              </DemoContainer>
              <DemoContainer sx={{ mr: 1 }} components={["TimePicker"]}>
                <TimePicker label="Time" value={formData.time} onChange={handleTimeChange} />
              </DemoContainer>
              <TextField
                  label="Weather"
                  variant="outlined"
                  name="weather"
                  value={formData.weather}
                  onChange={handleChange}
              />
            </Box>
            <TextField
                label="Others Factors"
                multiline
                rows={2}
                variant="outlined"
                sx={{ mb: 2 }}
                fullWidth
                name="otherFactors"
                value={formData.otherFactors}
                onChange={handleChange}
            />
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <Button variant="contained" onClick={addRowTable1}>
                Add Row (Table 1)
              </Button>
            </Box>
            <Table
                customRef={ref1}
                columns={columns1}
                rows={defaultRows}
                onCellValueChanged={onCellValueChangedTable1}
            />
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <Button variant="contained" onClick={addRowTable2}>
                Add Row (Table 2)
              </Button>
            </Box>
            <Table
                customRef={ref2}
                columns={columns2}
                rows={defaultRows2}
                onCellValueChanged={onCellValueChangedTable2}
            />
            <TextField
                label="Give a brief description of what happened including order of events"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
          </Box>
        </BlankCard>
      </WorkerLayout>
  );
};

export default IncidentReport;
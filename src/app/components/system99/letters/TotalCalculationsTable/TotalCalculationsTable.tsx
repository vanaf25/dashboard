import React, { useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import TableName from "../TableName/TableName";
import Table from "../Table/Table";

// Define types for row data and component props
interface RowData {
  label: string;
  value: string | number;
  [key: string]: any; // Extendable for additional fields if necessary
}

interface CalculationLabelsProps {
  rowData: RowData[];
  tableName: string;
}

const CalculationLabels: React.FC<CalculationLabelsProps> = ({
                                                               rowData,
                                                               tableName,
                                                             }) => {
  const columnDefs = useMemo(
      () => [
        {
          headerName: "Label",
          field: "label",
          flex: 1,
          cellStyle: (params: { value: string }) => {
            if (
                params.value === "Paint Siding Labor Cost" ||
                params.value === "Install Hardie Siding"
            ) {
              return { backgroundColor: "darkgrey", color: "white" };
            }
            return { backgroundColor: "pink" };
          },
        },
        {
          headerName: "Value",
          field: "value",
          cellDataType: "text",
          flex: 1,
        },
      ],
      []
  );

  useEffect(() => {
    console.log(`rowData for ${tableName} :`, rowData);
  }, [rowData, tableName]);

  return (
      <Box>
        <TableName>{tableName}</TableName>
        <Box>
          <Table
              rows={rowData}
              columns={columnDefs}
          />
        </Box>
      </Box>
  );
};

export default CalculationLabels;

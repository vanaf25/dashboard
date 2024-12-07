"use client";
import Table from "../../../../components/letters/Table/Table"; // Adjust the path as needed
import { useMemo } from "react";

const SheetingTable = () => {
  // Define table columns
  const columns = useMemo(() => [
    { headerName: '3/4 Sheeting', field: 'threeQuarterSheeting', flex: 1, cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' } },
    { headerName: 'False', field: 'threeQuarterFaux', flex: 1, cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' } },
    { headerName: '1/2 Sheeting', field: 'halfSheeting', flex: 1, cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' } },
    { headerName: 'False', field: 'halfFaux', flex: 1, cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' } }
  ], []);

  // Define row data
  const rows = useMemo(() => [
    { threeQuarterSheeting: '3/4 Osb Sheeting',
      threeQuarterFaux: 0, halfSheeting: '1/2 Osb Sheeting', halfFaux: 0 },
    { threeQuarterSheeting: 'Exterior sheeting nails for nail gun',
      threeQuarterFaux: 0, halfFaux: 0, halfSheeting:"Exterior sheeting nails for nail gun" }
  ], []);


  return (
    <div>
        <Table
          columns={columns}
          rows={rows}/>
    </div>
  );
};

export default SheetingTable;

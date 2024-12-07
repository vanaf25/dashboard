"use client";
import {useMemo} from 'react';
import TableGrid from "../../../../components/letters/TableGrid/TableGrid";

const HardieParts = () => {
  const rowData = useMemo(() => [
    { item: 'Hardie trim 1x2x12', quantity: 0 },
    { item: 'Hardie trim 1x4x12', quantity: 0 },
    { item: 'Hardie trim 1x6x12', quantity: 0 },
    { item: 'Hardie trim 1x8x12', quantity: 0 },
    { item: 'Hardie trim 1x12x12', quantity: 0 },
    { item: 'Painters caulk white', quantity: 0 },
    { item: 'Painters caulk clear', quantity: 0 },
    { item: 'Mortar repair caulk', quantity: 0 },
    { item: 'Z Flashing 1/2 by 5/8 by 1/2', quantity: 0 },
    { item: 'Z Flashing 1/2 by 3/8 by 1/2', quantity: 0 },
    { item: 'L Flashing 2" 1/2 by 2" 1/2', quantity: 0 },
    { item: 'Over window flashing', quantity: 0 },
    { item: 'Turnback flashing', quantity: 0 },
    { item: 'Exterior trim nails 16 Gage 2" 1/2 per box', quantity: 0 },
    { item: 'Exterior nail gun siding nails per box', quantity: 0 },
    { item: 'T 50 staples per Box', quantity: 0 },
    { item: 'Exterior screws', quantity: 0 },
  ], []);
  const rowData2 = useMemo(() => [
    { item: 'Hardie trim 1x2x12', quantity: 0 },
    { item: 'Hardie trim 1x4x12', quantity: 0 },
    { item: 'Hardie trim 1x6x12', quantity: 0 },
    { item: 'Hardie trim 1x8x12', quantity: 0 },
    { item: 'Hardie trim 1x12x12', quantity: 0 },
    { item: 'Color plus BASE color match caulk', quantity: 0 },
    { item: 'Color plus TRIM color match caulk', quantity: 0 },
    { item: 'Mortar repair caulk', quantity: 0 },
    { item: 'Color plus base touch up kit', quantity: 0 },
    { item: 'Color plus trim touch up kit', quantity: 0 },
    { item: 'Z Flashing 1/2 by 5/8 by 1/2', quantity: 0 },
    { item: 'Z Flashing 1/2 by 3/8 by 1/2', quantity: 0 },
    { item: 'L Flashing 2" 1/2 by 2" 1/2', quantity: 0 },
    { item: 'Over window flashing', quantity: 0 },
    { item: 'Turnback flashing', quantity: 0 },
    { item: 'Exterior trim nails 16 Gage 2" 1/2 per box', quantity: 0 },
    { item: 'Exterior nail gun siding nails per box', quantity: 0 },
    { item: 'T 50 staples per Box', quantity: 0 },
    { item: '3 1/2" Exterior screws 1 lb box', quantity: 0 },
  ], []);
  const tables=[
    {
      name:"Hardie painted Siding Parts",
      rows:rowData
    },
    {
      name:"Hardie Color Plus Parts",
      rows:rowData2
    }
  ]
  return (
    <div>
     <TableGrid tables={[
       [tables[0]],
       [tables[1]]
     ]}/>
    </div>
  );
};

export default HardieParts;

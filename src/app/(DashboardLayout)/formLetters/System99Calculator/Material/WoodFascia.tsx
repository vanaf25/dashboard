"use client";
import {useMemo} from 'react';
import TableWithFalseColumn from "../../../../components/letters/TableWithFalseColumn/TableWithFalseColumn";

const WoodFascia = () => {
  const rows = useMemo(() => [
    { item: 'Exterior trim nails 16 Gage 2" 1/2 per box', quantity: 0 },
    { item: 'Quad Caulk clear', quantity: 0 },
    { item: 'Cedar 1x6x12', quantity: 0 },
    { item: 'Cedar 1x8x12', quantity: 0 },
    { item: 'Cedar 1x12x12', quantity: 0 }
  ], []);
  const rows2=useMemo(()=>(
    [{item:"Per piece",quantity:0}]),[])
  return (
    <div>
      <TableWithFalseColumn withOutMargin itemHeaderName={"Wood Fascia"} rows={rows}/>
      <TableWithFalseColumn  itemHeaderName={"Bead board porch ceiling"} rows={rows2}/>
    </div>
  );
};

export default WoodFascia;

"use client"
import { Paper } from '@mui/material';
import Link from 'next/link';

const Calculations = () => {
    const calculators = [
        "Gutters", "Walls", "LatticePanel", "HotTubPad", "HomeWrap", "VinylSiding", "Corners",
        "SheetSiding", "Soffit", "PergolaShade", "FreezeBoard", "PlankSiding", "Fascia",
        "StuccoWallCovering", "BrickWallCovering", "PorchCeiling", "StarFraming", "Fencing"
    ];
    return (
        <Paper sx={{ maxWidth: 600, margin: "0 auto", p: 2 }}>
            <h1 style={{ textAlign: "center" }}>All calculators({calculators.length})</h1>
            {calculators.map(el => (
                <Paper sx={{ p: 2, width: "80%", margin: "0 auto 10px", fontSize: 25, textAlign: "center" }} key={el}>
                    <Link href={`/system99/calculations/${el}`} passHref>
                        {el}
                    </Link>
                </Paper>
            ))}
        </Paper>
    );
};

export default Calculations;

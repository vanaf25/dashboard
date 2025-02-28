"use client"
import { Paper } from '@mui/material';
import Link from 'next/link';
import {CALCULATORS} from "@/app/consts/calculators";
const Calculations = () => {
    const mainCalculators=["Exterior Siding","Eaves","Apture’s",
        "Roofing","Structures","Barriers","Landscape","Interior","Utilities"]
    return (
        <Paper sx={{ maxWidth: 600, margin: "0 auto", p: 2 }}>
            <h1 style={{ textAlign: "center" }}>All calculators({CALCULATORS.length})</h1>
            {mainCalculators.map(el => (
                <Paper sx={{ p: 2, width: "80%", margin: "0 auto 10px", fontSize: 25, textAlign: "center" }} key={el}>
                    <Link href={`/system99/calculators/${el.replace(/[\s?'’]/g, '')}`} passHref>
                        {el}
                    </Link>
                </Paper>
            ))}
        </Paper>
    );
};

export default Calculations;

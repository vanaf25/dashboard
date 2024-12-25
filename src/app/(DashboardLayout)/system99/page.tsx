"use client"
import { Paper } from '@mui/material';
import Link from 'next/link';
import {CALCULATORS} from "@/app/consts/calculators";
const Calculations = () => {
    return (
        <Paper sx={{ maxWidth: 600, margin: "0 auto", p: 2 }}>
            <h1 style={{ textAlign: "center" }}>All calculators({CALCULATORS.length})</h1>
            {CALCULATORS.map(el => (
                <Paper sx={{ p: 2, width: "80%", margin: "0 auto 10px", fontSize: 25, textAlign: "center" }} key={el}>
                    <Link href={`/system99/calculators/${el}`} passHref>
                        {el}
                    </Link>
                </Paper>
            ))}
        </Paper>
    );
};

export default Calculations;

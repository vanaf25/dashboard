"use client"
import { Paper } from '@mui/material';
import Link from 'next/link';
import {MAIN_CALCULATORS} from "@/app/consts/calculators";
const Calculations = () => {
    return (
        <Paper sx={{ maxWidth: 600, margin: "0 auto", p: 2 }}>
            <h1 style={{ textAlign: "center" }}>All calculators({MAIN_CALCULATORS.length})</h1>
            {MAIN_CALCULATORS.map(el => (
                <Paper sx={{ p: 2, width: "80%", margin: "0 auto 10px", fontSize: 25, textAlign: "center" }} key={el.key}>
                    <Link href={`/system99/calculators/${el.key}`} passHref>
                        {el.label}
                    </Link>
                </Paper>
            ))}
        </Paper>
    );
};

export default Calculations;

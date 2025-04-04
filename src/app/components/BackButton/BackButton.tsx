"use client";
import BlankCard from "@/app/components/shared/BlankCard";
import Link from "next/link";
import {Button} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {getParentPath} from "@/app/utils/getParentPath";
import {usePathname} from "next/navigation";

const BackButton=()=>{
    const pathname=usePathname();
    const parentPath=getParentPath(pathname)
    return ( <BlankCard sx={{ p: 2, maxWidth: 300, margin: "0 auto 20px" }}>
            <Button
                fullWidth
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                sx={{
                    color: "primary.main",
                    borderColor: "primary.main",
                }}
                onClick={() => window.history.back()}
            >
                Back
            </Button>
        </BlankCard>
    )
}
export default BackButton
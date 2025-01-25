import React, {useMemo} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableName from "@/app/components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";
import SignatureSection from "@/app/components/letters/signatureSection/signatureSection";
import {TERMS} from "@/app/consts/contractData/contractData";
import BlankCard from "@/app/components/shared/BlankCard";
interface  DocumentTermsConditionsProps{
    data:any,
    isForPrint?:boolean
}
const DocumentTermsConditions:React.FC<DocumentTermsConditionsProps>= ({data,isForPrint}) => {
    const columnDefs =useMemo(()=>([
        {
            headerName: "Percentage",
            field: "percentage",
            width: 150
        },
        {
            headerName: "Price",
            valueGetter: (params:any) => {
                return (params.data.percentage / 100) * data.totalPrice;
            },
            width: 150
        },
        {
            headerName: "Description",
            field: "description",
            width: 400,
            flex:3
        }
    ]),[data?.totalPrice])
    const contractDataRows = [
        {
            percentage: 30,
            description: "Due within 3 days of executing this contract."
        },
        {
            percentage: 45,
            description: "Due 5 days after the arrival of supplies and the start of work, whichever comes first."
        },
        {
            percentage: 25,
            description: "Due and payable in full at the company's office at the address below."
        }
    ];
    const terms=TERMS.filter((term)=>!data?.terms?.includes(term.order))
    return (
        <>
            <Typography sx={{mb:"15px"}}
                        variant={"h3"}>Terms And Conditions:</Typography>
            <Typography sx={{ mb: "20px" }}>
                All labor and material necessary to perform the work described
                above will be furnished for the sum of{' '}
                <Box component="span" sx={{ backgroundColor: 'yellow', padding: '0 4px', borderRadius: '4px' }}>
                    {data.totalPrice}
                </Box>{' '}
                (the “Contract Price”).
            </Typography>
            <TableName>All payments must be made as follows:</TableName>
            <Table columns={columnDefs} rows={contractDataRows}/>
            {isForPrint && terms.map(term=><BlankCard sx={{mb:2}} key={term.order}>
                <Typography variant="h3" sx={{ mb: "20px" }} component="div">
                    {term.title}
                </Typography>
                <Typography sx={{ fontSize: "18px" }}>
                    {term.description}
                </Typography>
            </BlankCard>)}
            <Box sx={{mt:2}}>
                <SignatureSection client={"Signature of Customer"}/>
                <SignatureSection client={"Signature of Spouse"}/>
                <SignatureSection client={"Signature of Company Representative"}/>
            </Box>
        </>
    );
};

export default DocumentTermsConditions;
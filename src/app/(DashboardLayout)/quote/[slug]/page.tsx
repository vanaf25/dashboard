"use client";
import React, {useEffect, useMemo, useState} from 'react';
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {supabase} from "@/lib/supabase";
import TasksFields from "@/app/components/TasksFields/TasksFields";
import EstimatorDetails from "@/app/components/global/EstimatorDetails/EstimatorDetails";
import CustomerDetails from "@/app/components/global/CustomerDetails/CustomerDetails";
import {contractData} from "@/app/consts/contractData/contractData";
import { Grid } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TableName from "@/app/components/letters/TableName/TableName";
import Table from "@/app/components/letters/Table/Table";
import SignatureSection from '@/app/components/letters/signatureSection/signatureSection';

const Page = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [data,setData]=useState<any>(null);
    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const { data, error } = await supabase
                    .from('documents')
                    .select(`
                        *,
                        profiles!created_by (*),
                        customers!client_id (*)
                    `)
                    .eq('id', slug)
                    .single();

                if (error) {
                    console.error('Error fetching document:', error);
                } else {
                    console.log('Document Data:', data);
                    setData(data);
                }
                console.log('Slug (Document ID):', slug);
            } catch (err) {
                console.error('Unexpected error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDocument();
    }, [slug]);
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
    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box>
            {data && <>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <CustomerDetails customer={{
                        name:data.customers.name,
                        email:data.customers.email,
                        phone:data.customers.phone,
                        address:`${data.customers.address} ${data.customers.city} ${data.customers.state}. ${data.customers.zip}`
                    }}/>
                    <EstimatorDetails estimatorDetails={{
                        signee:data.profiles.username,
                        companyEmail:data.profiles.company_email,
                        companyPhone:data.profiles.phone,
                    }}/>
                </Box>
                {data.type==="contract" && <Box>
                    <Typography sx={{mb:1}}>Hereafter company refers to:<mark>{data.customers.name}</mark></Typography>
                    <Typography>Hereafter client, owner and customer refers to
                        <mark>{data.profiles.username}</mark> and their spouse or life partner.
                    </Typography>
                </Box>}
                <TasksFields defaultCustomField={data.custom_fields}
                             defaultNoteToClient={data.notes}
                             defaultRowsItems={data.line_items}
                             currentId={data.id}
                             selectedTerms={data.terms ? data.terms:[]}
                             isContract={data.type==="contract"}
                             fields={contractData.find(el=>el.name===data.service)?.fields || []}
                             type={data.service} slug={""} selectedFields={data.fields.map((f:any)=>f.order)}
                             update />
                {data.type==="contract" && <>
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
                    <SignatureSection client={"Signature of Customer"}/>
                    <SignatureSection client={"Signature of Spouse"}/>
                    <SignatureSection client={"Signature of Company Representative"}/>
                </> }
                <Box sx={{display:"flex",justifyContent:"center",gap:2}}>
                    <Typography sx={{fontSize:"18px"}}>Company Phone:{data.profiles.phone}</Typography>
                    <Typography sx={{fontSize:"18px"}}>Company Address:
                        {data.customers.company_address} {data.profiles.city} {data.profiles.state}.
                        {data.profiles.zip}</Typography>
                </Box>
            </> }
        </Box>
    );
};

export default Page;

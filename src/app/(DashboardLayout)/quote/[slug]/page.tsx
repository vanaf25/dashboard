"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {supabase} from "@/lib/supabase";
import TasksFields from "@/app/components/TasksFields/TasksFields";
import EstimatorDetails from "@/app/components/global/EstimatorDetails/EstimatorDetails";
import CustomerDetails from "@/app/components/global/CustomerDetails/CustomerDetails";
import {contractData} from "@/app/consts/contractData/contractData";

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
                <TasksFields defaultCustomField={data.custom_fields}
                             defaultNoteToClient={data.notes}
                             defaultRowsItems={data.line_items}
                             currentId={data.id}
                             fields={contractData.find(el=>el.name===data.service)?.fields || []}
                             type={data.service} slug={""} selectedFields={data.fields.map((f:any)=>f.order)}
                             update />
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

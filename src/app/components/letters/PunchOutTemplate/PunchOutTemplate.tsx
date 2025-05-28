"use client";
import {Typography} from '@mui/material';
import Table from "@/app/components/letters/Table/Table";
import type {AgGridReact as AgGridReactType} from "ag-grid-react";
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import SignaturePad from "@/app/components/letters/SignaturePad/SignaturePad"
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";
import React, {useMemo, useRef, useState} from "react";
import getRowData from "@/app/utils/tables/getRowData";

interface PunchOutTemplateProps{
    type:15 | 60
}
const PunchOutOfTemplate:React.FC<PunchOutTemplateProps> = ({type}) => {
    const sections=[
        `  As with all punch out item's although we will always do our best to make sure that the work performed is of good quality
        we do not have the ability to fully complete items to your personal tastes on this standard punch out list. To help us
        better perform to your expectations please attach a picture and brief description of the items you would like us to bring
        up to your standards.`,
        `   By signing this punch out list you agree that upon completion of the items listed all contractual obligations by the company
        have been completed. Furthermore you agree that any items listed that are not part of your contract will incur additional charges.`
    ]
    const specialField=`The customer will be charged at an hourly rate of 89.00 per hour for one service person or
124.00 per hour for 2 service persons as well as the cost for any extra material needed to complete the listed items.
the customer agrees to take full responsibility for all work performed and hold the company blameless from any liability`
    const ref=useRef<AgGridReactType>(null);
    const p=` The items listed below were submitted to us by the customer and at the customers request the company will repair, refinish, refine,
        touch up or bring up to standard the items listed below. Any items listed that do not pertain to the contract or
        are not clearly described in the contract language will be charged to the customer as additional work.`
    const tableRows=useMemo(()=>([...Array(type)]
        .map((el,index)=>({num:index+1,
            description:`Description of punch out of ${type}`,check:false}))),[])
    const tableColumns=useMemo(()=>([{field:"num",flex:1},{field:"description",
        editable:true,flex:6},
        {field:"check",editable:true,flex:1, cellRenderer: 'agCheckboxCellRenderer',
            cellEditor: 'agCheckboxCellEditor',}]),[])
    const [actualRowData,setActualRowData]=useState<any[]>(tableRows);
    const exportsElems=useMemo(()=>([{type:ElementType.P,content:p},
            ...(type === 60 ? [{ type: ElementType.P, content: specialField }] : []),
            {type:ElementType.TABLE,rows:actualRowData,content:"",columns:tableColumns}
            , ...sections.map(sec=>({type:ElementType.P,content:sec}))]
    ),[tableColumns,tableRows]);
    const onCellValueChanged=(e:any)=>{
        if(ref?.current?.api){
            const rowData=getRowData(ref?.current?.api,e.rowIndex)
            setActualRowData(prevState => prevState.map(row => row.num === rowData.num ? rowData : row));
        }
    }
    return (
        <DocumentLayout withSignature exportElems={exportsElems} pdfName={`Punch Out  ${type}`}
                        pdfTitle={`Punch Out ${type}`} >
            <Typography sx={{mb:1}}>
                {p}
            </Typography>
            {type===60 ? <Typography sx={{mb:1}}>{specialField}</Typography>:<></>}
            <Table
                onCellValueChanged={onCellValueChanged}
                customRef={ref}
                columns={tableColumns}
                rows={tableRows}
            />
            <Paragraphs sections={sections}/>
            <SignaturesSection client={"signature"}/>
        </DocumentLayout>
    );
};

export default PunchOutOfTemplate;

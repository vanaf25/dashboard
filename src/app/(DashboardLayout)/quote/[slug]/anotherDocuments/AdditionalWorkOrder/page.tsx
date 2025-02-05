"use client";
import { useState, ChangeEvent } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import Table from "@/app/components/letters/Table/Table";
import BlueBlock from "@/app/components/global/blueBlock/BlueBlock";
import SignaturesSection from "@/app/components/letters/signatureSection/signatureSection";
import DocumentLayout from "@/app/components/DocumentLayout/DocumentLayout";
import { ElementType } from "@/app/types/exportPdfTypes";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import SignatureSection from "@/app/components/letters/signatureSection/signatureSection";
import ImagePicker from "@/app/components/ImagePicker/ImagePicker";

// Define a type for each text field item
interface TextFieldItem {
    value: string;
}

const AdditionalWorkOrder = () => {
    const [textFields, setTextFields] = useState<TextFieldItem[]>([{ value: '' }]);

    const paragraphs = [
        "With payments to be made as follows: All payments due prior to start of extra work.",
        "Additional work to be performed under same conditions as specified in original contract unless otherwise stipulated. We propose hereby to furnish material and labor to complete in accordance with these specifications at above stated price.",
        "The above prices, specifications and conditions are satisfactory and are hereby accepted. You are authorized to do the work as specified. Payments will be made as outlined above."
    ];
    const titleH6="ACCEPTANCE OF ADDITIONAL WORK:"
    const inputDescription="Additional charge for above described work is:"
    const [value,setValue]=useState("");
    const exportableElements = [
        ...textFields.map(field=>(
        {type:ElementType.SECTION,content:field.value})),
        {type:ElementType.SECTION,content:`${inputDescription} ${value}$`},
        {type:ElementType.P,content:`${paragraphs[0]}`},
        {type:ElementType.P,content:`${paragraphs[1]}`},
        {type:ElementType.H4,content:titleH6},
        {type:ElementType.P,content:paragraphs[2]}
    ]
    const addTextField = () => {
        setTextFields([...textFields, { value: '' }]);
    };

    const removeTextField = (index: number) => {
        const newTextFields = textFields.filter((_, i) => i !== index);
        setTextFields(newTextFields);
    };
    const handleTextChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newTextFields = [...textFields];
        newTextFields[index].value = event.target.value;
        setTextFields(newTextFields);
    };

    return (
        <DocumentLayout withSignature exportElems={exportableElements} pdfName={"Additional Work Order"} pdfTitle={"Additional Work Order"}>
            {/* Render text fields dynamically */}
            <Box mt={3}>
                {textFields.map((textField, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <TextField
                            label={`Additional Work Order ${index + 1}`}
                            variant="outlined"
                            value={textField.value}
                            onChange={(e:any) => handleTextChange(index, e)}
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ marginRight: '8px' }}
                        />
                        <Button
                            onClick={() => removeTextField(index)}
                            variant="contained"
                            color="error"
                        >
                            Remove
                        </Button>
                    </Box>
                ))}
            </Box>
            <Button size={"large"} fullWidth onClick={addTextField} sx={{ marginBottom: '16px' }}>
                Add New Additional Work Order
            </Button>
            <Typography variant={"h6"} sx={{mb:3}}>
                {inputDescription}
            </Typography>
            <TextField
                sx={{ mb: 2, width: 200 }}
                value={value}
                onChange={(e) => setValue( e.target.value)}
                label={"Additional charge"}
                type="number"
                InputProps={{
                    startAdornment: <Typography variant="body1" sx={{ marginRight: 1 }}>$</Typography>
                }}
            />
            <Typography sx={{ mb: 1 }}>
                With payments to be made as follows: <b>All payments due prior to start of extra work.</b>
            </Typography>
            <Typography sx={{ mb: 1 }}>
                {paragraphs[1]}
            </Typography>
            <SignatureSection client={"Signature of Company Rep"} />
            <Typography variant={"h6"} sx={{ mb: 1 }}>
                {titleH6}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {paragraphs[2]}
            </Typography>

            <SignaturesSection client="Customer Signature" />
            <ImagePicker />
        </DocumentLayout>
    );
};

export default AdditionalWorkOrder;

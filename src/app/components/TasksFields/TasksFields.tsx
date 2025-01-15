import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
    List,
    ListItem,
    ListItemText,
    Checkbox,
    Typography,
    Divider,
    TextField,
    Box,
} from "@mui/material";
import { useRouter } from 'next/navigation';
import Button from "@mui/material/Button";
import PaymentCalculation, { RowData } from "@/app/components/TasksFields/PaymentCalculation/PaymentCalculation";
import { supabase } from "@/lib/supabase";
import { useUser } from "@supabase/auth-helpers-react";
import { FieldType } from "@/app/types/dashboardTypes";
import { TERMS } from "@/app/consts/contractData/contractData";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

type TaskListFormValues = {
    selectedTasks: boolean[];
    customFields: { id: string; value: string }[];
    notesToClient: string;
    selectedTerms: boolean[]; // Add selectedTerms as part of form state
};

interface TaskListProps {
    fields: FieldType[];
    selectedFields?: number[];
    type: string;
    slug: string;
    update?: boolean;
    isContract?: boolean;
    selectedTerms?: number[];
    defaultRowsItems?: RowData[];
    defaultNoteToClient?: string;
    defaultCustomField?: { id: string; value: string }[];
    currentId?: number;
}

const TaskList: React.FC<TaskListProps> = ({
                                               fields, type, slug, update,
                                               defaultRowsItems, defaultCustomField, selectedFields,
                                               defaultNoteToClient, currentId, isContract, selectedTerms = []
                                           }) => {
    console.log('selectedTerms:', selectedTerms);

    const { control, handleSubmit, getValues, setValue } = useForm<TaskListFormValues>({
        defaultValues: {
            selectedTasks: fields.map((el) => !!selectedFields?.includes(el.order)),
            customFields: defaultCustomField || [],
            notesToClient: defaultNoteToClient || "",
            selectedTerms: TERMS.map((term) => selectedTerms.includes(term.order-1)), // Initialize terms selection
        },
    });
    console.log('term:',TERMS.map((term) => selectedTerms.includes(term.order)));
    const { fields: customFields, append, remove } = useFieldArray({
        control,
        name: "customFields",
    });

    const [rowData, setRowData] = useState<RowData[]>(defaultRowsItems || [
        { id: 1, description: "", price: 0 },
    ]);

    const user = useUser();
    const router = useRouter();

    const onSubmit = async (data: TaskListFormValues) => {
        console.log('data:', data);

        // Collect selected tasks
        let selectedTasks: any[] = [];
        data.selectedTasks.forEach((el, index) => {
            const el1 = fields[index];
            if (el1 && el) selectedTasks.push(el1);
        });
        console.log("Selected Tasks:", selectedTasks);
        console.log("Custom Fields:", data.customFields.map(field => field.value));
        console.log("Notes to Client:", data.notesToClient);
        console.log('paymentCalculations:', rowData);

        try {
            if (!update) {
                // Insert new document
                const { data: serverData, error } = await supabase
                    .from('documents')
                    .insert([{
                        created_by: user?.id as string,
                        fields: selectedTasks,
                        service: type,
                        company: "",
                        type: "quote",
                        custom_fields: data.customFields,
                        line_items: rowData,
                        notes: data.notesToClient,
                        client_id: slug,
                    }])
                    .select()
                    .single();

                console.log('serverData:', serverData);

                if (serverData?.id) {
                    router.push(`/quote/${serverData.id}`);
                }

                if (error) {
                    throw error;
                }
            } else {
                // Update existing document
                console.log("sleectedTer,s:",data.selectedTerms);
                const terms=data.selectedTerms
                    .map((el,index)=>el ? index:undefined).filter(el=>el!==undefined);
                console.error('term',terms);
                const { data: serverData, error } = await supabase
                    .from('documents')
                    .update({
                        fields: selectedTasks,
                        custom_fields: data.customFields,
                        line_items: rowData,
                        terms,
                        notes: data.notesToClient,
                    })
                    .eq('id', currentId);

                console.log('Updated serverData:', serverData);

                if (error) {
                    throw error;
                }

                if (currentId) {
                    router.push(`/quote/${currentId}`);
                }
            }
        } catch (error: any) {
            alert(update ? "Error updating document" : "Error adding document");
            console.error(update ? 'Error updating document' : 'Error adding document', error);
        }
    };

    const addCustomField = () => {
        append({ id: Date.now().toString(), value: "" }); // Add an empty custom field
    };

    return (
        <Box>
            <form style={{ marginBottom: "20px", }} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h1" sx={{ textAlign: "center" }} gutterBottom>
                    {update ? "Update Quote" : "Generate Quote"}
                </Typography>
                <Divider />
                <List>
                    {fields.map((field: any, index) => (
                        <React.Fragment key={field.order}>
                            <ListItem
                                button
                                onClick={() => {
                                    const currentValue = getValues(`selectedTasks.${index}`);
                                    setValue(`selectedTasks.${index}`, !currentValue);
                                }}
                            >
                                <Controller
                                    name={`selectedTasks.${index}`}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <Checkbox
                                            edge="start"
                                            checked={value}
                                            onChange={(e) => onChange(e.target.checked)}
                                        />
                                    )}
                                />
                                { <ListItemText
                                    primary={<Typography variant="h5" sx={{ mb: 1, color: "#2e2e2e" }}>{field.title}</Typography>}
                                    secondary={field.description}
                                />}
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>

                <Typography variant="h5" gutterBottom>
                    Additional Work Description
                </Typography>
                <Button
                    variant="contained"
                    onClick={addCustomField}
                    sx={{ alignSelf: "flex-start", width: 250, margin: "10px auto" }}
                >
                    Add Text Field
                </Button>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
                    {customFields.map((customField, index) => (
                        <Box
                            key={customField.id}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <Controller
                                name={`customFields.${index}.value`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label={`Custom Field ${index + 1}`}
                                        variant="outlined"
                                        fullWidth
                                        size={"medium"}
                                    />
                                )}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => remove(index)}
                            >
                                Remove
                            </Button>
                        </Box>
                    ))}
                </Box>
                <PaymentCalculation rowData={rowData} setRowData={setRowData} />
                <Typography variant="h5" gutterBottom>
                    Notes to Client
                </Typography>
                <Controller
                    name="notesToClient"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Notes to Client"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            sx={{ marginTop: "1rem" }}
                        />
                    )}
                />

                {isContract && <Grid sx={{ mb: 2,mt:2 }} container spacing={1}>
                    {TERMS.map((item, index) => (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Card
                                onClick={() => {
                                const currentValue = getValues(`selectedTerms.${index}`);
                                setValue(`selectedTerms.${index}`, !currentValue);
                            }} sx={{ p: 4,cursor:"pointer" }}>
                                <Box>
                                    <Controller
                                        name={`selectedTerms.${index}`}
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <Checkbox
                                                checked={value}
                                                onChange={(e) => onChange(e.target.checked)}
                                            />
                                        )}
                                    />
                                    <Typography variant="h3" sx={{ mb: "20px" }} component="div">
                                        {item.title}
                                    </Typography>
                                    {selectedTerms?.includes(index) &&
                                        <Typography sx={{ fontSize: "18px" }}>
                                        {item.description}
                                    </Typography>}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>}

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: 300, margin: "10px auto" }}
                >
                    {update ? "Update" : "Submit"}
                </Button>
            </form>
        </Box>
    );
};

export default TaskList;

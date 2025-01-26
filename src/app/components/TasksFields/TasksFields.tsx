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
import { FieldType } from "@/app/types/dashboardTypes";
import { TERMS } from "@/app/consts/contractData/contractData";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import booleanObjectToArray from "@/app/utils/booleanObjectToArray";
import numberArrayToObject from "@/app/utils/numberArrayToObject";
import Alert from "@mui/material/Alert";
import {createClient} from "@/lib/supabase";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createQuote, updateQuote} from "@/app/apis/documentApi";

type TaskListFormValues = {
    selectedTasks: boolean[];
    customFields: { id: string; value: string }[];
    notesToClient: string;
    selectedTerms:  { [key: string]: boolean };
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
    currentId?: string;
}

const TaskList: React.FC<TaskListProps> = ({
                                               fields, type, slug, update,
                                               defaultRowsItems, defaultCustomField, selectedFields,
                                               defaultNoteToClient, currentId, isContract, selectedTerms:excludedTerms = []
                                           }) => {
    const [terms,setTerms]
        =useState(TERMS.filter((term)=>!excludedTerms.includes(term.order)))
    const { control, handleSubmit,
        reset,getValues, setValue } = useForm<TaskListFormValues>({
        defaultValues: {
            selectedTasks: fields.map((el) => !!selectedFields?.includes(el.order)),
            customFields: defaultCustomField || [],
            notesToClient: defaultNoteToClient || "",
            selectedTerms:numberArrayToObject(TERMS)
        },
    });
    const router = useRouter();
    const queryClient = useQueryClient();
    const {mutate,isPending}=useMutation({
        mutationFn:(body:any)=>createQuote(body),
        onSuccess: (serverData) => {
            console.log('serverData:',serverData);
            const document=serverData?.data;
            const id=document?.id
            if (id) {
                queryClient.setQueryData(['document', id], document);
                router.push(`/quote/${id}`);
            }
        },
        onError: () => {
            alert('Error adding document');
        },
    });
    const {mutate:updateMutate,isPending:isUpdatePending}=useMutation({
        onSuccess: (data) => {
            console.log('updData:',data);
            if(data && currentId){
                console.log('creating a new cache!');
                queryClient.setQueryData(['document', currentId],(oldData:any)=>
                    ({...oldData,...data}));
            }
/*
            queryClient.invalidateQueries('quotes');
*/
        },
        onError: () => {
            alert('Error updating document');
        },
        mutationFn:({docId,updateBody}:{ docId: string; updateBody: any })=>updateQuote(docId,updateBody)
    });
    const { fields: customFields, append, remove } = useFieldArray({
        control,
        name: "customFields",
    });

    const [rowData, setRowData] = useState<RowData[]>(defaultRowsItems || [
        { id: 1, description: "", price: 0 },
    ]);

    const onSubmit = async (data: TaskListFormValues) => {
        let selectedTasks: any[] = [];
        data.selectedTasks.forEach((el, index) => {
            const el1 = fields[index];
            if (el1 && el) selectedTasks.push(el1);
        });
/*
        const { data:user, error:authError }= await supabase.auth.getUser()
*/
        try {
            if (!update) {
                // Insert new document
               /* const { data: serverData, error } = await supabase
                    .from('documents')
                    .insert([{
                        created_by: user?.user?.id as string,
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
                if (serverData?.id) {
                    router.push(`/quote/${serverData.id}`);
                }

                if (error) {
                    throw error;
                }*/
                mutate({
                    fields: selectedTasks,
                    service: type,
                    company: "",
                    type: "quote",
                    customFields: data.customFields,
                    lineItems: rowData,
                    notes: data.notesToClient,
                    clientId: slug
                })

            } else {
                // Update existing document
                const selectedTerms=booleanObjectToArray(data.selectedTerms);
                /*const { data: serverData, error } = await supabase
                    .from('documents')
                    .update({
                        fields: selectedTasks,
                        custom_fields: data.customFields,
                        line_items: rowData,
                        terms:[...excludedTerms,...selectedTerms].filter((value, index, self) => self.indexOf(value) === index),
                        notes: data.notesToClient,
                    })
                    .eq('id', currentId);*/
                if(currentId){
                    updateMutate({
                        docId:currentId,
                        updateBody:{
                            fields: selectedTasks,
                            custom_fields: data.customFields,
                            line_items: rowData,
                            terms:[...excludedTerms,...selectedTerms].filter((value, index, self) => self.indexOf(value) === index),
                            notes: data.notesToClient,
                        }
                    })
                }
                /*setTerms(prevState =>
                    prevState.filter(el=>!selectedTerms.includes(el.order)));
                resetField("selectedTerms", {
                    defaultValue: numberArrayToObject(TERMS),
                });
                if (currentId) {
                    router.push(`/quote/${currentId}`);
                }*/
            }
        } catch (error: any) {
            alert(update ? "Error updating document" : "Error adding document");
            console.error(update ? 'Error updating document' : 'Error adding document', error);
        }
    };
    const addCustomField = () => {
        append({ id: Date.now().toString(), value: "" });
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
                {isContract && <Alert sx={{mt:2}} severity="info">
                    <Typography variant={"h3"}>
                        Terms that you  select will disappear!
                    </Typography>
                </Alert>}
                {isContract && <Grid sx={{ mb: 2,mt:2 }} container spacing={1}>
                    {terms.map((item, index) => (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                            <Card
                                onClick={() => {
                                    const currentTermValue =
                                        getValues(`selectedTerms.${item.order}`);
                                    if (currentTermValue === undefined) {
                                        setValue(`selectedTerms.${item.order}`, true);
                                    } else {
                                        setValue(`selectedTerms.${item.order}`, !currentTermValue);
                                    }
                            }} sx={{ p: 4,cursor:"pointer" }}>
                                <Box>
                                    <Controller
                                        name={`selectedTerms.${item.order}`}
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
                                        <Typography sx={{ fontSize: "18px" }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>}

                <Button
                    disabled={isPending || isUpdatePending}
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: 300, margin: "10px auto" }}
                >
                    {isPending  || isUpdatePending ? "Pending...": update ? "Update" : "Submit"}
                </Button>
            </form>
        </Box>
    );
};

export default TaskList;

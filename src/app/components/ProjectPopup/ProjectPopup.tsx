import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import {TERMS} from "./../../consts/contractData/contractData"
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import booleanObjectToArray from "@/app/utils/booleanObjectToArray";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateQuote} from "@/app/apis/documentApi";
interface ProjectPopupForm {
    close: () => void;
    open: boolean;
    id:string;
    name:string
}

interface FormValues {
    description: string;
    price: string;
    terms: { [key: string]: boolean };
}

const ProjectPopup: React.FC<ProjectPopupForm> = ({ close, open,name,id }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            description: "",
            price: "",
            terms: {},
        },
    });
    console.log('id:',id);
    const router = useRouter();
    const queryClient = useQueryClient();
    const {mutate,isPending}=useMutation({
        onSuccess: (data) => {
            if(data && id){
                queryClient.setQueryData(['document', id],(oldData:any)=>
                    ({...oldData,...data}));
                router.push(`/quote/${id}`);
            }
        },
        onError: () => {
            alert('Error updating document');
        },
        mutationFn:({docId,updateBody}:{ docId: string; updateBody: any })=>updateQuote(docId,updateBody)
    });
    const onSubmit = async (data:FormValues) => {
        try {
            console.log("Form submitted:", data);
            const selectedTerms = booleanObjectToArray(data.terms);
            console.log('terms:',selectedTerms);
            mutate({
                docId:id,
                updateBody:{
                    instructions: data.description,
                    totalPrice: +data.price,
                    type:"contract",
                    terms:selectedTerms || [],
                }
            })
        } catch (error:any) {
            console.error("Error updating document:", error.response?.data || error.message);
            alert("Failed to update the document.");
        }
    };
    const handleClose = () => {
        if(!isPending){
            close();
            reset();
        }
    };
            // contractData.find(el=>el.name===data.service)?.terms?
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Generate Contract For {name}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Description Field */}
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: "Description is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                autoFocus
                                margin="dense"
                                label="Description"
                                type="text"
                                fullWidth
                                variant="outlined"
                                error={!!errors.description}
                                helperText={errors.description?.message}
                            />
                        )}
                    />

                    {/* Price Field */}
                    <Controller
                        name="price"
                        control={control}
                        rules={{
                            required: "Price is required",
                            validate: (value) =>
                                !isNaN(Number(value)) || "Price must be a valid number",
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="dense"
                                label="Price"
                                type="text"
                                fullWidth
                                variant="outlined"
                                error={!!errors.price}
                                helperText={errors.price?.message}
                            />
                        )}
                    />
                    <Alert sx={{mt:1}} severity="info">
                        <Typography variant={"h3"}>
                            Terms that you  select will disappear!
                        </Typography>
                    </Alert>
                    <Grid container spacing={1} direction="column" marginTop={1}>
                        {TERMS.map((term) => (
                            <Grid item key={term.order}>
                                <Controller
                                    name={`terms.${term.order}`} // Use unique order as the key
                                    control={control}
                                    render={({ field }) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    {...field}
                                                    checked={field.value || false}
                                                    color="primary"
                                                />
                                            }
                                            label={term.title}
                                        />
                                    )}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button disabled={isPending} onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button disabled={isPending} onClick={handleSubmit(onSubmit)} color="primary" variant="contained">
                    {isPending ? "Pending...":"Submit"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectPopup;

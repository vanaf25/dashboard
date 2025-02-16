"use client";

import {Controller, useFieldArray, useForm} from "react-hook-form";
import {Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import BlankCard from "@/app/components/shared/BlankCard";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import {ElementType} from "@/app/types/exportPdfTypes";
import {useState} from "react";
import transformDayjsDate from "@/app/utils/transformDayjsDate";

const Application = () => {
    const { control, register, handleSubmit, watch } = useForm();
    const { fields: employmentFields, append, remove } = useFieldArray({ control, name: "employmentHistory" });
    const [submittedData,setSubmittedData]=useState<any>({employmentHistory:[]})
    const onSubmit = (data: any) => {
        console.log(data);
        setSubmittedData(data)
    };

    // Watch the workPermit field value
    const workPermit = watch("workPermit");
    const applicantStatement = [
        "I certify that all information I have provided in order to apply for and secure work with this employer is true, complete, and correct.",
        "I expressly authorize, without reservation, the employer, its representatives, employees, or agents to contact and obtain information from all references (personal and professional), employers, public agencies, licensing authorities, and educational institutions and to otherwise verify the accuracy of all information provided by me in this application, resume, or job interview. I hereby waive any and all rights and claims I may have regarding the employer, its agents, employees, or representatives, for seeking, gathering, and using truthful and non-defamatory information in a lawful manner in the employment process and all other persons, corporations, or organizations for furnishing such information about me.",
        "I understand that this employer does not unlawfully discriminate in employment and no question on this application is used for the purpose of limiting or eliminating any applicant from consideration for employment on any basis prohibited by applicable local, state, or federal law.",
        "I understand that this application remains current for 90 days. At the conclusion of that time, if I have not heard from the employer and still wish to be considered for employment, I may need to reapply.",
        "If I am hired, I understand that I am free to resign at any time, with or without cause and with or without prior notice, and the employer reserves the same right to terminate my employment at any time, with or without cause and with or without prior notice except as may be required by law. This application does not constitute an agreement or contract for employment for any specified period or definite duration. I understand that no supervisor or representative of the employer is authorized to make any assurances to the contrary and that no implied oral or written agreements contrary to the foregoing express language are valid unless they are in writing and signed by the employer’s president.",
        "I also understand that if I am hired, I will be required to provide proof of identity and legal authorization to work in the United States of America and that federal immigration laws require me to complete an I-9 Form in this regard. I understand that any information provided by me that is found to be false, incomplete, or misrepresented in any respect will be sufficient cause to (1) eliminate me from further consideration for employment, or (2) may result in my immediate discharge from the employer’s service, whenever it is discovered.",
        "I certify that I have read, fully understand, and accept all terms of the foregoing Applicant Statement.",
        "I, [Your Name Here], hereby give my permission to release information concerning myself to Mills Construction, Inc. and release the reference giver from all liability associated with this information."
    ];
    return (
        <WorkerLayout pdfName={"Application"} pdfTitle={"Application"} exportElems={[
            {type:ElementType.ListCard,cardListRows:[
                    { field: "Position applied for", value: submittedData.position },
                    { field: "Date of application", value: transformDayjsDate(submittedData.dateOfApplication) },
                    { field: "Name", value: submittedData.name },
                    { field: "Social security#", value: `${submittedData.ssn1}-${submittedData.ssn2}-${submittedData.ssn3}` },
                    { field: "Address", value: submittedData.address },
                    { field: "City", value: submittedData.city },
                    { field: "State", value: submittedData.state },
                    { field: "Zip code", value: submittedData.zip },
                    { field: "Email", value: submittedData.email },
                    { field: "desiredSalary", value: submittedData.desiredSalary },
                    { field: "When you can start a work", value: transformDayjsDate(submittedData.dateAvailable) },
                    { field: "If you are under 18, can you finish a work permit", value: submittedData.workPermit },
                    { field: "Are you legally eligible for employment in this country", value: submittedData.employmentEligibility },
                    { field: "Referral Source", value: submittedData.referralSource }
                ]
            },
            {type:ElementType.H3,content:"Employment history"},
            ...submittedData?.employmentHistory?.map((el:any)=>({type:ElementType.ListCard,
                cardListRows:Object.entries(el).map(el=>({field:el[0],
                    value:el[0]==="startDate"  || el[0]==="endDate" ? transformDayjsDate(el[1]):el[1]}))})),
            ...applicantStatement.map(el=>({type:ElementType.P,content:el}))
        ]} withSignature>
            <BlankCard sx={{mb:2}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4">Application</Typography>
                    <Typography sx={{mb: 1}}>
                        Equal access to program, services, and employment is available for persons. Those applicants
                        requiring
                        reasonable accommodation to the application and/or interview process should notify a
                        representative
                        of the
                        Company.
                    </Typography>

                    <Controller
                        name="position"
                        control={control}
                        render={({field}) => <TextField {...field} label="Position Applied For" fullWidth
                                                        margin="normal"/>}
                    />

                    <Controller
                        name="dateOfApplication"
                        control={control}
                        render={({field}) => <DatePicker {...field} label="Date of Application"/>}
                    />

                    <Box>
                        <TextField {...register("name")} label="Name" fullWidth margin="normal"/>
                        <TextField {...register("ssn1")} label="Social Security #" sx={{width: "30%"}}/> -
                        <TextField {...register("ssn2")} label="" sx={{width: "30%"}}/> -
                        <TextField {...register("ssn3")} label="" sx={{width: "30%"}}/>
                    </Box>

                    <TextField {...register("address")} label="Address" fullWidth margin="normal"/>
                    <TextField {...register("city")} label="City" fullWidth margin="normal"/>
                    <TextField {...register("state")} label="State" fullWidth margin="normal"/>
                    <TextField {...register("zip")} label="Zip Code" fullWidth margin="normal"/>

                    <Typography sx={{mb: 1}}>Are you legally eligible for employment in this country?</Typography>
                    <Controller
                        name="employmentEligibility"
                        control={control}
                        render={({field}) => (
                            <RadioGroup {...field} row>
                                <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                                <FormControlLabel value="no" control={<Radio/>} label="No"/>
                            </RadioGroup>
                        )}
                    />

                    <Controller
                        name="dateAvailable"
                        control={control}
                        render={({field}) => <DatePicker {...field} label="Date Available for Work"/>}
                    />

                    <TextField {...register("desiredSalary")} label="Desired Salary Range" fullWidth margin="normal"/>

                    {/* Email field */}
                    <TextField {...register("email")} label="Email" fullWidth margin="normal"/>

                    {/* Referral Source RadioGroup */}
                    <Typography sx={{mb: 1}}>Referral Source</Typography>
                    <Controller
                        name="referralSource"
                        control={control}
                        render={({field}) => (
                            <RadioGroup {...field} row>
                                <FormControlLabel value="friend" control={<Radio/>} label="Friend"/>
                                <FormControlLabel value="online" control={<Radio/>} label="Online"/>
                                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                            </RadioGroup>
                        )}
                    />

                    {/* Under 18 and Work Permit */}
                    <Typography sx={{mb: 1}}>If you are under 18, can you finish a work permit?</Typography>
                    <Controller
                        name="workPermit"
                        control={control}
                        render={({field}) => (
                            <RadioGroup {...field} row>
                                <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                                <FormControlLabel value="no" control={<Radio/>} label="No"/>
                                <FormControlLabel value="na" control={<Radio/>} label="N/A"/>
                            </RadioGroup>
                        )}
                    />
                    {workPermit === "no" && (
                        <TextField
                            {...register("workPermitExplanation")}
                            label="Please explain"
                            fullWidth
                            margin="normal"
                            multiline
                        />
                    )}

                    {/* Employment History */}
                    <Typography variant="h4" sx={{mb:2}}>Employment History</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{mb:2}}
                        onClick={() => append({})}
                    >
                        Add More Employment History
                    </Button>
                    <Controller
                        name="employmentHistory"
                        control={control}
                        render={() => (
                            <>
                                {employmentFields.map((item, index) => (
                                    <Box key={item.id} sx={{ mb: 2 }}>
                                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                            <Typography variant="h5">Job {index + 1}</Typography>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => remove(index)}
                                            >
                                                Delete Job
                                            </Button>
                                        </Box>
                                        <TextField
                                            {...register(`employmentHistory.${index}.company`)}
                                            label="Company"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.position`)}
                                            label="Position"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.salary`)}
                                            label="Salary"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <Controller
                                            name={`employmentHistory.${index}.startDate`}
                                            control={control}
                                            render={({ field }) => <DatePicker {...field} label="Start Date" />}
                                        />
                                        <Controller
                                            name={`employmentHistory.${index}.endDate`}
                                            control={control}
                                            render={({ field }) => <DatePicker {...field} label="End Date" />}
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.supervisor`)}
                                            label="Supervisor"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.reasonForLeaving`)}
                                            label="Reason for Leaving"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.duties`)}
                                            label="Duties"
                                            fullWidth
                                            margin="normal"
                                            multiline
                                            rows={3}
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.address`)}
                                            label="Address"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.city`)}
                                            label="City"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.zip`)}
                                            label="ZIP Code"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            {...register(`employmentHistory.${index}.state`)}
                                            label="State"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Box>
                                ))}

                            </>
                        )}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{mt: 1}}>
                        Save Application
                    </Button>
                </form>
            </BlankCard>
            <Typography sx={{mb:1}} variant="h4">Application Statement</Typography>

            <Paragraphs sections={applicantStatement} />
        </WorkerLayout>
    );
};

export default Application;

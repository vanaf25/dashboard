"use client";
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BlueTextField from "@/app/components/letters/BlueTextField/BlueTextField";
import Paragraphs from "@/app/components/letters/parahraphs/Paragraphs";
import { useGetWorkerQuery } from "@/app/hooks/useWorkers";
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import { ElementType } from "@/app/types/exportPdfTypes";

const MissedLead = () => {
  const { data } = useGetWorkerQuery();
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [reason, setReason] = useState("");

  const sections = [
    `Dear, ${data?.fullName}`,
    "We received a communication that you had missed one of your leads and as a result your customer has been reassigned to a different person. Missing a lead will often anger the potential customer and often the customer will cut off communication with the company. This is not only expensive to the company but will often make customers leave bad reviews of the company costing us further business." +
    "If you miss more than 2 leads without first assigning a replacement for yourself, you will be put in for review and no more leads will be assigned to you until the company can be confident that you are responsible with the leads assigned. If you continue to miss leads, the company will stop assigning you new leads, and you will have to generate your own leads if you wish to keep selling for us."
  ];

  return (
      <WorkerLayout
          exportElems={[
            ...sections.map((sec) => ({ type: ElementType.P, content: sec })),
            { type: ElementType.P, content: `Additional Notes from: ${additionalNotes}` },
            {type:ElementType.P,content:`Reason: ${reason}`}
          ]}
          pdfName={"Missed Lead"}
          pdfTitle={"Missed Lead"}
      >
        <Typography sx={{ mb: 1 }} variant={"h4"}>
          Missed Lead
        </Typography>
        <Paragraphs sections={sections} />
        <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>Additional notes from</span>
          <BlueTextField
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </Box>
        <Box sx={{ mb: 1 }}>
          <TextField
              label="Provide Reason"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              value={reason}
              onChange={(e) => setReason(e.target.value)}
          />
        </Box>
      </WorkerLayout>
  );
};

export default MissedLead;

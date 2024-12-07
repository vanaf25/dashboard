import { TextField, Typography } from '@mui/material';
import LegalLetter from '../../../components/letters/legalLetter/LegalLetter';
import SignaturesSection from '../../../components/letters/signatureSection/signatureSection';

const SafetyViolation = () => {
  return (
    <div>
      <Typography variant={"h4"} sx={{mb:2,textAlign:"center"}}>Incident Report</Typography>

      <LegalLetter name={0} paragraphs={["During a recent safety and quality inspection you were witnessed in violation of one of the safety rules. The rules are not in place to restrict your freedom but to prevent injury to yourself and others. Violating safety rules can not only cause harm or death to yourself but also to other workers and customers. violations can also cause property damage and significantly damage the relationship all of us have with our customers. this letter is a warning and if rules are repeatedly violated the company will move to protect the customer and other workers by re-training you with long unpaid training sessions, fining you, and or depending on the level of the violation removing you from the production team."]}/>
      <TextField
        label="Rule you violated"
        multiline
        rows={10}
        variant="outlined"
        sx={{mb:2}}
        fullWidth
      />
      <SignaturesSection client={"Signed"}/>
    </div>
  );
};

export default SafetyViolation;

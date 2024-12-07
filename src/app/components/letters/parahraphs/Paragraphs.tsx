import { Typography } from '@mui/material';
import React from "react";
interface ParagraphsProps{
  sections:string[]
}
const Paragraphs:React.FC<ParagraphsProps> = ({sections}) => {
  return (
    <div>
      {sections.map(section=><Typography sx={{mb:1}} key={Math.random()}>{section}</Typography>)}
    </div>
  );
};

export default Paragraphs;

import React, {ReactNode} from 'react';
import {Box} from "@mui/system";

const DocumentHeaderLayout:React.FC<{children:ReactNode | ReactNode[] }> = ({children}) => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} px={"20px"} >
            {children}
        </Box>
    );
};

export default DocumentHeaderLayout;
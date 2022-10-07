import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";

interface SpacerProps {
    
}
 
const Spacer: FunctionComponent<SpacerProps> = () => {
    return (
        <Box sx={{
            marginTop: 8,
        }}/>
    );
}
 
export default Spacer;
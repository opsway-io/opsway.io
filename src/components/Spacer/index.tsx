import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";

interface SpacerProps {
    
}
 
const Spacer: FunctionComponent<SpacerProps> = () => {
    return (
        <Box sx={{
            marginTop: {
                xs: 8,
                md: 12
            },
        }}/>
    );
}
 
export default Spacer;
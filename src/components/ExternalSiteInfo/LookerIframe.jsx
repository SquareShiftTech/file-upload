import React from "react";
import { Box, Typography } from "@mui/material";
import Iframe from "./Iframe";

const LookerIframe = () => {
  return (
    <Box
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80vw",
        height: "100vh", // Ensures it doesn't overflow viewport
      }}
    >
      {/* Properly Centered Title */}
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ textAlign: "center", paddingBottom: 1 }} // Ensures proper centering
      >
        Dashboard
      </Typography>

      {/* Iframe Wrapper to Control Size */}
      <Box
        sx={{
          width: "100%", // Keeps iframe responsive
          height: "85vh", // Prevents overflow
          overflow: "hidden", // Prevents iframe from exceeding boundaries
          borderRadius: 2,
          boxShadow: 3, // Adds slight elevation
        }}
      >
        {/* Iframe Component */}        
        <Iframe src="https://squareshift.cloud.looker.com/embed/dashboards/331?Distributor+Name=Audio+House&Sales+Date=7+day" />
      </Box>
    </Box>
  );
};

export default LookerIframe;

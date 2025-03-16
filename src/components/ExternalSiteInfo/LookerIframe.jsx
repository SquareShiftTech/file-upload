import React from "react";
import { Box, Typography } from "@mui/material";
import Iframe from "./Iframe";

const LookerIframe = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2, // Space between elements
        p: 2, // Padding
        width: "80vw",
        height: "80vh", // Ensures it doesn't overflow viewport
        // overflow: "hidden", // Prevents content from spilling outside
      }}
    >
      {/* Properly Centered Title */}
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ width: "100%", textAlign: "center", paddingBottom: 3 }} // Ensures proper centering
      >
        Looker Dashboard
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
        <Iframe src="https://www.squareshift.co/" />
      </Box>
    </Box>
  );
};

export default LookerIframe;

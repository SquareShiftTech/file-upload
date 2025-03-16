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

      {/* Iframe Wrapper to Control Size */}
      <Box
        sx={{
          width: "100%", // Keeps iframe responsive
          overflow: "hidden", // Prevents iframe from exceeding boundaries      
        }}
      >
        {/* Iframe Component */}
        <Iframe src="https://squareshift.cloud.looker.com/embed/dashboards/331?Distributor+Name=Audio+House&Sales+Date=7+day" />
      </Box>
    </Box>
  );
};

export default LookerIframe;

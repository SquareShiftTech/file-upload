import React from "react";
import { Box, Paper } from "@mui/material";

const Iframe = ({ src }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          height: "100vh",
          overflow: "hidden", // Prevents parent scroll
        }}
      >
        <iframe
          src={src}
          style={{
            width: "100%",
            height: "100%",
          }}
          title="Dynamic Iframe"
        ></iframe>
      </Paper>
    </Box>
  );
};

export default Iframe;

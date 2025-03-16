import React from "react";
import { Box, Paper } from "@mui/material";

const Iframe = ({ src }) => {
  return (
    <Box
      sx={{
        // width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "100vh",
          borderRadius: 2,
          overflow: "hidden", // Prevents parent scroll
        }}
      >
        <iframe
          src={src}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          title="Dynamic Iframe"
        ></iframe>
      </Paper>
    </Box>
  );
};

export default Iframe;

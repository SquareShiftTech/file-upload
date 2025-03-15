import React from "react";
import { Box, Container, Paper } from "@mui/material";
import OneClickInstallForm from "./OneClickInstallForm";
import OneClickInstallButton from "./OnclickInstallButton";

const OneClickInstall = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EDF5FB",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ position: "relative" }} // Make the container a relative parent
      >
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            textAlign: "center", 
            borderRadius: 10, 
            position: "relative"
          }}
        >
          <OneClickInstallForm />
        </Paper>

        {/* Floating button positioned at bottom-right of the container */}
        <Box
          sx={{
            position: "absolute",
            bottom: -40, // Adjust as needed to overlap container
            right: -40,  // Adjust as needed to place at bottom-right edge
          }}
        >
          <OneClickInstallButton />
        </Box>
      </Container>
    </Box>
  );
};

export default OneClickInstall;

import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import OneClickInstallForm from "./OneClickInstallForm";

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
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 4, textAlign: "center", borderRadius: 10 }}>
          <OneClickInstallForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default OneClickInstall;

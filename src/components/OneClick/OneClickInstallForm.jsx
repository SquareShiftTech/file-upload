import React from "react";
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const OneClickInstallForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0} // No shadow
          sx={{
            p: 4,
            textAlign: "center",
            borderRadius: 8, // More rounded corners
          }}
        >
          <TextField
            fullWidth
            label="Enter Project ID"
            variant="outlined"
            sx={{
              mb: 4, // Increased gap
              width: "360px", // Updated size
              height: "46px", // Updated size
              flexShrink: 0,
              backgroundColor: "#FFF",
              fill: "#FFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: 4, // Rounded corners
              },
            }}
          />
          <TextField
            fullWidth
            label="Select Config Package"
            variant="outlined"
            sx={{
              mb: 4, // Increased gap
              width: "360px", // Updated size
              height: "46px", // Updated size
              flexShrink: 0,
              backgroundColor: "#FFF",
              fill: "#FFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: 4, // Rounded corners
              },
            }}
          />
          <Typography
            component="a"
            href="#"
            sx={{
              display: "block",
              textAlign: "right",
              color: "#12CA95",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "italic",
              fontWeight: 400,
              textDecoration: "none",
              cursor: "pointer",
              mb: 2,
            }}
          >
            Browse
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, borderRadius: 4 }}
          >
            Install Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default OneClickInstallForm;
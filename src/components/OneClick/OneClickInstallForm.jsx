import React from "react";
import { Box, Container, Paper, TextField, Typography } from "@mui/material";

// Reusable method for label styles
const getLabelStyles = () => ({
  color: '#808199', // Label color
  fontFamily: 'Poppins', // Font family
  fontSize: '14px', // Font size
  fontStyle: 'normal', // Font style
  fontWeight: 400, // Font weight
  lineHeight: 'normal', // Line height
  textAlign: 'center', // Ensure text is horizontally centered
});

const OneClickInstallForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            InputLabelProps={{
              style: getLabelStyles(), // Apply reusable label styles
            }}
            sx={{
              mb: 4, // Reduced gap between fields
              flexShrink: 0,
              backgroundColor: "#FFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: 4, // Rounded corners
              },
            }}
          />
         <TextField
  fullWidth
  label="Select Config Package"
  variant="outlined"
  InputLabelProps={{
    style: getLabelStyles(), // Apply reusable label styles
  }}
  sx={{
    mb: 2, // Reduced gap between fields
    flexShrink: 0,
    backgroundColor: "#FFF",
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
    fontSize: "15px",
    fontStyle: "italic",
    fontWeight: 400,
    textDecoration: "none",
    cursor: "pointer",
    mb: 0.5, // Further reduced gap
  }}
>
  Browse
</Typography>

        </Paper>
      </Container>
    </Box>
  );
};

export default OneClickInstallForm;

import React from "react";
import { Button, Box, Typography } from "@mui/material";

const OneClickInstallButton = () => {
  return (
    <Button
      sx={{
        width: "140px",
        height: "140px",
        borderRadius: "50%", // Ensures circular shape
        backgroundColor: "transparent", // No extra background
        backgroundImage: "url('/Group.svg')", // Uses Group.svg as background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        border: "none",
        minWidth: "unset",
      }}
    >
      {/* Install Icon */}
      <Box
        component="img"
        src="/oneclickinstall.svg" // Ensure correct file path
        alt="Install Icon"
        sx={{
          width: "20.77px",
          height: "23.077px",
          flexShrink: 0,
          paddingBottom: "10px"
        }}
      />

      {/* Button Text */}

      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          fontFamily: "Poppins",
          color: "#FFF", // White text
          fontStyle: "normal",
          textAlign: "center", // Center align
          display: "block", // Ensures correct line break
          whiteSpace: "pre-line", // Allows breaking into new line
          lineHeight: "1", // Adjust line height to reduce space
        }}
      >
        One Click{"\n"}Install
      </Typography>



    </Button>
  );
};

export default OneClickInstallButton;

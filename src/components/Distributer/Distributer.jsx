import React from "react";
import { Box, TextField, InputAdornment, Button, Typography } from "@mui/material";
import DistributerData from "./DistributorData";

const Distributer = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF", borderRadius: 10, p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="medium"
          sx={{
            width: "400px",
            height: "40px", // Ensure both components have the same height
            borderRadius: 4, // Apply border radius to the TextField
            "& .MuiOutlinedInput-root": {
              height: "100%", // Ensure the input takes full height
              borderRadius: 4, // Apply border radius to the input part of the TextField
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/search.svg" alt="search icon" width={20} height={20} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "130px", // Ensure enough width for text
            height: "40px", // Match TextField height
            flexShrink: 0,
            backgroundColor: "#12CA95",
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "16px", // Reduce font size slightly if necessary
            fontWeight: 500,
            textTransform: "none",
            borderRadius: 4,
            whiteSpace: "nowrap", // ✅ Prevent text from wrapping
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Send Email
        </Button>

      </Box>
      <Box sx={{
        height: '60vh'
      }}>
        <DistributerData />
      </Box>
    </Box>
  );
};

export default Distributer;

import React from "react";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import DistributerData from "./DistributorData";

const Distributer = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF", borderRadius: 2, p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <TextField 
          variant="outlined" 
          placeholder="Search" 
          size="medium" 
          sx={{ width: "400px", height: "20px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/search.svg" alt="search icon" width={20} height={20} />
              </InputAdornment>
            ),
            sx: { borderRadius: 2 }
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          sx={{
            width: "130px",
            height: "40px",
            flexShrink: 0,
            backgroundColor: "#12CA95",
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textTransform: "none"
          }}
        >
          Send Email
        </Button>
      </Box>
      
      {/* DistributerData on a new line */}
      <Box>
        <DistributerData />
      </Box>
    </Box>
  );
};

export default Distributer;

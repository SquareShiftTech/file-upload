import React from "react";
import { Box, Paper } from "@mui/material";

const Iframe = ({ src }) => {
  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: "100vh",
      }}
      title="Dynamic Iframe"
    ></iframe>
  );
};

export default Iframe;

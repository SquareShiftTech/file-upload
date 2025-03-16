import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const Iframe = ({ src }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Box position="relative" width="100%" height="100vh">
      {loading && (
        <Box
          position="absolute"
          top="40%"
          left="40%"
          transform="translate(-50%, -50%)"
        >
          <CircularProgress />
        </Box>
      )}
      <iframe
        src={src}
        style={{
          width: "100%",
          height: "100vh",
          display: loading ? "none" : "block",
        }}
        title="Dynamic Iframe"
        onLoad={() => setLoading(false)}
      ></iframe>
    </Box>
  );
};

export default Iframe;

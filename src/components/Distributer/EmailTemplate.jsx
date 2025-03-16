import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const EmailTemplate = () => {
  return (
    <Box
      sx={{
        lineHeight: 1.6,
        color: "#333",
        width: "100%",
        margin: "auto",
        p: 2,
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#210C54"
        textAlign="center"
        gutterBottom
      >
        Forecast Demand
      </Typography>

      {/* Body Content */}
      <Typography variant="body1" gutterBottom>
        Dear Valued Retail Partner,
      </Typography>

      <Typography variant="body1" gutterBottom>
      I hope this email finds you well. We want to ensure you're fully prepared to capitalize the growing demand.

      </Typography>

      <Box mt={2}>
        <Typography variant="h6" fontWeight="bold">
          Here's what you need to know:
        </Typography>
        <ul>
          <li>
            <strong>Forecasted Demand:</strong> Our analysis predicts a{" "}
            <b>25%</b> increase in sales compared to last year’s launch. Please
            adjust your inventory accordingly.
          </li>
        </ul>
      </Box>
      {/* Footer */}
      <Typography variant="body2" color="#555" mt={2}>
        By following these guidelines, we can ensure a successful launch and
        maximize sales opportunities. If you have any questions or need
        additional support, please don’t hesitate to contact your account
        manager.
      </Typography>
      <br /><br />
      <Typography variant="body1" mt={2}>
        Best regards,
        <br />
        <strong>Lim & Sons</strong>
        <br />
        Apple Authorized Distributor
      </Typography>
    </Box>
  );
};

export default EmailTemplate;

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
        Launch of iPhone 16e
      </Typography>

      {/* Body Content */}
      <Typography variant="body1" gutterBottom>
        Dear Valued Retail Partner,
      </Typography>

      <Typography variant="body1" gutterBottom>
        I hope this email finds you well. As we approach the exciting launch of
        the iPhone 16e for Corporate Customers, I want to ensure you're fully
        prepared to capitalize on this opportunity.
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
          <li>
            <strong>Initial Stock:</strong> We recommend stocking at least{" "}
            <b>140%</b> of your typical monthly iPhone inventory for the first
            month post-launch.
          </li>
          <li>
            <strong>Reorder Point:</strong> Set your reorder point at <b>45%</b>{" "}
            of initial stock to maintain optimal inventory levels.
          </li>
        </ul>
      </Box>

      {/* Infographic Section */}
      <Paper
        elevation={0}
        sx={{
          background: "#f7f7f7",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={0} textAlign="center">
          <Grid item xs={4}>
            <Typography variant="h6" color="#210C54" fontWeight="bold">
              Shelf Space Requirements
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              35%
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#210C54" fontWeight="bold">
              Week 1-2 Demand
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              50%
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" color="#210C54" fontWeight="bold">
              Monthly Forecast of Units
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              2,150
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Footer */}
      <Typography variant="body2" color="#555" mt={2}>
        By following these guidelines, we can ensure a successful launch and
        maximize sales opportunities. If you have any questions or need
        additional support, please don’t hesitate to contact your account
        manager.
      </Typography>

      <Typography variant="body1" mt={2}>
        Let’s make this launch a resounding success together!
      </Typography>

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

import React from "react";
import { Modal, Box, Button } from "@mui/material";
import EmailTemplate from "./EmailTemplate";

const DistributerDetailModal = ({ open, onClose, row }) => {
  if (!row) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="view-modal-title"
      aria-describedby="view-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          width: "90vw",
          maxWidth: "900px",
          height: "90vh",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          p: 3,
        }}
      >
        {/* Scrollable Content Wrapper */}
        <Box
          sx={{
            flexGrow: 1,
            maxHeight: "83vh", // Prevents content from overflowing modal
            overflowY: "auto", // Enables scrolling if content overflows
            pr: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Inner Box to contain EmailTemplate */}
          <Box sx={{ flexGrow: 1, p: 2, bgcolor: "background.paper", borderRadius: 2 }}>
            <EmailTemplate />
          </Box>
        </Box>

        {/* Close Button */}
        <Box mt={2} display="flex" justifyContent="center">
          <Button
            onClick={onClose}
            variant="contained"
            sx={{ backgroundColor: "#12CA95", "&:hover": { backgroundColor: "#0FA37D" } }}
          >
            Close
          </Button>

        </Box>
      </Box>
    </Modal>
  );
};

export default DistributerDetailModal;

import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

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
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: '400px',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6" id="view-modal-title">
          Distributer Details
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <b>ID:</b> {row.id}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <b>Name:</b> {row.name}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <b>Date:</b> {row.date}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <b>Email:</b> {row.email}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <b>Status:</b> {row.status}
        </Typography>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DistributerDetailModal;

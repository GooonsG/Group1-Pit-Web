import React from "react";
import { Box, Typography, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function Profile({ open, onClose }) {
  // Retrieve user profile from localStorage
  const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {
    name: "Guest",
    username: "guest",
    course: "N/A",
    section: "N/A",
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>User Profile</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Name:</strong> {userProfile.name}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Username:</strong> {userProfile.username}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Course:</strong> {userProfile.course}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Section:</strong> {userProfile.section}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{ marginTop: "20px" }}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
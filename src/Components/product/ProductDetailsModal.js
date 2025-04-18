import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import lolole from '../../img/lolole.avif';


const ProductDetailsModal = ({ open, onClose, product }) => {
  if (!product) return null; 

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          {product.name}
        </Typography>
        <img
          src={product.image || lolole} 
          alt={product.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Description:</strong> {product.description || "No description available."}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Category:</strong> {product.category || "No category specified."}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Price:</strong> ${product.price}
        </Typography>
        {product.originalPrice && (
          <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
            Original Price: ${product.originalPrice}
          </Typography>
        )}
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ mt: 2, backgroundColor: "#F9BF3B", color: "black" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}; 

export default ProductDetailsModal;
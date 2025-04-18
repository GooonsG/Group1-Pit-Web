import React, { useState } from "react";
import { TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../img/logo3.png";

const AddProductForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  maxWidth: "450px",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "0.5px",
  boxShadow: "10px 10px 0px 0px rgba(31, 27, 79, 100)",
});

const SubmitButton = styled(Button)({
  padding: "12px",
  fontWeight: "bold",
  textTransform: "none",
  backgroundColor: "#F9BF3B",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#E0AC33",
  },
});

const ItemListingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "", 
    description: "",
    price: "",
    originalPrice: "", 
    image: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result })); // Set Base64 URL
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data to the parent component
    setFormData({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      image: "",
      category: "",
    }); // Reset form
  };

  return (
    <AddProductForm onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="center">
        <img
          src={logo}
          alt="Ustp Logo"
          width="150px"
          height="150px"
          className="App-logo-spin"
        />
      </Box>

      <Typography variant="h6" component="h5" className="text-center">
        Add New Product
      </Typography>

      <TextField
        label="Product Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />

      <TextField
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />

      <TextField
        label="Original Price"
        name="originalPrice"
        type="number"
        value={formData.originalPrice}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />

      <TextField
        select
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      >
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Books">Books</MenuItem>
        <MenuItem value="Home Appliances">Home Appliances</MenuItem>
      </TextField>

      <Button
        variant="contained"
        component="label"
        sx={{
          backgroundColor: "#F9BF3B",
          color: "#000000",
          "&:hover": { backgroundColor: "#E0AC33" },
        }}
      >
        Upload Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>

      <SubmitButton type="submit">Submit Product</SubmitButton>
    </AddProductForm>
  );
};

export default ItemListingForm;

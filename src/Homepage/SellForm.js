import React from "react";
import NavBar from "../Components/navigation/Navbar";
import ItemListingForm from "../Components/ItemListingForm";
import { useNavigate } from "react-router-dom";

export default function SellForm({ addProduct }) {
const navigate = useNavigate();

    const handleFormSubmit = (formData) => {
        addProduct(formData); // Pass the product data to App.js
        alert("Product added successfully!");
        navigate("/view-item"); 
    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <NavBar />
      <div
        style={{
          flexGrow: 1,
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ItemListingForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}
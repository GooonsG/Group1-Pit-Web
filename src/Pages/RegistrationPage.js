import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    course: "",
    section: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to localStorage
    localStorage.setItem("userProfile", JSON.stringify(formData));
    navigate("/login"); // Redirect to login page after registration
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Registration
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Section</label>
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
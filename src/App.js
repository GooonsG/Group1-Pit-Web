import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import ViewItemPage from "./Homepage/View-Item";
import SellForm from "./Homepage/SellForm";

function App() {
  const [products, setProducts] = useState([]); // State to store products

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]); // Add new product to the list
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-item"
          element={
            <ProtectedRoute>
              <ViewItemPage products={products} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-item"
          element={
            <ProtectedRoute>
              <SellForm addProduct={addProduct} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

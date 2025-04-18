import React, { useState } from 'react';
import ModernAppBar from '../Components//navigation/UstpNav';
import Sidebar from '../Components/navigation/Sidebar';
import { Box, Grid } from '@mui/material';
import ProductCard from '../Components/product/ProductCard';


export default function ViewItemPage({ products }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar */}
      <ModernAppBar onMenuClick={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#f9fafb',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'margin-left 0.3s ease', // Smooth transition when sidebar opens
          marginLeft: sidebarOpen ? '240px' : '0', // Adjust margin when sidebar is open
        }}
      >
        {/* Product Card Section */}
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                description={product.description}
                category={product.category}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
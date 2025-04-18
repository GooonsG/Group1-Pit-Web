import React, { useState } from 'react';
import ModernAppBar from './UstpNav';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '15vh' }}>
      <ModernAppBar onMenuClick={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </Box>
  );
}
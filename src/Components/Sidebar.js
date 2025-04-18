import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: 'rgba(31, 27, 79, 1)',
          color: '#F9BF3B',
          fontFamily: '"Roboto", "Poppins", "Open Sans", sans-serif', // Modern font
        },
      }}
    >
      <div
        style={{
          padding: '16px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <h3 style={{ margin: 0 }}>Menu</h3>
      </div>
      <List>
        {[
          { text: 'Home', icon: <HomeIcon style={{ color: 'white' }} />, path: '/' },
          { text: 'View Item', icon: <VisibilityIcon style={{ color: 'white' }} />, path: '/view-item' },
          { text: 'Sell Item', icon: <SellIcon style={{ color: 'white' }} />, path: '/sell-item' },
          { text: 'Buy Item', icon: <ShoppingCartIcon style={{ color: 'white' }} />, path: '/buy-item' },
        ].map((item) => (
          <NavLink
            to={item.path}
            key={item.text}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#F9BF3B' : 'white',
            })}
          >
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  style: {
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: '"Roboto", "Poppins", "Open Sans", sans-serif',
                  },
                }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
}
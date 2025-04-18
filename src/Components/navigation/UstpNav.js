import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import AccountMenu from './AccountMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)', 
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ModernAppBar({ onMenuClick }) {
  return (
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: 'rgba(31, 27, 79, 1)',
        color: 'black',
        boxShadow: '0 1px 3px 0 #F9BF3B',
        borderBottom: '2px solid #F9BF3B',
        backdropFilter: 'blur(10px)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        height: '8vh',
        display: 'flex',
        justifyContent: 'center', 
        zIndex: 1000, 
        '&:hover': {  
          backgroundColor: 'rgba(31, 27, 79, 0.95)',
          boxShadow: '0 1px 3px 0 #F9BF3B',
        },

      }}
    >
      <Toolbar sx={{ px: 15 , margin: '0 250px'}}>
        {/* Left side - Burger menu */}
        <IconButton
          size="large"
          edge="start"
          aria-label="open drawer"
          onClick={onMenuClick}
          sx={{ mr: 2, color: 'white' }} 
        >
          <MenuIcon />
        </IconButton>

        {/* Center - Logo */}
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ fontSize: '1.50rem', fontWeight: 'bold', color: '#F9BF3B' }}>USTP MARKETPLACE</div>
        </div>

        {/* Right side - Search and Profile */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Search bar */}
          <Search sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: 'white' }} /> 
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Profile icon */}
          
          <AccountMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
}
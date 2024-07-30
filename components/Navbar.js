'use client'

import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

const pages = ['Home', 'About', 'Product', 'Partners', 'Teams', 'Career', 'Connect'];

function Navbar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(router.pathname);

  useEffect(() => {
    setValue(router.pathname);
  }, [router.pathname]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleTabChange = (event, newValue) => {
    router.push(newValue);
    setValue(newValue);
    if (event.currentTarget.tagName === 'LI') {
      handleCloseNavMenu();
    }
  };

  return (
    <Container maxWidth="xl" style={{ overflowX: 'hidden' }}>
      <Toolbar disableGutters>
        <img src="/assets/logo.svg" alt="logo" style={{ width: {xs:"50%",md:"200px"},height: 'auto', marginLeft: {xs:"0%",md:"3.5%"} }} />

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            sx={{ 
              '& .MuiTab-root': {
                fontSize: '0.875rem',
                fontWeight: 300,
                mx: 1,
                minWidth: 0,
                padding: '12px 16px',
                textTransform: 'none',
                '&:hover': {
                  textDecoration: 'none',
                }
              },
              '& .Mui-selected': {
                fontWeight: 600,
                color: '#1976D2',
                borderBottom: '2px solid #1976D2',
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              }
            }}
          >
            {pages.map((page) => {
              const path = `/${page.toLowerCase()}`;
              return (
                <Tab
                  key={page}
                  label={page}
                  value={path}
                />
              );
            })}
          </Tabs>
        </Box>

        {/* Mobile View */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Dropdown Menu for Mobile */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ mt: '45px' }}
        >
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            return (
              <MenuItem key={page} onClick={(event) => handleTabChange(event, path)}>
                {page}
              </MenuItem>
            );
          })}
          {/* Sign In Button in Mobile Menu */}
          <MenuItem onClick={handleCloseNavMenu}>
            <Button
              sx={{
                fontWeight: 700,
                width: '100%', // Make button full width
              }}
              variant="outlined"
              startIcon={<ExitToAppIcon />}
            >
              Sign In
            </Button>
          </MenuItem>
        </Menu>

        {/* Desktop View Sign In Button */}
        <Button
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
            marginRight: { xs: 2, md: 7 },
            fontWeight: 700,
            width: "200px",
          }}
          variant="outlined"
          startIcon={<ExitToAppIcon />}
        >
          Sign In
        </Button>
      </Toolbar>
    </Container>
  );
}

export default Navbar;
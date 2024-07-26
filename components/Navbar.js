'use client'

import React, { useState } from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const pages = ['Home', 'About', 'Product', 'Our Partner', 'Teams', 'Career', 'Connect'];

function Navbar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="xl" style={{ overflowX: 'hidden' }}>
      <Toolbar disableGutters>
        <img src="/assets/logo.svg" alt="logo" style={{ width: '200px', marginLeft: '5%' }} />

        <Box sx={{ flexGrow: 1 }} />

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          keepMounted
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            marginTop: '40px',
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isActive = router.pathname === path;

            return (
              <Button
                key={page}
                component="a"
                href={path}
                sx={{
                  my: 2,
                  color: isActive ? '#1976D2' : '#2E2E2E',
                  display: 'block',
                  width: 'auto',
                  justifyContent: 'center',
                }}
              >
                {page}
              </Button>
            );
          })}
        </Menu>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ marginRight: '0px' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1 ,width:"100%"}}>
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isActive = router.pathname === path;

            return ( 
              <Button
                key={page}
                component="a"
                href={path}
                sx={{
                  my: 1,
                  color: isActive ? '#1976D2' : '#2E2E2E',
                  fontStyle: 'Poppins',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 300,
                  display: 'block',
                  mx: 1,
                  textUnderlineOffset: '4px',
                }}
              >
                {page}
              </Button>
            );
          })}
        </Box>
        <Button
          sx={{
            display: 'inline-flex',
            marginRight: { xs: 2, md: 7 },
            fontWeight: 700,
            width:"200px",
            '@media (max-width: 600px)': {
              marginLeft: "3%"
            }
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

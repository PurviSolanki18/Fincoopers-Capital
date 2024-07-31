"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', overflowX: 'hidden' }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Left side grid */}
          <Grid item>
            <Grid container spacing={1} alignItems="center" sx={{
              marginLeft: { xs: 0, sm: 0, md: 4 },
              alignItems: { md: "center",xs:"start" },
              flexDirection: { xs: "row", md: "row" },
            
            }}>
              <Grid item>
                <Button sx={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                  <TranslateOutlinedIcon sx={{ marginRight: {md:1,xs:0.5}, height: "16.17px", width: { xs: "12px", sm: "15px", md: "17.22px" }, }} />
                  <Typography variant="body2" sx={{ fontStyle: "Poppins", color: "#2E2E2E", fontSize: "11px", fontWeight: 300, lineHeight: "24px" }}>EN</Typography>
                </Button>
              </Grid>
              <Grid item>
                <WatchLaterOutlinedIcon sx={{ width: {md:"20px",xs:"10px"}, height: "20px" }} />
              </Grid>
              <Grid item>
                <Typography sx={{ fontStyle: "Poppins", color: "#2E2E2E", fontSize: "11px", fontWeight: 300, lineHeight: "24px" }} variant="body2" >Mon-Fri 10:00 AM to 08:00 PM</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems="center" sx={{
                  flexDirection: { xs: "row", md: "row" }
                }}>
                  <Grid item>
                    <CallOutlinedIcon sx={{ width: "16.25px", height: "15.42px" }} />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontStyle: "Poppins", color: "#2E2E2E", fontSize: "11px", fontWeight: 300, lineHeight: "24px" }} variant="body2">+91 9876543210</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Right side grid */}
          <Grid item >
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{
                marginRight: { xs: 0, sm: 0, md: 7 },
                marginLeft: { xs: 2 },
              }}
            >
              <Grid item>
                <EmailOutlinedIcon sx={{ width: { xs: "15px", sm: "15px", md: "17.22px" } }} />
              </Grid>
              <Grid item>
                <Typography sx={{ fontStyle: "Poppins", color: "#2E2E2E", fontSize: "11px", fontWeight: 300, lineHeight: "24px" }} variant="body2">customercare@fincoopers.com</Typography>
              </Grid>
              <Grid item>
                <FacebookOutlinedIcon sx={{ width: "17.22px", height: "16.17px" }} />
              </Grid>
              <Grid item>
                <InstagramIcon sx={{ width: "17.22px", height: "16.17px" }} />
              </Grid>
              <Grid item>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" style={{ width: "17.22px", height: "16.17px" }}>
                  <path
                    fill="currentColor"
                    d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205c.806.52 1.74.598 2.226.598c.118 0 .213-.006.279-.01c0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727c0 3.516 3.861 3.695 4.636 3.695c.061 0 .097-.002.097-.002c.008 0 .063.002.158.002c.497 0 1.782-.062 2.975-.643c1.548-.75 2.333-2.059 2.333-3.885c0-1.764-1.196-2.814-2.069-3.582c-.533-.469-.994-.873-.994-1.266c0-.4.337-.701.762-1.082c.689-.615 1.339-1.492 1.339-3.15c0-1.457-.189-2.436-1.354-3.057c.121-.062.551-.107.763-.137c.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389m7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574c-1.835.135-3.345-.691-3.433-2.096c-.043-.676.254-1.336.835-1.863c.589-.533 1.398-.863 2.278-.928c.104-.006.207-.012.31-.012c1.699.001 2.849.999 2.932 2.325M8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 0 1-.384.052c-.994 0-1.979-1.006-2.345-2.393c-.204-.776-.187-1.458.047-2.112c.229-.645.643-1.078 1.163-1.225c.125-.035.254-.053.385-.053c1.2 0 1.972.498 2.45 2.178M16 8V5h-2v3h-3v2h3v3h2v-3h3V8z"
                  ></path>
                </svg>
              </Grid>
              <Grid item >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ width: "17.22px", height: "16.17px" }}>
                  <path
                    fill="currentColor"
                    d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z"
                  ></path>
                </svg>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;

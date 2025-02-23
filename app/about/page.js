"use client"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '@/components/Navbar';
import Header from '../../components/Header';
import Typewriter from '@/components/TypeWriter';
import { Typography, Button, Grid, Box, Divider, CardActions } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Footer from '../../components/Footer'
import TimeLine from '../../components/TimeLine'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  return (
    <div>
      <Header />
      <Navbar />
      <Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            py: 1,
            width: '100%',
            position: 'relative',
            marginTop:{xs:"6%"}
          }}
        >
          {/* Background image */}
          <div
            style={{
              position: 'absolute',
              top: 200,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('../assets/bg1.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
            }}
          />

          {/* Content Grid */}
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginLeft: '8%' }}>
                <Typography variant="h4" sx={{textDecoration:"underline", color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '25px' },  fontWeight: 600, marginBottom: '1rem' }}>
                  About
                </Typography>
             
                <Typography variant="body1" sx={{ fontWeight:400,fontFamily: "Poppins", color: '#2E2E2E', fontSize: { xs: '20px', md: '35px' }, marginBottom: '1rem' }}>
                Welcome to <span style={{ color: "#0087C0" ,fontWeight:600}}>Fincoopers Capital </span>
                Private Limited
                </Typography>

                <Button
                  sx={{
                    display: { xs: 'inline-flex', md: 'inline-flex' },
                    marginRight: 7,
                    fontWeight: 700
                  }}
                  variant="outlined"
                  startIcon={<ExitToAppIcon />}
                  href='/connect'
                >
                  
                  Connect
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src='../assets/image 22.png' alt='handShake' style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
          </Grid>

          </Grid>
           
          <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" ,px:"5%"}}>
          <Grid item xs={12} md={6}>
          <Typography sx={{color:"#F25353",fontWeight:500,fontSize:"35px",fontFamily:"Poppins"}}>Integrity.<span style={{color:"#494949",fontWeight:500,fontSize:"35px",fontFamily:"Poppins"}}> Innovation. Excellence 
          in</span><span style={{color:"#0087C0",fontWeight:500,fontSize:"35px",fontFamily:"Poppins"}}> Financial Services.</span></Typography>
          <Divider sx={{ width: "155px", height: "11px", backgroundColor: "#0087C0" }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginTop:"7%",display: 'flex', flexDirection: 'column',width:"400px" }}>  
            <Divider sx={{height:"3px",backgroundColor:"#0087C0"}}/>
            <Typography sx={{marginTop:"2%",fontFamily:"Poppins",fontSize:"14px",fontWeight:300,color:"#2E2E2E"}}>Our journey began with a vision to redefine the landscape of financial services by combining cutting-edge technology with personalized customer service. Since our inception, we have stayed true to our core values of integrity, transparency, and excellence, earning the trust and loyalty of our clients along the way.</Typography> 
          </Grid>
        </Grid>
       
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center",px:"5%" }}>
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>  
            <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '24px', md: '35px' }, fontWeight: 500, lineHeight: "50px",color:"#494949" }}>Our Vision</Typography>
            <Divider sx={{ width: "155px", height: "6px", backgroundColor: "#0087C0" }} />
            <Typography sx={{marginTop:"4%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '14px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>Fincoopers India is working under BC Model and is focused on lending and providing financial services to rural customers across the country.</Typography><br></br>
            <Typography sx={{color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '14px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>We offer competitive rates, friendly customer service, and have the knowledge to match your needs.</Typography><br></br>
             <Typography sx={{color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '14px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>We're focused on rural India, so if you're looking for a lender who can provide the personal attention you need, then come to Fincoopers India!</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src='../assets/image 17.png' alt="homecom" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center",px:"5%" }}>
          <Grid item xs={12} md={6}>
            <img src='../assets/image 16.png' alt="homecom" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>  
            <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '24px', md: '35px' }, fontWeight: 500, lineHeight: "50px",color:"#494949" }}>Our Mission</Typography>
            <Divider sx={{ width: "155px", height: "6px", backgroundColor: "#0087C0" }} />
            <Typography sx={{marginTop:"4%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '14px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>With a long-standing problem of lack of access to credit for the rural population, we have created a market place where NBFCs and Rural customers can connect with each other.</Typography><br></br>
            <Typography sx={{color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '14px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>We use technology to help ensure transparency and accountability. The platform is designed with the objective of providing a solution for the rural sector by giving them access to loan and system process with ease.</Typography>
          </Grid>
        </Grid>
        <Grid>
        {/* <TimeLine/> */}
        </Grid>

        <Footer/>
      </Grid>
    </div>
  );
}

export default HomePage;

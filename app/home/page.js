"use client"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '@/components/Navbar';
import Header from '../../components/Header';
import Typewriter from '@/components/TypeWriter';
import { Typography, Button, Grid, Box, Divider } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';

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
  const gridContainerStyle = {
    background: `url('../assets/circle.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '20px',
    flexGrow: 1,
    height: 'auto', 
    paddingTop:"3%"
  };
  
  const gridItemStyle = {
    backgroundColor: 'transparent',
    padding: '20px',
    borderRadius: '10px',
  };
  const statistics = [
    {
      number: "300,000+",
      title: "Loans Disbursed"
    },
    {
      number: "14,800+",
      title: "Pincodes"
    },
    {
      number: "19,000+ Cr",
      title: "Amount Disbursed till date"
    },
    {
      number: "4,100+",
      title: "Cities & Towns"
    }
  ];
  return (
    <div>
      <Header />
      <Navbar />
      <Grid
        container
        direction="column"
        // justifyContent="center"
        alignItems="center"
        sx={{
          py: 5,
          width: '100%',
          backgroundImage: `url('../assets/bg1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ marginLeft: '8%' }}>
              <Typography variant="h4" sx={{ fontFamily: "Mukta", fontSize: { xs: '1.5rem', md: '2.5rem' }, color: 'black', fontWeight: 700, marginBottom: '1rem' }}>
                Empowering Your Financial
                Future with Every<Typewriter text=" Click! " delay={150} infinite />
              </Typography>
              <Typography variant="body1" sx={{ color: '#2E2E2E', fontSize: { xs: '0.875rem', md: '14px' }, marginBottom: '1rem' }}>
                Welcome to <span style={{ color: "#0087C0" }}>Fincoopers Capital</span>, where we believe in transforming dreams into reality for rural communities. We specialize in providing accessible loans tailored to your needs, ensuring minimal interest rates and maximum support.
              </Typography>

              <Button
                sx={{
                  display: { xs: 'inline-flex', md: 'inline-flex' },
                  marginRight: 7,
                  fontWeight: 700
                }}
                variant="outlined"
                startIcon={<ExitToAppIcon />}
              >
                Explore
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <img src='../assets/2ndimgs.gif' alt='handShake' style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center",paddingTop:"9%",paddingBottom:"5%" }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: '11px',
                borderColor: '#0087C0',
                boxShadow: `2px 2px 2px 2px rgba(0, 135, 192, 0.5)`,
                width: { xs: '100%', md: '579px' },
                marginLeft: { xs: 0, md: '10%' },
                marginBottom: { xs: '20px', md: 0 },
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '16px',
                }}
              >
                {statistics.map((statistic, index) => (
                  <Grid key={index} style={{ flex: '0 0 48%', margin: '1%' }}>
                    <Typography
                      sx={{
                        marginLeft: "10%",
                        fontFamily: "Poppins",
                        fontSize: "35px",
                        lineHeight: "50px",
                        fontWeight: 500,
                        color: "#494949",
                        '@media (max-width: 600px)': {
                          fontSize: "22px",
                          lineHeight: "35px",
                          marginTop: "7%"
                        }
                      }}
                    >
                      {statistic.number}
                    </Typography>
                    <Typography
                      sx={{
                        marginLeft: "10%",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        lineHeight: "22px",
                        fontWeight: 500,
                        color: "#494949",
                        '@media (max-width: 600px)': {
                          fontSize: "12px",
                          lineHeight: "15px",

                        }
                      }}
                    >
                      {statistic.title}
                    </Typography>
                  </Grid>
                ))}

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item marginLeft="15%">
              <Typography sx={{ fontSize: "35px", fontStyle: "Poppins", fontWeight: 700, color: "#494949", marginLeft: 5 }}>We have</Typography>
              {/* <Grid sx={{backgroundImage: `url('../assets/Ellipse.png')`,}}> */}
              <Typography sx={{
                backgroundImage: `url('../assets/Ellipse.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                fontSize: "35px",
                fontStyle: "Poppins",
                fontWeight: 700,
                color: "#0087C0",
                paddingLeft: "12px"
              }}>Grown businesses</Typography>
              {/* </Grid>            */}
              <Typography sx={{ fontSize: "35px", fontStyle: "Poppins", fontWeight: 700, color: "#494949", marginLeft: 5 }}>and still counting</Typography>
              <Divider sx={{ width: "95px", height: "7px", backgroundColor: "#0087C0", marginLeft: 2 }} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={gridContainerStyle} >
        <Grid item xs={12} md={4}>
          <Grid style={gridItemStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src='../assets/image 4.png' alt='watch' style={{ marginRight: '10px', maxWidth: '50px', height: 'auto' }} />
              <Typography variant="body1" sx={{ flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '18px', md: '24px' }, fontWeight: 500, lineHeight: { xs: '30px', md: '50px' } }}>On Time<br /><span style={{ color: "#0087C0" }}>Service</span></Typography>
            </div>
            <Typography variant="body2" sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px" }}>
              Transforming distribution and marketing with key capabilities in customer insight and analytics.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid style={gridItemStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src='../assets/image 3.png' alt='watch' style={{ marginRight: '10px', maxWidth: '50px', height: 'auto' }} />
              <Typography variant="body1" sx={{ flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '18px', md: '24px' }, fontWeight: 500, lineHeight: { xs: '30px', md: '50px' } }}>A Team Of<br /><span style={{ color: "#0087C0" }}>Professionals.</span></Typography>
            </div>
            <Typography variant="body2" sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px" }}>
              Transforming distribution and marketing with key capabilities in customer insight and analytics.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid style={gridItemStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src='../assets/image 2.png' alt='watch' style={{ marginRight: '10px', maxWidth: '50px', height: 'auto' }} />
              <Typography variant="body1" sx={{ flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '18px', md: '24px' }, fontWeight: 500, lineHeight: { xs: '30px', md: '50px' } }}>Analyze Your<br /><span style={{ color: "#0087C0" }}>Business.</span></Typography>
            </div>
            <Typography variant="body2" sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px" }}>
              Transforming distribution and marketing with key capabilities in customer insight and analytics.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
        <Grid item xs={12} md={6}>
          <img src='../assets/homecom.gif' alt="homecom" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{
            backgroundImage: `url('../assets/Ellipse.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            fontSize: { xs: "25px", md: "35px" },
            fontFamily: "Poppins",
            lineHeight: { xs: "30px", md: "50px" },
            fontWeight: 500,
            color: "#494949",
            paddingLeft: { xs: "8px", md: "12px" }
          }}><span style={{ color: "#F25353" }}>Click</span> for Your</Typography>

          <Typography sx={{ fontSize: { xs: "25px", md: "35px" }, fontFamily: "Poppins", fontWeight: 500, color: "#494949", marginLeft: { xs: "8px", md: "2px" } }}>Financial Future</Typography>
          <Divider sx={{ width: "95px", height: "7px", backgroundColor: "#0087C0", marginLeft: { xs: "8px", md: "2px" } }} />

          <Box sx={{ width: '100%', marginTop: { xs: "3%", md: "5%" } }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "14px", md: "20px" }, lineHeight: { xs: "30px", md: "50px" } }} label="Micro Lap" {...a11yProps(0)} />
              <Tab sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "14px", md: "20px" }, lineHeight: { xs: "30px", md: "50px" } }} label="Lap" {...a11yProps(1)} />
              <Tab sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "14px", md: "20px" }, lineHeight: { xs: "30px", md: "50px" } }} label="Unsecured/Personal Loan" {...a11yProps(2)} />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
              <div style={{ display: 'flex' }}>
                <img src='../assets/image 5.png' alt='watch' style={{ marginRight: '10px', maxWidth: '37px', height: '37px' }} />
                <Typography variant="body1" sx={{ color: "#2E2E2E", flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '12px', md: '14px' }, fontWeight: 300, lineHeight: "22px" }}>Micro Loans Against Property are provided to customers who don't have any documented income. The loan amount ranges from ₹3,00,000 to ₹15,00,000 and are secured against the property, which is offered as collateral.</Typography>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Lap Content
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Personal loan Content
            </CustomTabPanel>
          </Box>
          <Button
            sx={{
              marginTop: { xs: "4%", md: "6%" },
              fontWeight: 500,
              fontSize: { xs: "10px", md: "14px" },
              lineHeight: "24px",
              fontFamily: "Poppins",
              width:"170px"
            }}
            variant="outlined"
          >
            Check Eligibility
          </Button>
        </Grid>
      </Grid>

      </Grid>
    </div>
  );
}

export default HomePage;

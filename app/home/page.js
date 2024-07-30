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
import Carousel from '@/components/Carousel'

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
  const items = [
    { title: "Micro Lap", image: "../assets/image 11.png" },
    { title: "Lap", image: "../assets/image 12.png" },
    { title: "Two Wheeler Loan", image: "../assets/image 13.png" },
    { title: "Farm Equipment Loan", image: "../assets/image 14.png" },
    { title: "Unsecured/ Personal Loan", image: "../assets/image 15.png" },
  ];

  const gridStyle = {
    width: "180px",
    height: "220px",
    backgroundColor: "#0087C017",
    border: "1px solid #0087C017",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    padding: "15px",
    marginTop: "18%",
  };
  const imageStyle = {
    width: "60%",
    height: "auto",
    marginTop: "10px",
  };

  const textStyles = {
    paddingTop: "7%",
    fontSize: "20px",
    fontWeight: 400,
    color: "#494949",
    fontFamily: "Poppins",
    lineHeight: "24px",
    width: "75%"
  };

  const gridContainerStyle = {
    background: `url('../assets/circle.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '70px',
    flexGrow: 1,
    height: 'auto',
    paddingTop: "3%"
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

  const PrettoSlider = styled(Slider)({
    color: '#0087C0',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#0087C0',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });


  const [loanAmount, setLoanAmount] = React.useState(1000);
  const [loanDuration, setLoanDuration] = React.useState(6);

  const monthlyInterestRate = 0.01;

  const monthlyInterestFactor = Math.pow(1 + monthlyInterestRate, loanDuration);
  const emi = (loanAmount * monthlyInterestRate * monthlyInterestFactor) / (monthlyInterestFactor - 1);
  const totalPayable = loanAmount * monthlyInterestFactor;

  const handleLoanAmountChange = (event, newValue) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setLoanAmount(value);
    }
  };

  const handleLoanDurationChange = (event, newValue) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setLoanDuration(value);
    }
  };

  const handleCheckButton = () => {

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
            py: 5,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Background image */}
          <div
            style={{
              position: 'absolute',
              top: 300,
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
              <Box sx={{ marginLeft: '11%' }}>
                <Typography variant="h4" sx={{ color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '2.5rem' }, color: 'black', fontWeight: 700, marginBottom: '1rem' }}>
                  Empowering Your Financial
                  Future with Every<Typewriter text=" Click! " delay={150} infinite />
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: "Poppins", color: '#2E2E2E', fontSize: { xs: '0.875rem', md: '14px' }, marginBottom: '1rem' }}>
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
              <img src='../assets/farmer.jpeg' alt='handShake' style={{ maxWidth: '90%', height: 'auto' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", paddingTop: "9%", paddingBottom: "5%" }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              minWidth: 275,
              borderRadius: '11px',
              borderColor: '#0087C0',
              boxShadow: `2px 2px 2px 2px rgba(0, 135, 192, 0.5)`,
              width: { xs: '200px', md: '545px' },
              marginLeft: { xs: '6%', md: '10%' },
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
                        fontSize: "18px",
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
            <Typography sx={{ fontSize: { md: "35px", xs: '20px' }, fontFamily: "Poppins", fontWeight: 700, color: "#494949", marginLeft: 5 }}>We have</Typography>

            <Typography sx={{
              backgroundImage: `url('../assets/Ellipse.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              fontSize: { md: "35px", xs: '20px' },
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "#0087C0",
              paddingLeft: "12px"
            }}>Grown businesses</Typography>

            <Typography sx={{ fontSize: { md: "35px", xs: '20px' }, fontFamily: "Poppins", fontWeight: 700, color: "#494949", marginLeft: 5 }}>and still counting</Typography>
            <Divider sx={{ width: "95px", height: "7px", backgroundColor: "#0087C0", marginLeft: 2 }} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={gridContainerStyle} >
        <Grid item xs={12} md={4} sx={{ height: { xs: 'auto', md: '310px' } }}>
          <Grid style={gridItemStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src='../assets/image 4.png' alt='watch' style={{ marginRight: '10px', maxWidth: '50px', height: 'auto' }} />
              <Typography variant="body1" sx={{ flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '18px', md: '24px' }, fontWeight: 500, lineHeight: { xs: '30px', md: '50px' } }}>On Time<br /><span style={{ color: "#0087C0" }}>Service</span></Typography>
            </div>
            <Typography variant="body2" sx={{ marginLeft: "15%", width: "72%", fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px" }}>
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
            <Typography variant="body2" sx={{ marginLeft: "18%", width: "72%", fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px" }}>
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
            <Typography variant="body2" sx={{ marginLeft: "15%", width: "72%", fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px" }}>
              Transforming distribution and marketing with key capabilities in customer insight and analytics.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", margin: { md: '3%' }, overflowX: 'hidden' }}>
        <Grid item xs={12} md={4} sx={{ width: '100%' }}>
          <img src='../assets/farmer2.jpeg' alt="homecom" style={{ width: '100%', height: 'auto', marginLeft: { md: '3%' } }} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
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

          <Typography sx={{ paddingLeft: { xs: "8px", md: "12px" }, fontSize: { xs: "25px", md: "35px" }, fontFamily: "Poppins", fontWeight: 500, color: "#494949", marginLeft: { xs: "8px", md: "2px" } }}>Financial Future</Typography>
          <Divider sx={{ width: "95px", height: "7px", backgroundColor: "#0087C0", marginLeft: { xs: "8px", md: "12px" } }} />

          <Box sx={{ width: '100%', marginTop: { xs: "3%", md: "5%" }, overflowX: 'hidden' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab
                sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "10px", md: "16px" }, lineHeight: { xs: "30px", md: "50px" } }}
                label="Micro Lap"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "10px", md: "16px" }, lineHeight: { xs: "30px", md: "50px" } }}
                label="Lap"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "10px", md: "16px" }, lineHeight: { xs: "30px", md: "50px" } }}
                label="Unsecured/Personal Loan"
                {...a11yProps(2)}
              />
              <Tab
                sx={{ fontFamily: "Poppins", fontWeight: 500, fontSize: { xs: "10px", md: "16px" }, lineHeight: { xs: "30px", md: "50px" } }}
                label="Two Wheeler"
                {...a11yProps(3)}
              />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
              <Box sx={{ display: 'flex', width: "100%" }}>
                <img
                  src='../assets/image 5.png'
                  alt='watch'
                  style={{ marginRight: '10px', maxWidth: '37px', height: '37px' }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "#2E2E2E", flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '12px', md: '14px' }, fontWeight: 300, lineHeight: "22px" }}
                >
                  Micro Loans Against Property are provided to customers who don't have any documented income. The loan amount ranges from ₹3,00,000 to ₹15,00,000 and are secured against the property, which is offered as collateral.
                </Typography>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Lap Content
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Personal loan Content
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Two Wheeler Content
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>


      <Grid container
        sx={{
          alignItems: 'center',
          paddingTop: '5%',
          paddingBottom: '5%',
          backgroundImage: `url('../assets/bg.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          width: "100%"
        }}>
        <Grid sx={{ paddingLeft: "15%" }}>
          <Typography sx={{ textAlign: "center", fontSize: "35px", fontFamily: "Poppins", fontWeight: 500, color: "#494949", lineHeight: "50px" }}>Our Offerings</Typography>
          <Divider sx={{ width: "165px", height: "7px", backgroundColor: "#0087C0", margin: "20px auto" }} />

          <Grid >
            <Grid container spacing={2}>
              {items.map((item, index) => (
                <Grid item key={index} >
                  <div style={gridStyle}>
                    <Typography style={textStyles}>{item.title}</Typography>
                    <img src={item.image} style={imageStyle} alt={item.title} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", paddingTop: "9%", paddingBottom: "5%" }}>

          <Grid item xs={12} md={6} width="70%" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item marginLeft="15%" width="70%">

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
              }}>All about your </Typography>

              <Typography sx={{ fontSize: "35px", fontFamily: "Poppins", fontWeight: 700, color: "#F25353", marginLeft: 2 }}>EMI</Typography>
              <Divider sx={{ width: "184px", height: "7px", backgroundColor: "#0087C0", marginLeft: 2 }} />
              <Grid sx={{ marginLeft: "4%" }}>
                <Typography variant="body1" sx={{ marginTop: "7%", color: "#2E2E2E", flexGrow: 1, fontFamily: "Poppins", fontSize: { xs: '12px', md: '14px' }, fontWeight: 300, lineHeight: "22px" }}>Starting at 1% monthly reducing interest rate. Apply now to know your exact EMI & interest rate</Typography>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: '11px',
                borderColor: '#0087C0',
                boxShadow: `2px 2px 2px 2px rgba(0, 135, 192, 0.5)`,
                width: {xs:"80%",md:"100%"},
                maxWidth: '550px',
                marginBottom: { xs: '20px', md: 0 },
                padding: '20px',
                marginLeft:{xs: '9%', md: 0}
              }}
            >
              <CardContent>
                <Typography sx={{ color: '#494949', fontWeight: 400, fontSize: '24px', lineHeight: '30px', fontFamily: 'Poppins' }}>
                  Required loan amount: ₹ {loanAmount}
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={loanAmount}
                  onChange={handleLoanAmountChange}
                  min={1000}
                  max={100000}
                />
                <Typography sx={{ color: '#494949', fontWeight: 400, fontSize: '24px', lineHeight: '30px', fontFamily: 'Poppins' }}>
                  Required loan duration: {loanDuration} months
                </Typography>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={loanDuration}
                  onChange={handleLoanDurationChange}
                  min={6}
                  max={60}
                />
                <Grid container sx={{ marginTop: '20px' }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ color: '#494949', fontWeight: 300, fontSize: '18px', lineHeight: '30px', fontFamily: 'Poppins' }}>
                      Total payable*:
                    </Typography>
                    <Typography sx={{ color: '#494949', fontWeight: 500, fontSize: '24px', lineHeight: '30px', fontFamily: 'Poppins' }}>
                      ₹ {totalPayable.toFixed(2)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{ color: '#494949', fontWeight: 300, fontSize: '18px', lineHeight: '30px', fontFamily: 'Poppins' }}>
                      EMI installment*:
                    </Typography>
                    <Typography sx={{ color: '#494949', fontWeight: 500, fontSize: '24px', lineHeight: '30px', fontFamily: 'Poppins' }}>
                      ₹ {emi.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              
            </Card>
          </Grid>

        </Grid>


      </Grid>

      {/* <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <img src='../assets/image 16.png' alt="homecom" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '35px' }, fontWeight: 500, lineHeight: "50px",color:"#494949" }}>Our Mission</Typography>
            <Divider sx={{ width: "155px", height: "6px", backgroundColor: "#0087C0" }} />
            <Typography>With a long-standing problem of lack of access to credit for the rural population, we have created a market place where NBFCs and Rural customers can connect with each other.</Typography>
            <Typography>We use technology to help ensure transparency and accountability. The platform is designed with the objective of providing a solution for the rural sector by giving them access to loan and system process with ease.</Typography>
          </Grid>
        </Grid> */}

      <Carousel />
      <Footer />

    </div>
  );
}

export default HomePage;

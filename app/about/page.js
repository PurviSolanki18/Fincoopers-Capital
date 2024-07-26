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
    { title: "Home Loan", image: "../assets/image 11.png" },
    { title: "Personal Loan", image: "../assets/image 12.png" },
    { title: "Wheeler Loan", image: "../assets/image 13.png" },
    { title: "Farm Equipment Loan", image: "../assets/image 14.png" },
    { title: "Micro Loan", image: "../assets/image 15.png" },
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
    paddingTop: "5%",
    fontSize: "24px",
    fontWeight: 400,
    color: "#494949",
    fontFamily: "Poppins",
    lineHeight: "30px",
    width: "70%"
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
            py: 1,
            width: '100%',
            position: 'relative',
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
            <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '35px' }, fontWeight: 500, lineHeight: "50px",color:"#494949" }}>Our Vision</Typography>
            <Divider sx={{ width: "155px", height: "6px", backgroundColor: "#0087C0" }} />
            <Typography sx={{marginTop:"4%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>Fincoopers India is working under BC Model and is focused on lending and providing financial services to rural customers across the country.</Typography><br></br>
            <Typography sx={{color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>We offer competitive rates, friendly customer service, and have the knowledge to match your needs.</Typography><br></br>
             <Typography sx={{color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>We're focused on rural India, so if you're looking for a lender who can provide the personal attention you need, then come to Fincoopers India!</Typography>
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
            <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '35px' }, fontWeight: 500, lineHeight: "50px",color:"#494949" }}>Our Mission</Typography>
            <Divider sx={{ width: "155px", height: "6px", backgroundColor: "#0087C0" }} />
            <Typography sx={{marginTop:"4%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>With a long-standing problem of lack of access to credit for the rural population, we have created a market place where NBFCs and Rural customers can connect with each other.</Typography><br></br>
            <Typography sx={{color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '14px' }, fontWeight: 300, lineHeight: "22px",}}>We use technology to help ensure transparency and accountability. The platform is designed with the objective of providing a solution for the rural sector by giving them access to loan and system process with ease.</Typography>
          </Grid>
        </Grid>
        <Footer/>
      </Grid>
    </div>
  );
}

export default HomePage;

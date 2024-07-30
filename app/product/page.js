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
import CardSlider from '@/components/CardSlider'

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
const cardData = [
    { title: 'LAP (Loan Against Property)', description: 'Ideal for both individuals and businesses, this loan allows you to leverage your property as collateral to secure funds for expansion, renovations, or any major financial need.' },
    { title: 'Micro LAP', description: 'For small-scale needs with a big impact, our Micro LAP offers a streamlined process and flexible terms.' },
    { title: 'Two Wheeler Loan', description: 'With easy approval and competitive rates, getting on your new bike has never been easier.' },
    { title: 'Farm Equipment Loan', description: 'Boost your agricultural productivity with our Farm Equipment Loan. Whether you’re investing in new machinery or upgrading existing equipment,' },
    { title: 'Secured/Unsecured', description: 'you can access substantial funding with competitive interest rates and flexible terms. Ideal for large investments or major financial needs.' },
    { title: 'Personal Loan', description: 'No collateral is required—just a straightforward application process and flexible repayment options to help you manage expenses, consolidate debt, or fund personal projects.' },
  ];

const HomePage = () => {

 

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
              <Box sx={{ marginLeft: '8%' }}>
              <Typography variant="h4" sx={{textDecoration:"underline", color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '25px' },  fontWeight: 600, marginBottom: '1rem' }}>
                  Product
                </Typography>
                <Typography variant="h4" sx={{ color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '35px' },  fontWeight: 600, marginBottom: '1rem' }}>
                Empowering Your Dreams with 
                Tailored <span style={{color:"#0087C0"}}>Financial Solutions</span>
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: "Poppins", color: '#2E2E2E', fontSize: { xs: '0.875rem', md: '14px' }, marginBottom: '1rem' }}>
                At Fincoopers Capital, we offer tailored financial solutions to meet your needs, from business expansion and equipment acquisition to personal expense management, with a variety of flexible loan products.
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
                  Apply
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src='../assets/2ndimgs.gif' alt='handShake' style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
          </Grid>

          <Grid>
          <Typography sx={{marginTop:"8%", textAlign: "center", fontSize: "35px", fontFamily: "Poppins", fontWeight: 500, color: "#494949", lineHeight: "50px" }}>Our Top <span style={{color:"#0087C0"}}>Offerings</span> Loan </Typography>
          </Grid>
          <CardSlider/>
        </Grid>
       
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center",px:"5%" }}>
        <Grid item xs={12} md={6}>
            <img src='../assets/image 30.png' alt="homecom" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column'}}>  
            <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '14px', md: '35px' }, fontWeight: 500, lineHeight: "50px",color:"#494949" }}>Why Choose 
            <span style={{color:"#0087C0"}}> Fincoopers  Capital?</span></Typography>
           
            <Typography sx={{width:"98%",marginTop:"4%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '16px' }, fontWeight: 300, lineHeight: "22px",}}><span style={{color:"#2E2E2E",fontWeight: 500,}}>Tailored Solutions:</span> We understand that every financial need is unique. Our range of loan products is designed to cater to diverse requirements with customized solutions.</Typography><br></br>
            <Typography sx={{width:"98%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '16px' }, fontWeight: 300, lineHeight: "22px",}}><span style={{color:"#2E2E2E",fontWeight: 500,}}>Quick and Easy Process:</span> Simplified application procedures and fast approvals mean you get the funds you need when you need them.</Typography><br></br>
            <Typography sx={{width:"98%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '16px' }, fontWeight: 300, lineHeight: "22px",}}><span style={{color:"#2E2E2E",fontWeight: 500,}}>Expert Support:</span> Our dedicated team of financial experts is here to guide you through every step of the process, ensuring a smooth and informed experience.</Typography>
            <Typography sx={{width:"98%",color:"#2E2E2E",fontFamily: "Poppins", fontSize: { xs: '10px', md: '16px' }, fontWeight: 300, lineHeight: "22px",}}><span style={{color:"#2E2E2E",fontWeight: 500,}}>Competitive Rates:</span> Benefit from attractive interest rates and flexible repayment terms that suit your budget.</Typography><br></br>
          </Grid>
        
        </Grid>

        <Grid container spacing={4} sx={{ marginBottom: '2rem' ,padding:"3%"}}>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'center', fontSize: '35px', fontFamily: 'Poppins', fontWeight: 500, color: '#494949', lineHeight: '50px' }}>
            Our <span style={{ color: '#0087C0' }}>Loan</span> Offerings
          </Typography>
        </Grid>
        {cardData.map((card, index) => (
         <Grid xs={12} sm={4} key={index} padding="3%">
         <Card item elevation={0} sx={{textAlign:"start", maxWidth: 345, margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
           <CardContent sx={{ flexGrow: 1 , height:"220px" }}>
             <Typography variant="h6" sx={{marginBottom:"2%",color:"#494949", fontSize:"24px", fontWeight:500, fontFamily:"Poppins"}}>
               {card.title}
             </Typography>
             <Typography variant="body2" sx={{width:"85%",color:"#494949", fontSize:"14px", fontWeight:300, fontFamily:"Poppins", lineHeight:"22px"}}>
               {card.description}
             </Typography>
           </CardContent>
           <Button variant="outlined" sx={{ margin: '1rem',  marginBottom: '1rem' ,width:"50%"}}>
             <Typography sx={{fontWeight:500, fontSize:"14px", fontFamily:"Poppins"}}>Now More</Typography>
           </Button>
         </Card>
       </Grid>
       
        ))}
      </Grid>
        

        <Footer/>
      </Grid>
    </div>
  );
}

export default HomePage;

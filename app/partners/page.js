"use client"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '@/components/Navbar';
import Header from '../../components/Header';
import Typewriter from '@/components/TypeWriter';
import { Typography, Button, Grid, Box, Divider, CardActions, TextField, CardActionArea } from '@mui/material';
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
                                <Typography variant="h4" sx={{ textDecoration: "underline", color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '25px' }, fontWeight: 600, marginBottom: '1rem' }}>
                                Partners 
                                </Typography>
                                <Typography variant="h4" sx={{ color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '35px' }, fontWeight: 600, marginBottom: '1rem' }}>
                                Grow your business as a 
                                 <span style={{ color: "#0087C0" }}> Fincoopers Capital </span>partner
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Poppins", color: '#2E2E2E', fontSize: { xs: '0.875rem', md: '14px' }, marginBottom: '1rem' }}>
                                Let’s work together. Join our community of partners to better serve mutual customers, build a win-win-win situation, and grow your business.
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
                    <Grid sx={{ marginTop: "5%" }}>
                        <Typography sx={{ textAlign: 'center', fontSize: {md:'35px',xs:"24px"},marginTop:{xs:5}, fontFamily: 'Poppins', fontWeight: 500, color: '#494949', lineHeight: '50px' }}>
                            Trusted by top-performing <br></br>
                            partnership teams
                        </Typography>
                        <Grid container spacing={2} sx={{ marginTop: "5%" }} justifyContent="center" alignItems="center">
                            <Grid item xs={4}>
                                <img src='../assets/Group 13.png' alt='partner' style={{ width: '100%' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <img src='../assets/image 27.png' alt='partner' style={{ width: '100%' }} />
                            </Grid>
                            <Grid item xs={4}>
                                <img src='../assets/image 28.png' alt='partner' style={{ width: '80%', height: "auto" }} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", px: "5%",marginTop:{md:"4%"} }}>
                    <Grid item xs={12} md={6}>
                        <img src='../assets/image 25.png' alt="homecom" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '24px', md: '35px' }, fontWeight: 500, lineHeight: "50px", color: "#494949" }}>Unlock Opportunities with
                            <span style={{ color: "#0087C0" }}> Fincoopers  Capital?</span></Typography>

                        <Typography sx={{ width: "98%", marginTop: "4%", color: "#2E2E2E", fontFamily: "Poppins", fontSize: { xs: '14px', md: '16px' }, fontWeight: 300, lineHeight: "22px", }}>At Fincoopers Capital, we’re dedicated to empowering mid-cap businesses in rural areas with the financial support they need to grow and thrive. Our unique approach to lending not only fuels the success of these businesses but also offers substantial benefits to our partners.</Typography><br></br>

                    </Grid>

                </Grid>

                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{marginTop:{md:"5%"}}}>
                    <Grid item xs={12} md={8}>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, lineHeight: "50px", color: "#494949", textAlign: 'center' }}>
                            <span style={{ color: "#0087C0" }}>BECOME A PARTNER</span>
                        </Typography>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: '20px', md: '24px' }, fontWeight: 500, lineHeight: "50px", color: "#494949", textAlign: 'center' }}>
                            Together we can go farther
                        </Typography>

                        <Card
                            sx={{
                                minWidth: 275,
                                borderRadius: '11px',
                                borderColor: '#0087C0',
                                boxShadow: `2px 2px 2px 2px rgba(0, 135, 192, 0.5)`,
                                width: { xs: '200px', md: '545px' },
                                margin: { xs: '20px auto', md: '0' },
                                marginLeft:{md:"20%"},
                                padding: 2,
                                marginTop:{md:"5%"},
                                marginBottom:{md:"5%"},
                            }}
                        >
                            <CardContent sx={{ width: '100%' }}>
                                <Typography sx={{color:"#494949",fontFamily:"Poppins",fontSize:"14px",fontWeight:500,marginTop:"3%",marginBottom:"2%"}}>Company Name</Typography>
                                <TextField fullWidth id="outlined-basic" label="Company Name" variant="outlined" />
                                <Typography sx={{color:"#494949",fontFamily:"Poppins",fontSize:"14px",fontWeight:500,marginTop:"3%",marginBottom:"2%"}}>Authorized Name </Typography>
                                <TextField fullWidth id="outlined-basic" label="Authorized Name" variant="outlined" />
                                <Typography sx={{color:"#494949",fontFamily:"Poppins",fontSize:"14px",fontWeight:500,marginTop:"3%",marginBottom:"2%"}}>No. of Employee</Typography>
                                <TextField fullWidth id="outlined-basic" label="No. of Employee" variant="outlined" />
                                <Typography sx={{color:"#494949",fontFamily:"Poppins",fontSize:"14px",fontWeight:500,marginTop:"3%",marginBottom:"2%"}}>Why do you want to be our partner?</Typography>
                                <TextField fullWidth id="outlined-basic" label="Partner" variant="outlined" />
                            </CardContent>
                            <CardActionArea sx={{ marginBottom: "3%" }}>
                                <Button fullWidth variant="outlined" sx={{ backgroundColor: "#0087C066" }}>Apply for Partners</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>


                <Footer />
            </Grid>
        </div>
    );
}

export default HomePage;

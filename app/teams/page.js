"use client"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '@/components/Navbar';
import Header from '../../components/Header';
import Typewriter from '@/components/TypeWriter';
import { Typography, Button, Grid, Box, Divider, CardActions, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import Footer from '../../components/Footer'


const cardsData = [
    { id: 1,title:"Mr. Ketav Pipaliya MD & CEO", text: 'Mr. Ketav is a highly qualified professional with a Post Graduate degree in Commerce and Company Secretary certification (2013). With a decade of experience in the BFSI industry, he has notably served with NBFCs and HFCs. In 2019, he has a vision to emerge as India’s leading technology-driven FLDG backed BC partner, dedicated to serving the semi-urban and rural population. His expertise lies in merging financial services with innovative technology solutions, aiming to bridge the gap and enhance financial inclusion in underserved communities.', image: '../assets/team1.png' },
    { id: 2,title:"Mr. Sunil Sharma Founder & Promoter", text: 'A dynamic personality has a diploma in Financial Management from International Business Management Institute, Berlin also has more than 22 years of experience as Finance Consultant. He is engaged in business of two wheeler sales and services form past 20 years , he has Running NBFC  Genesis with a vision of serving customer through T/W & C/L loans .', image: '../assets/team2.png' },
    { id: 3,title:"Dr. Sharad Mittal Non Executive Director Strategic Advisor", text: 'With a strong foundation in education and a thriving career spanning 25 years in the Retail Lending industry, He bring a wealth of expertise to the table. His journey began with a BCom (H) followed by an MBA in Finance and culminated in a PhD in Finance, equipping him with a robust understanding of the financial landscape. His career has been a diverse tapestry, touching all facets of the retail lending spectrum. He have navigated the complexities of Credit Cards, Two Wheeler Loans, Four Wheeler Loans, Business Instalment Loans, Personal Loans, Home Loans, and Loan Against Property, building a comprehensive skill set. ', image: '../assets/team3.png' },
    { id: 4,title:"CA Mrs. Sonal Kadwane Director", text: 'Experienced banking professional and Chartered Accountant with over 5 years in finance. Proficient in audit, asset valuations, and risk assessment. Expertise in enhancing financial integrity and compliance. Seeking to leverage skills to optimize asset management and risk profiles, ensuring sustainable growth and regulatory adherence in the banking sector.', image: '../assets/team4.png' },
    { id: 5,title:"Mr. Chandulal Raotole Independent Director", text: 'He is Experienced Banker with over 32 years experience as a Branch Manager at Punjab National Bank. Proficient in audit, asset valuations, and risk assessment. Expertise in enhancing financial integrity and compliance. Seeking to leverage skills to optimize asset management and risk profiles, ensuring sustainable growth and regulatory adherence in the banking sector.', image: '../assets/team5.png' },
];

const CardComponent = ({ card }) => {
    const isOdd = card.id % 2 !== 0;

    return (
        <Card sx={{ width: '85%', marginBottom: '16px' ,marginLeft:"6%",marginRight:"5%",borderRadius:"47px",border:"1px solid #0087C0"}}>
            <CardContent sx={{margin:"2%"}}>
                <Grid container spacing={2}>
                    {isOdd ? (
                        <>
                            <Grid item xs={8}>
                            <Typography sx={{width:"30%",marginTop:"8%",  fontSize: "20px", fontFamily: "Poppins", fontWeight: 500, color: "#494949", lineHeight: "24px" }}>{card.title}</Typography>
                                <Typography sx={{marginTop:"8%",  fontSize: "14px", fontFamily: "Poppins", fontWeight: 300, color: "#494949", lineHeight: "22px" }}>{card.text}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <CardMedia
                                    component="img"
                                    image={card.image}
                                    height="60%"
                                    alt="image"
                                />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={4}>
                                <CardMedia
                                    component="img"
                                    height="60%"
                                    image={card.image}
                                    alt="image"
                                />
                            </Grid>
                            <Grid item xs={8}>
                            <Typography sx={{width:"30%",marginTop:"8%",  fontSize: "20px", fontFamily: "Poppins", fontWeight: 500, color: "#494949", lineHeight: "24px" }}>{card.title}</Typography>
                                <Typography sx={{marginTop:"8%",  fontSize: "14px", fontFamily: "Poppins", fontWeight: 300, color: "#494949", lineHeight: "22px" }}>{card.text}</Typography>
                            </Grid>
                        </>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

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
                                    Our Teams
                                </Typography>
                                <Typography variant="h4" sx={{ color: "#494949", fontFamily: "Poppins", fontSize: { xs: '1.5rem', md: '35px' }, fontWeight: 600, marginBottom: '1rem' }}>
                                    Your Partner in Financial

                                    <span style={{ color: "#0087C0" }}> Growth and Success.</span>
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: "Poppins", color: '#2E2E2E', fontSize: { xs: '0.875rem', md: '14px' }, marginBottom: '1rem' }}>
                                    At Fincoopers, we’re more than just a financial service provider—we’re your dedicated partner in achieving business success. Our commitment goes beyond providing loans; we strive to empower and support micro businesses every step of the way.
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src='../assets/2ndimgs.gif' alt='handShake' style={{ maxWidth: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid>
                        <Typography sx={{ marginTop: "8%", textAlign: "center", fontSize: "35px", fontFamily: "Poppins", fontWeight: 500, color: "#494949", lineHeight: "50px" }}>Meet Our <span style={{ color: "#0087C0" }}>Team</span></Typography>
                    </Grid>
                    <Grid container spacing={2} justifyContent="center">
                        {cardsData.map((card) => (
                            <Grid item xs={12} key={card.id}>
                                <CardComponent card={card} />
                            </Grid>
                        ))}
                    </Grid>

              





                <Footer />
            </Grid>
        </div>
    );
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import { Button, Divider, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Carousel = () => {
    const slides = [
        {
            title: "Micro LAP",
            description: "Our Micro LAP offers a streamlined process and flexible terms. Perfect for small businesses and individual entrepreneurs, this loan provides the financial boost needed to drive growth and success.",
            buttonText: "Know More"
        },
        {
            title: "Two Wheeler Loan",
            description: "Hit the road with confidence! Our Two Wheeler Loan helps you acquire the vehicle you need for personal or business use. With easy approval and competitive rates, getting on your new bike has never been easier.",
            buttonText: "Know More"
        },
        {
            title: "Home Loan",
            description: "Achieve your dream of owning a home with our Home Loan. Offering flexible repayment options and competitive interest rates, we make it easier for you to move into your new house.",
            buttonText: "Know More"
        },
        {
            title: "Personal Loan",
            description: "Get the financial freedom you need with our Personal Loan. With fast approval and flexible terms, you can use the funds for any purpose, whether it's a big purchase, home renovation, or unexpected expenses.",
            buttonText: "Know More"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + slides.length) % slides.length);
    };

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth > 960) {
                setSlidesToShow(3);
            } else if (window.innerWidth > 600) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        window.addEventListener('resize', updateSlidesToShow);
        updateSlidesToShow();

        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const visibleSlides = Array.from({ length: slidesToShow }, (_, i) => 
        slides[(currentIndex + i) % slides.length]
    );

    return (
        <section style={styles.carouselContainer}>
            <IconButton style={{ ...styles.arrowButton, ...styles.leftArrow }} onClick={handlePrev}>
                <ArrowBackIcon />
            </IconButton>
            <div style={styles.carouselSlides(slidesToShow)}>
                {visibleSlides.map((slide, index) => (
                    <div
                        style={{
                            ...styles.carouselSlide,
                            width: `${100 / slidesToShow}%`,
                            margin: '0 4px',
                            padding:"4%"
                        }}
                        key={index}
                    >
                        <Typography variant="h5" style={styles.slideTitle}>
                            {slide.title}
                        </Typography>
                        <Divider style={styles.slideDivider} />
                        <Typography variant="body1" style={styles.slideDescription}>
                            {slide.description}
                        </Typography>
                        <Button variant="outlined" style={styles.slideButton}>
                            <Typography variant="body2">{slide.buttonText}</Typography>
                        </Button>
                    </div>
                ))}
            </div>
            <IconButton style={{ ...styles.arrowButton, ...styles.rightArrow }} onClick={handleNext}>
                <ArrowForwardIcon />
            </IconButton>
        </section>
    );
};

const styles = {
    carouselContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 0',
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    carouselSlides: (slidesToShow) => ({
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        flexDirection: slidesToShow === 1 ? 'column' : 'row', // Stack vertically on small screens
    }),
    carouselSlide: {
        flexShrink: 0,
        backgroundColor: '#f0f0f0',
        borderRadius: '30px',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
    },
    slideTitle: {
        color: '#494949',
        fontWeight: 600,
        fontSize: '24px',
    },
    slideDivider: {
        width: '80px',
        backgroundColor: '#0087C0',
        margin: '8px auto',
    },
    slideDescription: {
        margin: '16px 0',
        fontSize: '16px',
    },
    slideButton: {
        margin: '16px 0',
        width: '60%',
        backgroundColor: 'white',
    },
    arrowButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    leftArrow: {
        left: '10px',
    },
    rightArrow: {
        right: '10px',
    },
};

export default Carousel;

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button, Divider, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
            title: "Startup Fund",
            description: "Our Startup Fund provides the financial support you need to turn your innovative ideas into successful businesses. With favorable terms and swift processing, getting started has never been easier.",
            buttonText: "Know More"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: false,
                },
            },
        ],
    };

    return (
        <section style={{ padding: '24px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div style={{ padding: '0 24px' }} key={index}>
                            <div
                                style={{
                                    margin:"20px",
                                    height: '100%',
                                    // width: '100%',
                                    backgroundColor: '#f0f0f0',
                                    padding: '16px',
                                    borderRadius: '30px',
                                    overflow: 'hidden',
                                    textAlign: 'center',
                                    transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'transform 0.3s ease',
                                    zIndex: index === currentSlide ? 1 : 0,
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    style={{
                                        color: "#494949",
                                        fontWeight: 600,
                                        fontSize: '24px',
                                    }}
                                >
                                    {slide.title}
                                </Typography>

                                <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                                    <Divider style={{ width: '80px', backgroundColor: '#0087C0' }} />
                                </div>

                                <Typography
                                    variant="body1"
                                    style={{
                                        margin: '16px 0',
                                        fontSize: '16px',
                                    }}
                                >
                                    {slide.description}
                                </Typography>

                                <Button
                                    variant="outlined"
                                    style={{
                                        margin: '16px 0',
                                        width: '60%',
                                        backgroundColor: 'white',
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        style={{
                                            fontWeight: 500,
                                            fontSize: '16px',
                                        }}
                                    >
                                        {slide.buttonText}
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{
                ...style,
                display: 'block',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                color: '#fff',
                width: '36px',
                height: '36px',
                marginRight: '8px',
            }}
            onClick={onClick}
        >
            {/* <ArrowForwardIcon /> */}
        </IconButton>
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{
                ...style,
                display: 'block',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                color: '#fff',
                width: '36px',
                height: '36px',
                marginLeft: '8px',
            }}
            onClick={onClick}
        >
            {/* <ArrowBackIcon /> */}
        </IconButton>
    );
}

export default Carousel;

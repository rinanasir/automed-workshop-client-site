import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MechanicsHome = () => {
    //Owl Carousel Settings
    const options = {
        margin: 30,
        loop: true,
        responsiveClass: true,
        nav: true,
        dots: true,
        // navText: ["<", ">"],
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: '#FFA45C', fontWeight: 'bolder', m: 3 }} variant="h2" component="div">
                    Our Experts For Your Car
                </Typography>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    <div class="item">
                        <img src="https://i.ibb.co/gR46xRM/mechanic-1.jpg" alt="" />
                        <Typography sx={{ color: '#505B80', fontWeight: 'bold', mt: 2 }} variant="h5">Steve Roger</Typography>
                        <Typography variant="body2" color="text.secondary">Engine Expert</Typography>
                    </div>
                    <div class="item">
                        <img src="https://i.ibb.co/t2dLKMr/mechanic-2.jpg" alt="" />
                        <Typography sx={{ color: '#505B80', fontWeight: 'bold', mt: 2 }} variant="h5">Jack Reacher</Typography>
                        <Typography variant="body2" color="text.secondary">Polish Expert</Typography>
                    </div>
                    <div class="item">
                        <img src="https://i.ibb.co/RP6n5mv/mechanic-3.jpg" alt="" />
                        <Typography sx={{ color: '#505B80', fontWeight: 'bold', mt: 2 }} variant="h5">Sam Cafling</Typography>
                        <Typography variant="body2" color="text.secondary">Coloring Expert</Typography>
                    </div>
                    <div class="item">
                        <img src="https://i.ibb.co/173DWrg/mechanic-4.jpg" alt="" />
                        <Typography sx={{ color: '#505B80', fontWeight: 'bold', mt: 2 }} variant="h5">Tony Blink</Typography>
                        <Typography variant="body2" color="text.secondary">Washing Expert</Typography>
                    </div>
                    <div class="item">
                        <img src="https://i.ibb.co/s5LFgFM/mechanic-5.jpg" alt="" />
                        <Typography sx={{ color: '#505B80', fontWeight: 'bold', mt: 2 }} variant="h5">Tommy Cooper</Typography>
                        <Typography variant="body2" color="text.secondary">Wheel Expert</Typography>
                    </div>
                </OwlCarousel>
            </Container>
        </Box>
    );
};

export default MechanicsHome;
import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerbg from '../../../images/banner/banner2.jpg';
import { Link } from 'react-router-dom';

const appointmentBanner = {
    background: `url(${bannerbg})`,
    height: 500,
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 50,
    marginBottom: 50
}

const AppointmentBanner = () => {
    AOS.init();
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Box sx={{ mt: 10, pt: 25 }}>
                <Typography variant="h4" style={{ color: 'white' }}>
                    Make an Appointment Today
                </Typography>
                <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem itaque rem aut enim inventore, assumenda deleniti dolorum sapiente omnis facilis.
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFA45C' }} to="/appointment">
                    <Button data-aos="flip-left" style={{ backgroundColor: '#FFA45C', color: 'black' }} variant="contained">Learn More</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default AppointmentBanner;
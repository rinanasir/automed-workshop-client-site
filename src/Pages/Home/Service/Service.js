import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = (props) => {
    const { name, description, img } = props.service;

    AOS.init();

    return (
        <Grid data-aos="fade-up" item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    // style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt=""
                />
                <CardContent>
                    <Typography sx={{ color: '#505B80', fontWeight: 'bold' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;
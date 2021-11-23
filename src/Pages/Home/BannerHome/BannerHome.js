import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import banner from '../../../images/headerBanner.jpg';
import bannerbg from '../../../images/banner/banner1.jpg';
import { Box } from '@mui/system';

const bannerHeader = {
    background: `url(${bannerbg})`,
    height: 500,
    marginTop: 15
}

const BannerHome = () => {
    return (
        <Box style={bannerHeader} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ lineHeight: 10 }}>
                    <Typography variant="h2" style={{ textAlign: 'right', color: '#FEC619', fontWeight: 'bold' }} sx={{ mt: 15 }}>
                        Automed
                    </Typography>
                    <Typography style={{ textAlign: 'right', color: 'white', fontWeight: 'bold' }} variant="h5">
                        Car repare and services. We fix it right.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerHome;
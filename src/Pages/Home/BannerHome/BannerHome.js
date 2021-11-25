import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import bannerbg from '../../../images/banner/banner1.jpg';

const bannerHeader = {
    background: `url(${bannerbg})`,
    height: 500,
    marginTop: 15
}

const BannerHome = () => {
    const mechanicIcon = <FontAwesomeIcon icon={faCogs} />
    return (
        <Box style={bannerHeader} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ lineHeight: 10 }}>
                    <Typography className="animate__animated animate__slideInDown" variant="h2" style={{ textAlign: 'right', color: '#FFA45C', fontWeight: 'bold' }} sx={{ mt: 15, pr: 5 }}>
                        {mechanicIcon} Automed
                    </Typography>
                    <Typography className="animate__animated animate__slideInDown" style={{ textAlign: 'right', color: 'white', fontWeight: 'bold' }} sx={{ pr: 5 }} variant="h5">
                        Car repare and services. We fix it right.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerHome;
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: '#FEC619', m: 2 }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    } */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
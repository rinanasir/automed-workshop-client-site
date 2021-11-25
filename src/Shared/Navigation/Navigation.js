import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const mechanicIcon = <FontAwesomeIcon icon={faCogs} />
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#505B80' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{ color: '#FFA45C', textAlign: 'left' }}>
                        {mechanicIcon} AutoMed
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: '#FFA45C' }} to="/appointment">
                        <Button style={{ color: '#FFA45C' }} color="inherit">Appointment</Button>
                    </Link>
                    <Button style={{ color: '#FFA45C' }} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
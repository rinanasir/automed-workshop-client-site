import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const mechanicIcon = <FontAwesomeIcon icon={faCogs} />
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: 'black' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{ color: '#FEC619', textAlign: 'left' }}>
                        {mechanicIcon} AutoMed
                    </Typography>
                    <Button style={{ color: '#FEC619' }} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
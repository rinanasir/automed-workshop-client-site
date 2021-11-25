import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import BannerHome from '../BannerHome/BannerHome';
import MechanicsHome from '../MechanicsHome/MechanicsHome';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerHome />
            <MechanicsHome />
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;
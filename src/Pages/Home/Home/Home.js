import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import BannerHome from '../BannerHome/BannerHome';
import MechanicsHome from '../MechanicsHome/MechanicsHome';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerHome />
            <MechanicsHome></MechanicsHome>
            <Services />
        </div>
    );
};

export default Home;
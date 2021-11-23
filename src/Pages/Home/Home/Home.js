import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import BannerHome from '../BannerHome/BannerHome';
import Mechanics from '../Mechanics/Mechanics';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerHome />
            {/* <Services />
            <Mechanics></Mechanics> */}
        </div>
    );
};

export default Home;
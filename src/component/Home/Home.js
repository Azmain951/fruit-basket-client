import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Fruits from '../Fruits/Fruits';
import Quality from '../Quality/Quality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fruits></Fruits>
            <Quality></Quality>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
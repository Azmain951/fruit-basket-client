import React from 'react';
import banner from '../../images/banner2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner shadow-sm'>
            <div className='banner-container container d-flex'>
                <div className='w-50 my-auto banner-header'>
                    <h2>Eating More Fruits</h2>
                    <h3>Leads to a Happier Life</h3>
                </div>
                <div className='w-50 banner-img'>
                    <img src={banner} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
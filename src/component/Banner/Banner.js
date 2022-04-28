import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='d-flex container mt-2'>
            <div className='w-50 my-auto'>
                <h2>Eating More Fruits</h2>
                <h3>Leads to a Happier Life</h3>
            </div>
            <div className='w-50'>
                <img src={banner} alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default Banner;
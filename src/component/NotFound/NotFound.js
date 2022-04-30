import React from 'react';
import notFound from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
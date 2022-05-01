import React from 'react';
import quality from '../../images/quality.png'

const Quality = () => {
    return (
        <div className='container shadow rounded-3 my-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 p-5'>
                    <img src={quality} alt="" className='img-fluid' />
                </div>
                <div className='col-12 col-lg-6 p-5 d-flex flex-column justify-content-center ms-5'>
                    <h2>Best Quality Assurance</h2>
                    <ul>
                        <li>Training Staff</li>
                        <li>Safety</li>
                        <li>Security</li>
                        <li>Storage Space</li>
                        <li>Mechanical Appliances</li>
                        <li>Emergency Protocol</li>
                        <li>Picking Process</li>
                        <li>Quality Control</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Quality;
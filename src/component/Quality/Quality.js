import React from 'react';
import quality from '../../images/quality.png'
import { FcApproval } from "react-icons/fc";
import './Quality.css'

const Quality = () => {
    return (
        <div className='container shadow rounded-3 my-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 p-5'>
                    <img src={quality} alt="" className='img-fluid' />
                </div>
                <div className='col-12 col-lg-6 p-5 d-flex flex-column justify-content-center ms-5'>
                    <h2 className='mb-2'>Best Quality Assurance</h2>
                    <div className='list'>
                        <li><FcApproval /> Training Staff</li>
                        <li><FcApproval /> Safety</li>
                        <li><FcApproval /> Security</li>
                        <li><FcApproval /> Storage Space</li>
                        <li><FcApproval /> Mechanical Appliances</li>
                        <li><FcApproval /> Emergency Protocol</li>
                        <li><FcApproval /> Picking Process</li>
                        <li><FcApproval /> Quality Control</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Quality;
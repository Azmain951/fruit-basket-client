import React from 'react';
import './About.css';
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

const About = () => {
    return (
        <div className='about container d-flex shadow p-5 my-5 rounded'>
            <div className='info w-50 me-5'>
                <h2 className='fw-bold'>Ahmed-Al-Azmain</h2>
                <p className='fst-italic'>Full Stack Web Developer</p>
                <hr />
                <div className='projects'>
                    <h5>Top Projects: </h5>
                    <p>1. <a href="https://fruit-basket-523c2.web.app/" target="_blank" rel="noreferrer">Fruit Basket</a></p>
                    <p>2. <a href="https://personal-gym-trainer.web.app/" target="_blank" rel="noreferrer">Personal Gym Trainer</a></p>
                    <p>3. <a href="https://azmain951-ph-assignment-9.netlify.app/" target="_blank" rel="noreferrer">Analytical Hub</a></p>
                    <p>4. <a href="https://azmain951-ph-assignment-8.netlify.app/" target="_blank" rel="noreferrer">Laptop Heaven</a></p>
                </div>
                <hr />
                <div>
                    <h5>Social Links:</h5>
                    <div className='social'>
                        <a href="https://github.com/Azmain951" target="_blank" rel="noreferrer"><BsGithub /></a>
                        <a href="https://www.linkedin.com/in/ahmed-al-azmain-8632851b2/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://www.facebook.com/QuadA.951/" target="_blank" rel="noreferrer"><BsFacebook /></a>
                    </div>
                </div>
            </div>
            <div className='image w-50 px-5'>
                <img src="https://i.ibb.co/YQS18M0/IMG-20191208-130241-01sef.jpg" alt="" className='img-fluid rounded-circle' />
            </div>
        </div>
    );
};

export default About;
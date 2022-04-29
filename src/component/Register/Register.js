import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'

const Register = () => {

    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate('/home')
        console.log(user)
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);
        updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');

    }

    return (
        <div className='register'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Your Name' required></input>

                <input type="email" name='email' placeholder='Your Email' required />

                <input type="password" name='password' placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Food Basket Terms and Conditions</label>

                <input className='w-50 mx-auto btn btn-secondary border-0 mt-2' type="submit" value="Register" disabled={!agree} />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto'>Please Login</Link></p>

        </div >
    );
};

export default Register;
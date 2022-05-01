import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin'
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        toast.success('user logged in successfully');
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('password reset link sent on email');
        }
        else {
            toast.error('Please enter your email!!!');
        }
    }

    return (
        <div className='container w-50 mx-auto my-5'>
            <h2 className='text-secondary text-center'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input className="btn btn-primary w-50 mx-auto d-block mb-2" type="submit" value='Login' />
            </Form>
            {errorElement}
            <p>New to Food Basket? <Link to='/register' className='text-primary pe-auto'>Please Register</Link></p>
            <p>Forget Password? <button onClick={handleResetPassword} className='btn btn-link text-secondary pe-auto'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
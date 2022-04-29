import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto my-5'>
            <h2 className='text-secondary text-center'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <input className="btn btn-primary w-50 mx-auto d-block mb-2" type="submit" value='Login' />
            </Form>
            {errorElement}
            <p>New to Food Basket? <Link to='/register' className='text-primary pe-auto'>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-secondary pe-auto'>Reset Password</button></p>
        </div>
    );
};

export default Login;
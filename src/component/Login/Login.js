import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
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

            <p>New to Food Basket? <Link to='/register' className='text-primary pe-auto'>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-secondary pe-auto'>Reset Password</button></p>
        </div>
    );
};

export default Login;
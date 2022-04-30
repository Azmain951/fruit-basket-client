import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement = '';

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>


    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='m-0 px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className='mt-3'>
                <button onClick={() => signInWithGoogle()} className='d-block mx-auto btn border  w-75 my-3'>
                    {/* <img src={google} alt="" style={{ width: '25px' }} /> */}
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
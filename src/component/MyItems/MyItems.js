import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Item from '../Item/Item';

const MyItems = () => {

    const [fruits, setFruits] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getItems = async () => {
            const url = `https://thawing-hollows-22749.herokuapp.com/fruit?email=${user.email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setFruits(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItems();
    }, [user, fruits])

    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center mb-3'>My Items</h2>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th className='mbl' scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th className='mbl' scope="col">Supplier</th>
                        <th scope="col">Price($)</th>
                        <th className='mbl' scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits.map(fruit => <Item key={fruit._id} fruit={fruit}></Item>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;
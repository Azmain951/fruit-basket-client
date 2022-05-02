import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Item from '../Item/Item';

const MyItems = () => {

    const [fruits, setFruits] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        const getItems = async () => {
            const url = `https://thawing-hollows-22749.herokuapp.com/fruits?email=${user.email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setFruits(data);
        }
        getItems();
    }, [user, fruits])

    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center mb-3'>My Items</h2>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Price($)</th>
                        <th scope="col">Quantity</th>
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
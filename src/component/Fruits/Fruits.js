import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import useFruits from '../../hooks/useFruits'
import { useNavigate } from 'react-router-dom';

const Fruits = () => {
    const navigate = useNavigate();
    const [fruits, setFruits] = useFruits();
    const handleManage = (e) => {
        e.preventDefault();
        navigate('/manage-items');
    }

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                {
                    fruits.slice(0, 6).map(fruit => <Fruit key={fruit._id} fruit={fruit}></Fruit>)
                }
            </div>
            <button onClick={handleManage} className='w-100 btn btn-link mt-5'>Manage Inventory</button>
        </div>
    );
};

export default Fruits;
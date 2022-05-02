import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import useFruits from '../../hooks/useFruits'
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import './Fruits.css'

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
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
                {
                    fruits.slice(0, 6).map(fruit => <Fruit key={fruit._id} fruit={fruit}></Fruit>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleManage} className='btn btn-manage border-0 rounded-pill mt-5 px-5 py-2'>Manage Inventory <BsArrowRightCircle /></button>
            </div>
        </div>
    );
};

export default Fruits;
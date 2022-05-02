import React from 'react';
import useFruits from '../../hooks/useFruits';
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom';
import { RiAddCircleLine } from "react-icons/ri";
import './ManageItems.css'

const ManageItems = () => {

    const [fruits, setFruits] = useFruits([]);
    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate('/add-items')
    }

    return (
        <div className='manage-item container mx-auto my-5'>
            <div className='d-flex justify-content-center align-items-center mb-5'>
                <h1 className='ms-auto'>Inventory</h1>
                <button onClick={handleAddItem} className='btn btn-manage border-0 rounded-pill px-3 py-2 ms-auto'>Add New Item <RiAddCircleLine /></button>
            </div>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th className='img' scope="col">Image</th>
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

export default ManageItems;
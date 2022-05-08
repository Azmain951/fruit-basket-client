import React from 'react';
import useFruits from '../../hooks/useFruits';
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom';
import { RiAddCircleLine } from "react-icons/ri";
import './ManageItems.css'

const ManageItems = () => {

    const [fruits] = useFruits([]);
    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate('/add-items')
    }

    return (
        <div className='manage-item container mx-auto my-5 shadow p-5 rounded'>
            <div className='d-flex justify-content-center align-items-center mb-5'>
                <h1 className='ms-auto'>Inventory</h1>
                <button onClick={handleAddItem} className='btn btn-manage border-0 rounded-pill px-3 py-2 ms-auto'>Add New Item <RiAddCircleLine /></button>
            </div>
            <div className='overflow-auto'>
                <table className='table text-center'>
                    <thead>
                        <tr>
                            <th className='img mbl' scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th className='mbl' scope="col">Supplier</th>
                            <th scope="col">Price($)</th>
                            <th className='mbl' scope="col">Quantity(kg)</th>
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
        </div>
    );
};

export default ManageItems;
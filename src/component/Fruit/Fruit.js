import React from 'react';
import { useNavigate } from 'react-router-dom';

const Fruit = ({ fruit }) => {

    const { _id, name, img, description, price, quantity, supplier } = fruit;
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/fruit/${id}`);
    }

    return (
        <div className="col">
            <div className="card h-100 border-0 shadow rounded-3 m-2">
                <img src={img} className="card-img-top rounded-top-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price} <small>per kg.</small></p>
                    <p className='card-text'>Quantity: {quantity} kg</p>
                    <p className='card-text'>Supplier: {supplier}</p>
                    <p><small className='card-text'>{description}</small></p>
                </div>
                <div className='card-footer p-0'>
                    <button onClick={() => handleUpdate(_id)} className='btn btn-primary w-100 m-0 rounded-0 rounded-bottom'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Fruit;
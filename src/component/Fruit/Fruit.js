import React from 'react';

const Fruit = ({ fruit }) => {

    const { name, img, description, price, quantity, supplier } = fruit;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price} <small>per kg.</small></p>
                    <p className='card-text'>Quantity: {quantity} kg</p>
                    <p className='card-text'>Supplier: {supplier}</p>
                    <small className='card-text'>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default Fruit;
import React from 'react';

const Item = ({ fruit }) => {
    const { _id, name, img, description, price, quantity, supplier } = fruit;
    const handleRemove = () => {

    }
    return (

        <tr className=''>
            <th scope="row"><img className='rounded-circle' src={img} alt="" width={100} /></th>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={handleRemove} className='btn btn-danger'>Remove Item</button></td>
        </tr>

    );
};

export default Item;
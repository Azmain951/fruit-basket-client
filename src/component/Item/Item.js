import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ fruit }) => {
    const { _id, name, img, description, price, quantity, supplier } = fruit;
    const handleRemove = () => {
        fetch(`https://thawing-hollows-22749.herokuapp.com/fruits/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('Item removed successfully');
            })
    }

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/fruit/${id}`);
    }
    return (

        <tr className=''>
            <th scope="row"><img className='rounded-circle' src={img} alt="" width={100} /></th>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <div className='d-flex flex-column'>
                    <button onClick={handleRemove} className='btn btn-danger mb-2'>Remove Item</button>
                    <button onClick={() => handleUpdate(_id)} className='btn btn-primary'>Update Item</button>
                </div>
            </td>
        </tr>

    );
};

export default Item;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ fruit }) => {
    const { _id, name, img, price, quantity, supplier } = fruit;
    const handleRemove = () => {
        const agree = window.confirm('Are you sure you want to delete?');

        if (agree) {
            fetch(`https://thawing-hollows-22749.herokuapp.com/fruits/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Item removed successfully');
                })
        }
    }

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/fruit/${id}`);
    }
    return (

        <tr className='table-row'>
            <th className='mbl' scope="row"><img className='' src={img} alt="" width={100} /></th>
            <td>{name}</td>
            <td className='mbl'>{supplier}</td>
            <td>{price}</td>
            <td className='mbl'>{quantity}</td>
            <td>
                <div className='d-flex flex-column'>
                    <button onClick={handleRemove} className='btn btn-danger mb-2'>Remove Item</button>
                    <button onClick={() => handleUpdate(_id)} className='btn btn-update'>Update Item</button>
                </div>
            </td>
        </tr>

    );
};

export default Item;
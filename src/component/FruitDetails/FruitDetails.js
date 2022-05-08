import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import toast from 'react-hot-toast';


const FruitDetails = () => {
    const { id } = useParams();
    const [result, setResult] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://thawing-hollows-22749.herokuapp.com/fruits/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setResult(data))
    }, [result]);

    const handleDelivered = (id) => {
        if (result.quantity > 0) {
            const updateQuantity = { quantity: (result.quantity - 1) }

            const url = `https://thawing-hollows-22749.herokuapp.com/fruits/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    alert(`1 ${result.name} delivered!!!`);
                })

        }
        else {
            toast.error(`${result.name} is out of stock.. Please restock first!!`)
        }
    }

    const handleAddFruits = e => {

        e.preventDefault();
        const newQuantity = parseInt(e.target.quantity.value);

        const updateQuantity = { quantity: (result.quantity + newQuantity) }

        const url = `https://thawing-hollows-22749.herokuapp.com/fruits/${result._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                alert(`${newQuantity} ${result.name} added successfully`);
            })

        e.target.reset();
    }

    return (
        <div className='w-75 mx-auto my-4 pb-3'>
            <div className="card mb-3 p-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={result.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7 ms-3">
                        <div className="card-body">
                            <h5 className="card-title">{result.name}</h5>
                            <p className="card-text"><small>{result.supplier}</small></p>
                            <p className="card-text">{result.description}</p>
                            <p>Price: ${result.price} <small>per kg</small></p>
                            <p>Quantity: {result.quantity}<small> kg</small></p>
                            {
                                result.quantity ?
                                    <p className='text-success text-uppercase'>in stock</p>
                                    : <p className='text-success text-danger'>out of stock</p>
                            }
                            <button onClick={() => handleDelivered(result._id)} className='btn btn-manage border-0'>Delivered</button>
                            <form className='mt-2' onSubmit={handleAddFruits}>
                                <input className='me-2 p-1' type="text" name='quantity' placeholder='enter restock quantity' />
                                <input className='btn btn-manage border-0' type="submit" value="Restock" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate('/manage-items')} className='w-100 btn btn-update mt-4'>Manage Inventory <BsArrowRightCircle /></button>
        </div >
    );
};

export default FruitDetails;
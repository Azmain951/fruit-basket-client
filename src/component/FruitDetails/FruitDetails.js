
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFruits from '../../hooks/useFruits';
const FruitDetails = () => {
    const { id } = useParams();
    const [result, setResult] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/fruits/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setResult(data))
    }, [result]);

    const handleDelivered = (id) => {

        const updateQuantity = { quantity: (result.quantity - 1) }
        console.log(updateQuantity);

        const url = `http://localhost:5000/fruits/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('user added successfully');
            })
    }

    return (
        <div className='w-75 mx-auto my-4'>
            <div className="card mb-3">
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
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <div>
                                <button onClick={() => handleDelivered(result._id)} className='btn btn-primary'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FruitDetails;
import React, { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Inventory Items</h2>
            {
                fruits.map(fruit => <Fruit key={fruit.id} fruit={fruit}></Fruit>)
            }
        </div>
    );
};

export default Fruits;
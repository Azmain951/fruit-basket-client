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
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
                {
                    fruits.slice(0, 6).map(fruit => <Fruit key={fruit.id} fruit={fruit}></Fruit>)
                }
            </div>
        </div>
    );
};

export default Fruits;
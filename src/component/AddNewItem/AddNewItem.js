import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddNewItem = () => {

    const handleAddItem = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const supplier = e.target.supplier.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const img = e.target.img.value;

        const newItem = { email, name, supplier, price, quantity, description, img };

        fetch('http://localhost:5000/fruits', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item added successfully');
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-4'>Add New Item</h2>
            <Form onSubmit={handleAddItem}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control name='name' placeholder="fruit name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formGridSupplier">
                        <Form.Label>Supplier Name</Form.Label>
                        <Form.Control name='supplier' placeholder="supplier name" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} name='description' placeholder="About fruit" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price($)</Form.Label>
                        <Form.Control name='price' placeholder='price' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridQuantity">
                        <Form.Label>Quantity(kg)</Form.Label>
                        <Form.Control name='quantity' placeholder='quantity' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridImageLink">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control name='img' placeholder='imageLink' />
                    </Form.Group>
                </Row>
                <input className='btn btn-primary' type="submit" value="Add Item" />
            </Form>
        </div>
    );
};

export default AddNewItem; <h2>Add New Item</h2>
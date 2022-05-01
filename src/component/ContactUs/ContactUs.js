import React from 'react';
import { Button, Form } from 'react-bootstrap';
import query from '../../images/query.jpg'

const ContactUs = () => {
    return (
        <div className='container shadow rounded-3 mb-5'>
            <div className="row">
                <div className='col-6 p-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='col-6 p-5'>
                    <img src={query} alt="" className='img-fluid rounded-3' />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import query from '../../images/query.jpg';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='container contact shadow mb-5 pt-5'>
            <h2 className='text-center'>Contact us for any Query</h2>
            <div className="row">
                <div className='col-12 col-lg-6 p-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="type your query/feedback" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='col-12 col-lg-6 p-5'>
                    <img src={query} alt="" className='img-fluid rounded-3' />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
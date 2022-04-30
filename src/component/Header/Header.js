import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <Navbar className='py-3' sticky='top' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                        Fruit Basket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="manage-items">Manage Items</Nav.Link>
                            <Nav.Link as={Link} to="add-items">Add Items</Nav.Link>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="my-items">My Items</Nav.Link>
                                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                    </>
                                    : <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
        toast.success('user signout successfully');
    }

    return (
        <Navbar sticky="top" className='py-3 shadow-sm' bg="white" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    <b>Fruit <span style={{ color: '#24a69f' }}>Basket</span></b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            user ?
                                <>
                                    <Nav.Link as={Link} to="manage-items">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="add-items">Add Items</Nav.Link>
                                    <Nav.Link as={Link} to="my-items">My Items</Nav.Link>
                                    <NavDropdown title='Logout' id="basic-nav-dropdown">
                                        <NavDropdown.Item>{user.displayName}</NavDropdown.Item>
                                        <NavDropdown.Item>{user.email}</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                                : <Nav.Link as={Link} to="login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header; 
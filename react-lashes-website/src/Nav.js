import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Nav } from 'react-bootstrap';
import Logo from './Images/logo-andrea.png';
import TransparentLogo from './Images/transparent-logo.png';

const Navbar = () => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener('scroll');
    };
}, []);

  return (
    <nav className={`navbar navbar-transparent ${show && "nav-color"}`}>
        <div class="container-fluid">
            <img src={Logo} alt='logo' className='logo'/>
        </div>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link className='nav-link' href="/home">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Schedule</Nav.Link>
            </Nav.Item>
        </Nav>
    </nav>
  )
}

export default Navbar
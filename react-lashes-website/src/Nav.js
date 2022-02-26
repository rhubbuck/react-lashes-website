import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from './Images/logo-andrea.png';

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
            <Link className='nav-link' to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className='nav-link' >Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Link className='nav-link' to="/gallery" >Gallery</Link>
            </Nav.Item>
            <Nav.Item>
            <a className='nav-link' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">Schedule</a>
            </Nav.Item>
            <Nav.Item>
            <Link className='nav-link' to="/contact">Contact</Link>
            </Nav.Item>
        </Nav>
    </nav>
  )
}

export default Navbar
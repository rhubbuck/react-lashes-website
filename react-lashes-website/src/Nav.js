import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Nav } from 'react-bootstrap';

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
            {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}
            <h1>Logo</h1>
        </div>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
            <Nav.Link className='nav-link' href="/home">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Schedule</Nav.Link>
            </Nav.Item>
        </Nav>
    </nav>
  )
}

export default Navbar
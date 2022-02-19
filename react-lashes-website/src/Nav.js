import React from 'react';
import './Nav.css';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav class="navbar navbar-transparent">
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
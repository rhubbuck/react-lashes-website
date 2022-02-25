import React from 'react';
import './RouteNav.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from './Images/logo-andrea.png';

const RouteNav = () => {
  return (
    <div>
        <nav className={`router-navbar`}>
            <div class="router-container-fluid">
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
                <Nav.Link className='nav-link'>Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Link className='nav-link' to="/contact">Contact</Link>
                </Nav.Item>
            </Nav>
        </nav>
    </div>
  )
}

export default RouteNav
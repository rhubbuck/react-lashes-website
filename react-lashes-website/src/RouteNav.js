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
            <Nav className="justify-content-end nav-link-box" activeKey="/home">
                <Nav.Item>
                <Link className='nav-link' to="/">Home</Link>
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
    </div>
  )
}

export default RouteNav
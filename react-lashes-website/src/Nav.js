import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from './Images/logo-andrea.png';
import Menu from './Images/list.svg';
import Chevron from './Images/chevron-right.svg';

const Navbar = () => {

  const [show, handleShow] = useState(false);

  const [showMenu, handleShowMenu] = useState(false);

  const changeMenu = () => {
      handleShowMenu(prevState => !prevState);
  }

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
        <img src={Menu} alt='Menu' className='menu-icon' onClick={changeMenu}/>
        { showMenu &&
        <div className='mobile-menu'>
            <img src={Chevron} alt='close menu icon' className='mobile-close-icon' onClick={changeMenu}/>
            <ul className='mobile-menu-links'>
                <Link className='mobile-link' onClick={changeMenu} to='/'>Home</Link>
                <Link className='mobile-link' onClick={changeMenu} to='/gallery'>Gallery</Link>
                <a className='mobile-link' onClick={changeMenu} target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">Schedule</a>
                <Link className='mobile-link' onClick={changeMenu} to='/contact'>Contact</Link>
            </ul>
        </div>
        }
    </nav>
  )
}

export default Navbar
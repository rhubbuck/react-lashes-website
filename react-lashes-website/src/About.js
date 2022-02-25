import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import Ali from './Images/pexels-ali-pazani.jpg';

const About = () => {
  return (
      <Container className='about-container'> 
        <div className='about-content'>
           <h1 className='about-title'>About Me</h1>
           <div className='about-inner-content'>
              <img className='about-profile-picture' src={Ali} alt='profile'/>
              <p className='about-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
           </div>
        </div>
      </Container>
  )
}

export default About
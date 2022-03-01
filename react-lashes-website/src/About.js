import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import Ali from './Images/pexels-george.jpg';

const About = () => {
  return (
      <div className='about-container'> 
        <div className='about-content'>
           <h1 className='about-title'>About Me</h1>
           <div className='about-inner-content'>
              <img className='about-profile-picture' src={Ali} alt='profile'/>
              <div className='about-text-container'>
                <p className='about-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "</p>
                <p className='about-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "</p>
                <p className='about-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "</p>
              </div>
           </div>
        </div>
      </div>
  )
}

export default About
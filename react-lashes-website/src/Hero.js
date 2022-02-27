import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-background'>
        <div className='hero-content'>
            <div className='hero-text'>
                <h1 className='hero-title'>Lashes by Andrea</h1>
            </div>
            <div className='hero-button-box'>
                <a className='hero-link' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">Schedule</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-background'>
        <div className='hero-content'>
            <div className='hero-text'>
                <h1 className='hero-title'>Lashes by Andrea</h1>
                <div className='hero-mobile-title'>
                  <h2 className='hero-mobile-text'>Lashes</h2>
                  <h2 className='hero-mobile-text'>by</h2>
                  <h2 className='hero-mobile-text'>Andrea</h2>
                </div>
            </div>
            <div className='hero-button-box'>
                <a className='hero-link' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">Schedule</a>
            </div>
            <div className='hero-subtext-container'>
                <p className='hero-subtext'>Custom eyelash extensions</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
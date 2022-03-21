import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className='info-wrapper'>
        <div className='location-wrapper'>
            <h2 className='location-title'>Location</h2>
            <div className='location-image'></div>
            <div className='address-container'>
                <p className='location-address'>123 Example Road</p>
                <p className='location-address'>Gadsden, AL 11212</p>
            </div> 
        </div>
        <div className='hours-wrapper'>
            <h2 className='hours-title'>Hours</h2>
            <ul className='hours-list'>
                <li className='hours-list-item'>Mon: 9-5</li>
                <li className='hours-list-item'>Tue: 9-5</li>
                <li className='hours-list-item'>Wed: 9-5</li>
                <li className='hours-list-item'>Thu: 9-5</li>
                <li className='hours-list-item'>Fri: 9-5</li>
                <li className='hours-list-item'>Sat: 9-5</li>
                <li className='hours-list-item'>Sun: 9-5</li>
            </ul>
        </div>
    </div>
  )
}

export default Info
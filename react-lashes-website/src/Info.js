import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className='info-wrapper'>
        <div className='location-wrapper'>
            <h2 className='location-title'>Location</h2>
            <div className='location-image'></div>
            <div className='address-container'>
                <p className='location-address'>829 S 4th St,</p>
                <p className='location-address'>Gadsden, AL 35903</p>
            </div> 
        </div>
        <div className='hours-wrapper'>
            <h2 className='hours-title'>Hours</h2>
            <ul className='hours-list'>
                <li className='hours-list-item'>Monday - Saturday</li>
                <li className='hours-list-item'>10AM - 5PM</li>
                <li className='hours-list-item'>Appointments upon request</li>
            </ul>
        </div>
    </div>
  )
}

export default Info
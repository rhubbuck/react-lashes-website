import React from 'react';
import './Footer.css';
import facebook from './Images/facebook.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       
<footer class="text-center text-lg-start bg-light text-muted">

  <section
    class="d-flex justify-content-center p-4 border-bottom"
    id='social-wrapper'
  >
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>
    <div className='social-icons'>
      <a href="https://www.facebook.com/Lashes-By-Andrea-103765671589665" class=" text-reset" className='social-icon'>
        <img id='facebook' src={facebook} alt="facebook"/>
      </a>
    </div>
    
  </section> 
  <section class="footer-link-wrapper">
    <div class="container text-center mt-5">
      <div class="row mt-3 footer-columns">
        <div class="column1 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
          <Link className='footer-link' to='/'>Home</Link>
          </p>
          <p>
            <Link className='footer-link' to='/gallery'>Gallery</Link>
          </p>
          <p>
          <a className='footer-link' target='_blank' href='https://lashesbyandreaa.as.me/' rel="noreferrer">Schedule</a>
          </p>
          <p>
          <Link className='footer-link' to='/contact'>Contact</Link>
          </p>
        </div>
        <div class="column2  mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p className='footer-text'><a className='email-to' href = "mailto: abc@example.com">Andreaflores1510@gmail.com</a></p>
          <p className='footer-text'>(256) 393-0212</p>
          <p className='footer-text'>Mon - Sat; 10AM - 5PM</p>
        </div>
       
      </div>
      </div>
  </section>
 <div class="text-center p-4" >
    © 2021:
    Ryan Hubbuck
  </div>
 
</footer>

    </div>
  )
}

export default Footer
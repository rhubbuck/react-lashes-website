import React from 'react';
import './Footer.css';
import facebook from './Images/facebook.svg';
import instagram from './Images/instagram.svg';
import twitter from './Images/twitter.svg';
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
    <div>
      <a href="#top" class="me-4 text-reset">
        
        <img id='facebook' src={facebook} alt="facebook"/>
      </a>
      <a href="top" class="me-4 text-reset">
      <img id='instagram' src={instagram} alt="instagram"/>
      </a>
      <a href="top" class="me-4 text-reset">
      <img id='twitter' src={twitter} alt="twitter"/>
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
          <p><i class="fas fa-home me-3"></i> 222 road Gadsden, AL 11111</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            andreaflores1510@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i>(222)222-2222</p>
          <p><i class="fas fa-print me-3"></i>Hours: </p>
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
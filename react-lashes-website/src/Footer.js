import React from 'react';
import './Footer.css';
import facebook from './Images/facebook.svg';
import instagram from './Images/instagram.svg';
import twitter from './Images/twitter.svg'

const Footer = () => {
  return (
    <div>
       
<footer class="text-center text-lg-start bg-light text-muted">

  <section
    class="d-flex justify-content-center justify-content-md-between p-4 border-bottom"
    id='social-wrapper'
  >
    
    <div class="me-5 d-none d-lg-block">
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

  
 

 
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">About</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Photos</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Schedule</a>
          </p>
        </div>

        {/* <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
        <h6 class="text-uppercase fw-bold mb-4">
          <i class="fas fa-gem me-3"></i>Lashes by Aundrea
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
      </div>
  </section>
 <div class="text-center p-4" >
    © 2021 Copyright:
    Ryan Hubbuck
  </div>
 
</footer>

    </div>
  )
}

export default Footer
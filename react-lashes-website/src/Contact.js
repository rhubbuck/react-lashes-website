import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import RouteNav from './RouteNav';

const Contact = () => {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_ij20fx9', 'template_v8xyku7', form.current, 'user_ViWYiGu4yLdFIXPcCAgcc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

  return (
    <div className='contact-wrapper'>
      <div className='layer'>
        <RouteNav />
          <div className='contact-container'>
            <h1 className='contact-header'>(256) 393-0212</h1>
            <h2 className='contact-subheader'>Have a question? Contact me here!</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label className='contact-label'>Name</label>
                <input type="text" name="name" required className='contact-input' />
                <label className='contact-label'>Email</label>
                <input type="email" name="email" required className='contact-input' />
                <label className='contact-label'>Message</label>
                <textarea name="message" required className='contact-textarea' />
                <input type="submit" value="SEND" className='contact-submit' />
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
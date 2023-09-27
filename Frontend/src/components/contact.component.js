import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
      <form className="contact-form" action="https://formsubmit.co/narainkarthik812@gmail.com" method ="post">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

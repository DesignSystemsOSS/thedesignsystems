import React from 'react';
import './style.view.contact-us.css';
import Button from '../../components/widgets/Button';
import img from '../../assets/Illustration.png';

export default function ContactUs() {
  return (
    <div className="contact-us">
      <h1 className="contact-us-section-title  page-title">Contact Us</h1>
      <p className="contact-us-section-description">
        Be in touch with us, and collaborate with the community members and grow
        in a team.
      </p>

      <div className="form-section-wrapper">
        <img src={img} alt="Contact-Us-Illustration" className="contact-illustration" />
        
        <form className="contact-us-form" action="" method="">
          <label for="name">
            Name
            <input
              type="text"
              placeholder="Enter your name"
              className="name-input"
              id="name"
              name="name"
            />
          </label>
          <label for="email">
            Email Id
            <input
              type="text"
              placeholder="Enter your email"
              className="email-input"
              id="email-id"
              name="email-id"
            />
          </label>
          <label for="message">Message</label>
          <textarea name="textarea" id="textarea-form-wrapper" cols="30" rows="5">
          </textarea>
          <a href="/" className="submit-form-button">
            <Button type="primary" value="Submit" className="submit-btn"/>
          </a>
        </form>
      </div>
    </div>
  );
}
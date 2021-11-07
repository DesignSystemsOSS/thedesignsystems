import React from 'react';
import './style.view.contact-us.css';
import Button from '../../components/widgets/Button';
import ContactUsForm from './ContactUsForm';

export default function ContactUs() {
  return (
    <div className="contact-us">
      <h1 className="contact-us-section-title  page-title">Contact Us</h1>
      <p className="contact-us-section-description">
        Be in touch with us, and collaborate with the community members and grow
        in a team.
      </p>
      {/* form component */}
      <div className="contact-us-form-wrapper">
        <ContactUsForm />
      </div>
    </div>
  );
}
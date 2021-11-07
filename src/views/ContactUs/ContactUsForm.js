import './style.view.contact-us.css';
import React from 'react';
import { Input, TextArea } from '../../components/widgets/Input';
import Button from '../../components/widgets/Button';

const formWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '0.6em'
};

export default function ContactUsForm() {
    return (
        <div className="contact-us-form" style={formWrapperStyle} >
            <div className="full-name-input-wrapper" style={formWrapperStyle}>
                <h5 className="full-name-input-title">Your name</h5>
                <Input type="text" placeholder="Your full name" />
            </div>
            <div className="email-address-input-wrapper" style={formWrapperStyle}>
                <h5 className="email-address-input-title">Email address</h5>
                <Input type="email" placeholder="Email address" />
            </div>
            <div className="message-input-wrapper" style={formWrapperStyle}>
                <h5 className="message-input-title">Any message for us?</h5>
                <TextArea placeholder="Any message or feedback from your side" />
            </div>
            <Button value="Get in touch" />
        </div>

    )
}
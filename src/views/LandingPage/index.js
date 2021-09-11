import React from 'react';
import Button from '../../components/widgets/Button';
import './style.view.landing-page.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="updates-alert-toast">
        <span className="new-tag">new</span>
        <p className="alert-title">We are revamping eccentric-touch css library</p>
      </div>
      <p className="massive-tagline">
        We are building <span className="gradient-text">frontend</span> solutions for developers
      </p>
      <p className="landing-page-description">
        The DesignSystems' tools helps you write more scalable code without worrying about design mistakes. Built for developers and teams to save their time.
      </p>
      <div className="cta-buttons-wrapper button-wrapper button-wrapper-center">
        <Button value="Get started" type="primary" />
        <Button value="Check our GitHub" type="outline" startIcon="fab fa-github" onClick={() => window.open('https://www.github.com/DesignSystemsOSS')} />
      </div>
      
      {/* about the-design-systems */} 
      <div className="about-the-design-systems-section-wrapper">

      </div>
    </div>
  )
}
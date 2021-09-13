import React from "react";
import Button from "../../components/widgets/Button";
import "./style.view.landing-page.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="updates-alert-toast">
        <span className="new-tag">new</span>
        <p className="alert-title">
          We are revamping eccentric-touch css library
        </p>
      </div>
      <p className="massive-tagline">
        We are building <span className="gradient-text">frontend</span>{" "}
        solutions for developers
      </p>
      <p className="landing-page-description">
        The DesignSystems' tools helps you write more scalable code without
        worrying about design mistakes. Built for developers and teams to save
        their time.
      </p>
      <div className="cta-buttons-wrapper button-wrapper button-wrapper-center">
        <a
          href="https://discord.gg/VcmnY4HTEc"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            value="Join our Discord"
            type="primary"
            startIcon="fab fa-discord"
          />
        </a>
        <a
          href="https://www.github.com/DesignSystemsOSS"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            value="Check our GitHub"
            type="outline"
            startIcon="fab fa-github"
          />
        </a>
      </div>

      {/* about the-design-systems */}
      <div className="about-the-design-systems-section-wrapper"></div>

      {/* Get in touch section */}
      <div className="get-in-touch-section gradient">
        <div className="get-in-touch-section-wrapper">
          <h2 className="get-in-touch-title">
            Get in touch with{" "}
            <span className="gradient-text">The DesignSystems Community</span>
          </h2>
          <div className="social-icons-wrapper button-wrapper">
            <a
              href="https://twitter.com/TDesignsystems"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                type="outline"
                value="Follow us on Twitter"
                startIcon="fab fa-twitter"
              />
            </a>

            <a
              href="https://discord.gg/VcmnY4HTEc"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                type="primary"
                value="Join Discord Community"
                startIcon="fab fa-discord"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

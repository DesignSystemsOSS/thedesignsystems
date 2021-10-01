import React from "react";
import { useState } from "react";
import "./style.footer.css";
import LinksData from "./__usefulLinks.json";
import NavLinksData from "./__navLinks.json";
import Button from "../../widgets/Button";

export default function Footer() {
  const [footerLinksDetails] = useState(LinksData);
  const [footerNavLinksDetails] = useState(NavLinksData);
  return (
    <div className="footer">
      <div className="footer-row-1">
        <div className="logo-container color-change-4x">
          <h1 className="demo-logo-icon">DS</h1>
          <p className="logo-title">The DesignSystems</p>
        </div>

        <div className="footer-col-1">
          <div className="useful-links-section">
            <p className="useful-links-title links-title">
              <b>Useful links</b>
            </p>
            <div className="useful-links-list">
              {footerNavLinksDetails.map((data, index) => (
                <ul className="useful-links-list" key={index}>
                  <li className="useful-link-item" key={index}>
                    <a href={data.path} key={index}>{data.title}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="products-links-section">
            <p className="products-links-title links-title">
              <b>Products</b>
            </p>
            <div className="product-links-list">
              {footerLinksDetails.map((data, index) => (
                <ul className="products-links-list" key={index}>
                  <li className="products-links-item" key={index}>
                    <a href={data.path} key={index}>{data.title}</a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-col-2">
          <div className="connect-community">
            <p className="community-title gradient-text">
              Don't miss anything, Join our GitHub Organization and Discord
              Community
            </p>
            <div className="community-links-wrapper">
              <a
                href="https://github.com/DesignSystemsOSS"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  type="outline"
                  value="Join our Github Organization"
                  startIcon="fab fa-github"
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

      <div className="footer-row-2">
        <div className="social-links-container">
          <div className="social-links-list">
          {footerLinksDetails.map((data, index) => (
            <div  key={index}>
              <a
                href={data.path}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="color-change-4x"
              >
                <button type="button" className={data.class}></button>
              </a>
            </div>
          ))}
          </div>
        </div>
        <div className="privacy-copyright-links-title">
          <a href="#" target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Terms
          </a>
          <p className="copyright-content">
            &copy;2021 The DesignSystems | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

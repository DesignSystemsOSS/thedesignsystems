import React, { useState } from 'react';
import Button from '../../widgets/Button';
import './style.header.css';
import HeaderOptions from './__options.json';

export default function Header() {
  const [headerOptions] = useState(HeaderOptions);
  return (
    <header className="header">
      <div className="logo-wrapper">
        <h1 className="demo-logo-icon">DS</h1>
        <p className="logo-title">The DesignSystems</p>
      </div>
      <div className="header-options-wrapper">
        <ul className="header-options-list">
          {headerOptions.map((data, index) => {
            return (
              <li className="header-option" key={index}>
                <a href={data.path} className="header-option-path">{data.title}</a>
              </li>
            )
          })}
        </ul>
        <div className="account-cta-buttons-wrapper">
          <Button type="outline" value="Login" />
          <Button type="primary" value="Create an account" />
        </div>
      </div>
    </header>
  )
}
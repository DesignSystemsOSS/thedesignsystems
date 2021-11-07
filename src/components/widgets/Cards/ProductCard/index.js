import React from 'react';
import Button from '../../Button';
import './style.widgets.cards.product-card.css';

export default function ProductCard(__ProductCardProperties) {
  return (
    <div className="product-card">
      <div className="product-details-wrapper">
        <h4 className="product-name">{__ProductCardProperties.ProductName}</h4>
        <p className="product-description">{__ProductCardProperties.ProductDescription}</p>
      </div>
      <div className="product-cta-button-wrapper">
        <a href={__ProductCardProperties.GitHubURL} className="check-github-url"><i className="fab fa-github"></i> Check GitHub</a>
        <Button type="primary" value="Get Started" onClick={() => window.open(__ProductCardProperties.GetStartedURL)} />
      </div>
    </div>
  )
}

import React, { useState } from 'react';
import Button from '../../components/widgets/Button';
import ProductCard from '../../components/widgets/Cards/ProductCard';
import './style.view.products.css';

import ProductDetails from './__products.json';

export default function Products() {
  const [productDetails] = useState(ProductDetails);
  return (
    <div className="products">
      <h1 className="products-section-title page-title">Products developed at <span className="gradient-text">The DesignSystems</span></h1>
      <p className="products-section-description">
        All our products are open-sourced and backed by developers like you. Our main focus is to create solutions for UIs and frontend applications, and provide you better and scalable components.
      </p>
      <div className="cta-github-button-wrapper buttons-wrapper">
        <a href="https://www.github.com/DesignSystemsOSS" target="_blank" rel="noreferrer">
          <Button value="Check out our GitHub Organization" startIcon="fab fa-github" />
        </a>
      </div>
      {/* products */}
      <div className="products-wrapper">
        <h2 className="products-section-heading">Our Products</h2>
        <div className="products-details-list">
          {productDetails.map((data, index) => (
            <ProductCard 
              ProductName={data.product_name}
              ProductDescription={data.product_description}
              GitHubURL={data.github_url}
              key={index}
              GetStartedURL={data.get_started_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
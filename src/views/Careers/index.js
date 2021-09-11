import React, { useState } from 'react';
import CareerOpeningCard from '../../components/widgets/Cards/CareerOpeningCard';
import './style.view-careers.css';

import CareerOpeningDetails from './__careers.json';

export default function Careers() {
  const [currentOpenings] = useState(CareerOpeningDetails);
  return (
    <div className="careers">
      <h1 className="careers-page-title page-title">Careers</h1>
      <p className="careers-page-section-description">
        We are always looking for folks who can help us build more better solutions.
        <span className="gradient-text"> #WeAreHiring</span>
      </p>
      <div className="volunteer-roles-section">
        <h3 className="volunteer-roles-title">Volunteer Roles are open now</h3>
        <div className="volunteer-roles-wrapper">
          {currentOpenings.map((data, index) => (
            <CareerOpeningCard
              RoleTitle={data.role_title}
              RoleDescription={data.role_description}
              RegistrationFormURL={data.register_form_url}
              RoleType={data.role_type}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import Button from '../../Button';
import './style.widgets.cards.career-opening-card.css';

export default function CareerOpeningCard(__CareerOpeningCardDetails) {
  return (
    <div className="career-opening-card">
      <div className="career-role-details">
        <h3 className="career-role-title">{__CareerOpeningCardDetails.RoleTitle}</h3>
        <p className="career-role-description">{__CareerOpeningCardDetails.RoleDescription}</p>
      </div>
      <Button type="primary" value="Apply for this role" onClick={() => window.open(__CareerOpeningCardDetails.RegistrationFormURL)} />
    </div>
  )
}
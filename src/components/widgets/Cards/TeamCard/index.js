import React from "react";
import "./style.cards.teamcard-styles.css";

export default function TeamCard(__TeamCardDetails) {
  return (
      <div className="profile-data">
        <div className="profile-image-wrapper gradient">
          <img
            src={__TeamCardDetails.ImageURL}
            alt={__TeamCardDetails.UserName}
            className="profile-image"
          />
        </div>
        <h3 className="member-name">{__TeamCardDetails.UserName}</h3>
        <p className="member-role">{__TeamCardDetails.RoleTitle}</p>
        <div className="profile-card-links">
          <a href={__TeamCardDetails.LinkedinProfile} className="profile-links">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={__TeamCardDetails.GithubProfile} className="profile-links">
            <i className="fab fa-github"></i>
          </a>
          <a href={__TeamCardDetails.TwitterProfile} className="profile-links">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
  );
}

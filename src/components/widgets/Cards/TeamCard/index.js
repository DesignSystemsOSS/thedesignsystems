import React from "react";
import { useState } from "react";
import TeamDetails from "./__teams-profile.json";
import "./style.cards.teamcard-styles.css";

export default function TeamCard() {
  const [teaminfo] = useState(TeamDetails);
  return (
    <div className="teams-page">
      <p className="page-title">Team</p>

      <div className="team-cards">
        <div className="team-profiles">
          {teaminfo.map((data, index) => {
            return (
              <div className="profile-data">
                <img src={data.image_url} alt={data.name} />
                <h3 className="member-name">{data.name}</h3>
                <p className="member-role">{data.role}</p>
                <a href={data["linkedin-profile"]} className="profile-links">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={data["github-profile"]} className="profile-links">
                  <i className="fab fa-github"></i>
                </a>
                <a href={data["twitter-profile"]} className="profile-links">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import './style.views.team.css';
import TeamCard from '../../components/widgets/Cards/TeamCard';
import TeamCardDetails from './__team-members.json'

export default function Team() {
  const [teamMemberDetails] = useState(TeamCardDetails);
  return (
    <div className="teams-page">
      <h1 className="page-title ">Our Team</h1>
      <div className="team-members-section-wrapper">
        {teamMemberDetails.map((data, index) => (
          <TeamCard
            ImageURL={data.image_url}
            UserName={data.name}
            RoleTitle={data.role}
            LinkedinProfile={data["linkedin-profile"]}
            GithubProfile={data["github-profile"]}
            TwitterProfile={data['twitter-profile']}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
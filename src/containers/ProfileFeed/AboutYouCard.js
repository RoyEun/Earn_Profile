import React from 'react';
import styled from 'styled-components';

const AboutYouContainer = styled.div`
  background-color: white;
`;

const AboutYouCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> Profile </h3>
      <AboutYouContainer className="profile-review-status-card">
        <div>
          <div> ? </div>
          <div> For people outside my network that want to get in touch with me, I can now be reached through Earn.com </div>
        </div>
      </AboutYouContainer>
    </div>
  );
};

export default AboutYouCard;
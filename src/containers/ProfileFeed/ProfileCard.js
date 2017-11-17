import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/photo_profile.jpg';

const ProfileReviewStatusCard = styled.div`
  background-color: #fff;
  margin-bottom: 24px;

  & > * {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  & > * > * {
    display: table-cell;
  }

  & > * > *:nth-child(1) {
    vertical-align: top;
  }
`;

const Img = styled.img`
  height: 238px;
  width: 238px;
  display: block;
`;

const ProfileCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> Profile </h3>
      <ProfileReviewStatusCard className="profile-review-status-card">
        <div>
          <div>
            <Img alt="Profile-photo" src={Logo} />
          </div>
          <div> Your profile is unverified. Complete the verification task in your inbox </div>
        </div>
      </ProfileReviewStatusCard>
    </div>
  );
};

export default ProfileCard;
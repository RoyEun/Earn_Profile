import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.svg';

const ProfileReviewStatusCard = styled.div`
  background-color: white;
`;

const PhotoContainer = styled.div`
  height: 238px;
  width: 238px;
`;

const ImgContainer = styled.a`
  height: 100%;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ProfileCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> Profile </h3>
      <ProfileReviewStatusCard className="profile-review-status-card">
        <div>
          <PhotoContainer className="photo">
            <ImgContainer>
              <Img alt="Profile-photo" src={Logo} />
            </ImgContainer>
          </PhotoContainer>
          <div> Your profile is unverified. Complete the verification task in your inbox </div>
        </div>
      </ProfileReviewStatusCard>
    </div>
  );
};

export default ProfileCard;
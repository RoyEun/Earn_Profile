import React from 'react';
import styled from 'styled-components';
import NotificationCard from './NotificationCard';
import ProfileCard from './ProfileCard';
import AboutYouCard from './AboutYouCard';
import PublicProfileCard from './PublicProfileCard';
import YourPricesCard from './YourPricesCard';

const ProfileFeedDiv = styled.div`
  margin: 60px auto;
  padding: 0 24px;
  max-width: 571px;
`;

const ProfileFeed = (props) => {
  return (
    <ProfileFeedDiv>
      <NotificationCard />
      <ProfileCard />
      <AboutYouCard />
      <PublicProfileCard />
      <YourPricesCard />
    </ProfileFeedDiv>
  );
};

export default ProfileFeed;
import React from 'react';
import styled from 'styled-components';
import NotificationCard from './NotificationCard';
import ProfileCard from './ProfileCard';
import AboutYouCard from './AboutYouCard';
import PublicProfileCard from './PublicProfileCard';
import YourPricesCard from './YourPricesCard';

const ProfileFeedDiv = styled.div`

`;

const ProfileFeed = (props) => {
  return (
    <ProfileFeedDiv>
      <NotificationCard />
      <ProfileCard />
      <AboutYouCard />
      <PublicProfileCard />
      <YourPricesCard />
      <YourPricesCard />
      <YourPricesCard />
      <YourPricesCard />
      <YourPricesCard />
      <YourPricesCard />
    </ProfileFeedDiv>
  );
};

export default ProfileFeed;
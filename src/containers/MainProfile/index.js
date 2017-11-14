import React from 'react';
import styled from 'styled-components';
import PanelProfile from '../PanelProfile';
import ProfileFeed from '../ProfileFeed';

const Div = styled.div`
  margin: 20px auto 60px;
`;

const MainProfile = (props) => {
  return (
    <Div>
      <PanelProfile />
      <ProfileFeed />
    </Div>
  );
};

export default MainProfile;
import React from 'react';
import styled from 'styled-components';
import PanelProfile from '../PanelProfile';
import ProfileFeed from '../ProfileFeed';

const Div = styled.div`
`;

const MainProfileContainer = styled.div`
   margin: 20px auto 60px;
`;

const SectionDefault = styled.div`
  box-sizing: border-box;
`;

const PanelLayout = styled.div`
  margin: auto;

  & > * > *:nth-child(1) {
  	width: 236px;
  	padding-right: 20px;
  }

  & > * > * {
  	vertical-align: top;
  	display: table-cell;
  	vertical-align: middle;
  }
`;

const MainProfile = (props) => {
  return (
    <Div>
      <MainProfileContainer>
        <PanelLayout>
          <SectionDefault>
            <PanelProfile />
      	    <ProfileFeed />
      	  </SectionDefault>
      	</PanelLayout>
      </MainProfileContainer>
    </Div>
  );
};

export default MainProfile;
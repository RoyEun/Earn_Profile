import React from 'react';
import PanelList from './PanelList';
import styled from 'styled-components';

const PanelDiv = styled.div`
  box-sizing: border-box;
`;

const PanelProfile = (props) => {
  return (
  	  <PanelDiv>
  	    <PanelList />
  	  </PanelDiv>  	
  );
};

export default PanelProfile;
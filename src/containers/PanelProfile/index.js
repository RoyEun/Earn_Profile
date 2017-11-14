import React from 'react';
import PanelList from './PanelList';
import styled from 'styled-components';

const Div = styled.div`
   margin: 60px auto;
   padding: 0 24px;
   max-width: none;
`;

const PanelDiv = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 40px 0;
`;

const PanelProfile = (props) => {
  return (
  	  <PanelDiv>
  	    <PanelList />
  	  </PanelDiv>  	
  );
};

export default PanelProfile;
import React from 'react';
import styled from 'styled-components';

import PanelListItem from './PanelListItem';

const listNames = ['Public profile', 'Your prices', 'Donations', 'Lists', 'Account details', 'Security', 'Linked accounts'];

const Div = styled.div`
  margin: auto;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const ListContainer = styled.div`
  width: 236px;
  padding-right: 20px;

  &:first-child {
  	font-weigth: bold;
  }
`;

const PanelContainer = styled.div`
  position: fixed;
`;

const PanelListContainer = styled.div`
  width: 215px;
  padding: 1px;
  padding-left: 24px;
  margin-left: -24px;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`;


const PanelList = (props) => {
  return (
  	<Div>
  	  <ListContainer>
  	    <PanelContainer>
  	      {listNames.map((item) => {
  	  	    return <PanelListItem item={item}/>
  	      })}
  	    </PanelContainer>
  	  </ListContainer>
  	</Div>
  );
};

export default PanelList;
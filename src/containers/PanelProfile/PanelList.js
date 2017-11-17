import React from 'react';
import styled from 'styled-components';

import PanelListItem from './PanelListItem';

const listNames = ['Public profile', 'Your prices', 'Donations', 'Lists', 'Account details', 'Security', 'Linked accounts'];

const Div = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const ListContainer = styled.div`
  width: 236px;
  padding-right: 20px;
`;

const PanelContainer = styled.div`
  top: 72px;
  width: 215px;
  padding: 1px;
  padding-left: 24px;
  margin-left: -24px;
  position: fixed;
  bottom: 0;
  overflow: hidden;
`;

const PanelListContainer = styled.div`
  border-top: 0;
  padding-top: 0;
`;

const BoxTaskContainer = styled.div`
  padding-top: 48px;
`;

const BoxTaskBorderBox = styled.div`
  box-sizing: border-box;
`;


const PanelList = (props) => {
  return (
  	<Div>
  	  <ListContainer>
  	    <PanelContainer>
  	      <BoxTaskContainer>
  	        <PanelListContainer>
  	          <BoxTaskBorderBox>
  	            {listNames.map((item) => {
  	  	          return <PanelListItem item={item}/>
  	            })}
  	          </BoxTaskBorderBox>
  	        </PanelListContainer>
  	      </BoxTaskContainer>
  	    </PanelContainer>
  	  </ListContainer>
  	</Div>
  );
};

export default PanelList;
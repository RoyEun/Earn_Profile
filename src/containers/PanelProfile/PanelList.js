import React from 'react';
import PanelListItem from './PanelListItem';

const listNames = ['Public profile, Your prices, Donations, Lists, Account details, Security, Linked accounts'];

const PanelList = (props) => {
  return (
  	<div>
  	  {listNames.map((item) => {
  	  	<PanelListItem title={item}/>
  	  })}
  	</div>
  );
};

export default PanelList;
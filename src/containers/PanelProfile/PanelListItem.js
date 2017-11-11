import styled from 'styled-componenets';
import React from 'react';

let PanelListItem;

export default ({title}) => {
	PanelListItem = styled.div`
	  content: ${title};
	`;

	return (
		<div>
		  <div>
			{PanelListItem}
		  </div>
	    </div>
	);
}
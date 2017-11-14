import styled from 'styled-components';
import React from 'react';

const Div = styled.div`
   margin: 20px auto 60px;
`;

const ItemContainer = styled.div`
	display: block;
	margin: 0 auto;
`;

export default ({item}) => {
	return (
		<Div>
		  <ItemContainer>
			{item}
		  </ItemContainer>
	    </Div>
	);
}
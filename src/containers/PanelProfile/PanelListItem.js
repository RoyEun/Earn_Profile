import styled from 'styled-components';
import React from 'react';

const Div = styled.div`
   position: relative;
   margin: 18px 0;
   color: #000;
`;

const ItemContainer = styled.a`
  display: table;
  table-layout: fixed;
`;

const SpaceBox = styled.div`
  vertical-align: middle;
`;

const ItemBox = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export default ({item}) => {
	return (
		<Div>
		  <ItemContainer>
		    <SpaceBox />
		    <ItemBox>
			  {item}
			</ItemBox>
		  </ItemContainer>
	    </Div>
	);
}
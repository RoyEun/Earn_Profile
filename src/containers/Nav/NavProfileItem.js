import styled from 'styled-components';
import React from 'react';

const NavProfileItem = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  margin: auto;
  top: 8px;
`;

const Img = styled.img`
  
  &:after {
  	padding-right: 10px;
  }

  display: block;
  margin: auto;
  height: 30px;
  width: 30px;

`;

export default ({alt, src}) => {
  return (
  	<NavProfileItem>
  	  <a>
  		<Img alt={alt} src={src} />
  	  </a>
  	</NavProfileItem>
  );
}
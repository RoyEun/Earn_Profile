import React from 'react';
import styled from 'styled-components';

import message from '../../images/message.svg';
import search from '../../images/search.svg';
import NavProfileItem from './NavProfileItem';

let profileList = [message, search];

// import NavbarSearch from './NavbarSearch';
// import NavbarMessage from './NavbarMessage';

const NavProfileContainer = styled.div`
  before: {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 72px;
  };

  height: 75%;
  margin: 0 4px;
  padding-bottom: 22px;
  width: 100%;
  border-left: 1px solid #d6a156;
  border-right: 1px solid #d6a156;
`;

const NavProfile = (props) => {
  return (
    <NavProfileContainer>
        { profileList.map((item) => <NavProfileItem alt={item.toString()} src={item}/>)}
    </NavProfileContainer>
  );
};


export default NavProfile;
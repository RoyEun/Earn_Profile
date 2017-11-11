import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

import NavProfile from './NavProfile.js';
import MainProfile from '../MainProfile';


const Navbar = styled.div`
  background: #fff;
  bottom-border: black;
  position: fixed;
  top: 0px;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  margin-top: 6px;
`;

const NavBarLogo = styled.a`
  display: block;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  width: 24px;
  z-index: 1;
`;

const Img = styled.img`
  display: block;
  position: absolute;
  width: 60px;
  height: 60px;
  margin: auto;
`;

const NavMenu = styled.ul`
  max-width: 1136px;
  padding: 0 100px;
  margin: auto;
  list-style: none;
  left: 0;
  right: 0;
  bottom: 0;
  display: inline-block;
  vertical-align: middle;
`;

const MenuItemContainer = styled.a`
  padding: 20px;
  left: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: auto;
  padding: 0;
  display: inline-block;
  position: relative;
  color: #d6a156;
  font-size: 16px;
  top: 20px;
  font-weight: light-bold;
  letter-spacing: 2.5px;
  line-height: 1.42857143;
  -webkit-font-smoothing: antialiased;
  font-family: 'Titillium Web','Helvetica Neue',Helvetica,Arial,sans-serif;
`;

const NavMenuRight = styled.div`
  margin: auto 96px auto 0;
  display: table;
  table-layout: fixed;
  width: auto!important;
  height: 62px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  text-align: right;
`;

const Separator = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  font-family: 'Titillium Web','Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 16px;
  position: relative;
  margin: 0;
  color: #404040;
  line-height: 1.42857143;
  letter-spacing: 1px;
`;




class Nav extends Component {
  render() {
    return (
      <Navbar>
          <NavBarLogo className="navbar-logo">
            <Img alt="Earn.com" src={logo}/>
          </NavBarLogo>
          <div className="navbar-list">
            <NavMenu>
              <MenuItemContainer><MenuItem>Business</MenuItem></MenuItemContainer>
              <MenuItemContainer><MenuItem>Lists</MenuItem></MenuItemContainer>
              <MenuItemContainer><MenuItem>Community</MenuItem></MenuItemContainer>
            </NavMenu>
            <NavMenuRight>
              <Separator />
              <NavProfile />
            </NavMenuRight>
          </div>
      </Navbar>
    );
  }
}

export default Nav;

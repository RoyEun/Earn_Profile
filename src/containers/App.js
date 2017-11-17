import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import MainProfile from './MainProfile';

const Subsection = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;

  & > :nth-child(1) {
    padding-top: 100px;
  }

  & > * {
    display: table-cell;
    vertical-align: middle;
    padding: 40px 0;
  }

  & > * > * {
    padding: 0 24px;
    max-width: 984px;
  }
`;

const Div = styled.div`
  -ms-overflow-style: scrollbar;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  font-family: 'Titillium Web','Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 16px;
  position: relative;
  margin: 0;
  color: #404040;
  line-height: 1.42857143;
  letter-spacing: 1px;
  overflow: auto;
  overflow-y: scroll;
  padding-top: 1px;
  margin-top: -1px;
  background: #fafafa;

  & > * {
    box-sizing: border-box;
  }
`;

class App extends Component {
  render() {
    return (
      <Div>
        <Nav />
        <Subsection>
          <MainProfile />
        </Subsection>
      </Div>
    );
  }
}

export default App;

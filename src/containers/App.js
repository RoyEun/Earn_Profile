import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import MainProfile from './MainProfile';

const Subsection = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1000px", backgroundColor:"#FAFAFA"}}>
        <Nav />
        <Subsection>
          <MainProfile />
        </Subsection>
      </div>
    );
  }
}

export default App;

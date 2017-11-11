import React, { Component } from 'react';

import Nav from './Nav';
import MainProfile from './MainProfile'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1000px", backgroundColor:"#FAFAFA"}}>
        <Nav />
        <MainProfile />
      </div>
    );
  }
}

export default App;

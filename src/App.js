import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    guests: [
      {
        name: '',
        isCofnrimed: ''
      },
      {
        name: '',
        isCofnrimed: ''
      }
      
    ]
  }

  totalInvitedGuest = () => {

  }

  attendedGuest = () => {

  }

  unconfirmedGuests = () => {

  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

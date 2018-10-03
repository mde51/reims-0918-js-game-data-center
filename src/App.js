import React, { Component } from 'react';
import './App.css';

import Jumbotron from './Jumbotron'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Jumbotron />
        </header>
      </div>
    );
  }
}

export default App;

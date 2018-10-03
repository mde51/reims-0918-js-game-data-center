import React, { Component } from 'react';
import './App.css';

import MainJumbotron from './Jumbotron';
import ResearchBar from './Research.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainJumbotron />
          <ResearchBar />
        </header>
      </div>
    );
  }
}

export default App;

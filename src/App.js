import React, { Component } from 'react';
import './App.css';

import MainJumbotron from './MainJumbotron';
import ResearchBar from './ResearchBar';

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

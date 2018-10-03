import React, { Component } from 'react';
import './App.css';

import Jumbotron from './Jumbotron';
import Form from './Research.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Jumbotron />
          <Form />
        </header>
      </div>
    );
  }
}

export default App;

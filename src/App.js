import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';

import GamesList from './GamesList';

class App extends Component {
  render() {
    return (
      <Container>
        <GamesList />
      </Container>
    );
  }
}

export default App;

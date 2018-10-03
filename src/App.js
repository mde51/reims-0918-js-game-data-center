import React, { Component } from "react";
import { Container } from "reactstrap";

import "./App.css";

import GamesList from "./GamesList";
import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainJumbotron />
          <ResearchBar />
        </header>
        <Container>
          <GamesList />
        </Container>
      </div>
    );
  }
}

export default App;

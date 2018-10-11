import React, { Component } from "react";
import { Container } from "reactstrap";

import "./App.css";

import GamesList from "./GamesList";
import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import Table from "./Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [
        {
          name: "Mario Kart",
          cover:
            "https://i2.wp.com/geekirc.me/wp-content/uploads/2018/02/Switch-Mario-Kart-1-768x480.jpg?fit=768%2C480&resize=350%2C200"
        },
        {
          name: "FIFA 2019",
          cover:
            "https://i1.wp.com/kopitiambot.com/wp-content/uploads/2018/09/httpscdn.mos_.cms_.futurecdn.netLLKcYf2ybsiiqZ5LT9ZvMY-1200-80.jpg?fit=1200%2C675&ssl=1&resize=350%2C200"
        },
        {
          name: "Crazy Stuff",
          cover:
            "https://www.crazy-stuff.net/crazy-img/content/flash/350x200/48-348ecf74-dinostrikescreen9.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainJumbotron />
          <ResearchBar />
        </header>
        <Container>
          
        <GamesList list={this.state.gamesList}/>
       
          <Table />
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import GamesList from "./GamesList";
import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import Table from "./Table";
import UserName from "./UserName";
import AddToFav from "./AddToFav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [
        {
          name: "Mario Kart",
          cover:
            "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioKart_image1600w.jpg"
        },
        {
          name: "Mario Kart",
          cover:
            "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioKart_image1600w.jpg"
        },
        {
          name: "Mario Kart",
          cover:
            "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioKart_image1600w.jpg"
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
          <GamesList list={this.state.gamesList} />
          <Row>
            <Col>
              <UserName />
            </Col>
            <Col>
              <AddToFav />
            </Col>
          </Row>
          <Table />
        </Container>
      </div>
    );
  }
}

export default App;

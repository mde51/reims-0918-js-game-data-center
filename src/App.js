import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import GamesList from "./GamesList";
import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import Table from "./Table";
const axios = require("axios");

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

  componentDidMount() {
    axios
      .get("https://api-endpoint.igdb.com", {
        headers: {
          "user-key": "e8c209a8f793f520e4ab897c31356bcf",
          Accept: "application/json"
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log("error", e);
      });
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
            <Col />
            <Col />
          </Row>
          <Table />
        </Container>
      </div>
    );
  }
}

export default App;

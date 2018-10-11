import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import GamesList from "./GamesList";
import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import Table from "./Table";
const axios = require("axios");

const sampleGame = "Nothing from API";

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
      ],
      test: sampleGame
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/",
        {
          headers: {
            "user-key": "e8c209a8f793f520e4ab897c31356bcf",
            Accept: "application/json"
          }
        }
      )
      .then(response => {
        console.log(response);
        // return this.setState({ test: response.data[0].cover.url });
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
        <p>
          Test API image : <img src={this.state.test} />
        </p>
      </div>
    );
  }
}

export default App;

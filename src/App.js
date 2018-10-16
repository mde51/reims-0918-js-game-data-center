import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import GamesList from "./GamesList";
import UserName from "./UserName";
import AddToFav from "./AddToFav";
import Table from "./Table";
import GameMenu from "./GameMenu";
import ChosenGame from "./ChosenGame";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      selectedGame: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&order=rating:desc",
        {
          headers: {
            "user-key": "e8c209a8f793f520e4ab897c31356bcf",
            Accept: "application/json"
          }
        }
      )
      .then(response => {
        console.log(response.data);
        return this.setState({
          gamesList: response.data,
          selectedGame: response.data[5]
        });
      })
      .catch(e => {
        console.log("error", e);
      });
  }

  render() {
    return (
      <section>
        <div className="App">
          <header className="App-header">
            <MainJumbotron />
            <ResearchBar />
          </header>
          <Container>
            <GamesList list={this.state.gamesList} />
            <ChosenGame game={this.state.selectedGame} />
            <Row>
              <Col>
                <UserName />
              </Col>
              <Col>
                <AddToFav />
              </Col>
            </Row>
            <Table />
            <GameMenu />
          </Container>
        </div>
      </section>
    );
  }
}

export default App;

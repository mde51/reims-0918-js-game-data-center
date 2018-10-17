import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import GamesList from "./GamesList";
import UserName from "./UserName";
import Table from "./Table";
import GameMenu from "./GameMenu";
import ChosenGame from "./ChosenGame";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: null,
      selectedGame: null,
      gameSearch: null
    };
    this.selectGame = this.selectGame.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
  }

  selectGame(game) {
    this.setState({
      selectedGame: game,
      gameSearch: null,
      gamesList: null
    });
  }

  handleGameSearchChange(event) {
    //appel api ici
    axios
      .get(
        `https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&search=${
          event.target.value
        }&order=popularity:desc&limit=6`,
        {
          headers: {
            "user-key": "a1ddea779ca1b0bd1a8f2525e6bd2711",
            Accept: "application/json"
          }
        }
      )
      .then(response => {
        return this.setState({ gamesList: response.data });
      })
      .catch(e => {});
    this.setState({
      gameSearch: event.target.value
    });
  }

  componentDidMount() {
    axios
      .get(
        "https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&order=rating:desc&limit=6",
        {
          headers: {
            "user-key": "a1ddea779ca1b0bd1a8f2525e6bd2711",
            Accept: "application/json"
          }
        }
      )
      .then(response => {
        return this.setState({
          gamesList: response.data
        });
      })
      .catch(e => {});
  }

  render() {
    return (
      <section>
        <div className="App">
          <header className="App-header">
            <MainJumbotron />
            <ResearchBar
              value={this.state.gameSearch}
              onChange={this.handleGameSearchChange}
            />
          </header>
          <Container>
            {this.state.gamesList && (
              <GamesList
                list={this.state.gamesList}
                selectGame={this.selectGame}
              />
            )}
            {this.state.selectedGame && (
              <div>
                <ChosenGame game={this.state.selectedGame} />
                <Row>
                  <Col xs="12" sm="6" className="mt-4">
                    <UserName />
                  </Col>
                </Row>
                <Table />
                <GameMenu />
              </div>
            )}
          </Container>
        </div>
      </section>
    );
  }
}

export default App;

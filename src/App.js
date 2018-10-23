import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import GamesList from "./GamesList";
import UserName from "./UserName";
import GameMenu from "./GameMenu";
import ChosenGame from "./ChosenGame";
import PlayersList from "./PlayersList";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayer: null,
      tempPlayer: null,
      gamesList: null,
      selectedGame: null,
      gameSearch: "",
      loading: false,
      players: []
    };

    this.selectGame = this.selectGame.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
    this.handleNewPlayerChange = this.handleNewPlayerChange.bind(this);
    this.submitNewPlayer = this.submitNewPlayer.bind(this);
  }

  selectGame(game) {
    this.setState({
      selectedGame: game,
      gameSearch: "",
      gamesList: null
    });
  }

  handleNewPlayerChange(event) {
    this.setState({ tempPlayer: event.target.value });
  }

  submitNewPlayer() {
    this.setState({
      players: [...this.state.players, {
        name: this.state.tempPlayer,
      }]
    });
  }

  handleGameSearchChange(event) {
    //appel api ici
    this.setState({ loading: true });
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
        return this.setState({ gamesList: response.data, loading: false });
      })
      .catch(e => {
        console.log("error", e);
      });
    this.setState({
      gameSearch: event.target.value
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
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
          gamesList: response.data,
          loading: false
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
            {this.state.loading && (
              <div id="loader" />
            )}
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
                  <Col>
                    <UserName
                    handleChange={this.handleNewPlayerChange}
                    submit={this.submitNewPlayer}
                     />
                  </Col>
                </Row>
                <GameMenu />
                <PlayersList list={this.state.players} />
              </div>
            )}
          </Container>
        </div>
      </section>
    );
  }
}

export default App;

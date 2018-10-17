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
      selectedGame: {},
      gameSearch: "",
      newPlayer: "",
      testArray: [],
      temp: ""
    };
    this.selectGame = this.selectGame.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  selectGame(game) {
    this.setState({ selectedGame: game });
  }

  handleChange(event) {
    this.setState({ temp: event.target.value });
  }

  submit() {
    this.setState({ newPlayer: this.state.temp });
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
      .catch(e => {
        console.log("error", e);
      });
    this.setState({
      gameSearch: event.target.value
    });
  }

  componentDidMount() {
    axios
      .get(
        "https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&order=rating:desc",
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
            <ResearchBar
              value={this.state.gameSearch}
              onChange={this.handleGameSearchChange}
            />
          </header>
          <Container>
            <GamesList
              list={this.state.gamesList}
              selectGame={this.selectGame}
            />
            <ChosenGame game={this.state.selectedGame} />
            <Row>
              <Col>
                <UserName
                  temp={this.state.temp}
                  newPlayer={this.state.newPlayer}
                  handleChange={this.handleChange}
                  submit={this.submit}
                />
              </Col>
              <Col>
                <AddToFav />
              </Col>
            </Row>
            <Table
              value={this.state.newPlayer}
            />
            <GameMenu />
          </Container>
        </div>
      </section>
    );
  }
}

export default App;

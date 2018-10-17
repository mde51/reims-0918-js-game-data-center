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
      testArray: [""]
    };
    this.selectGame = this.selectGame.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
    this.handleAddPlayerChange = this.handleAddPlayerChange.bind(this);
    this.test = this.test.bind(this);
  }

  selectGame(game) {
    this.setState({ selectedGame: game });
  }

  test(newPlayer) {
    this.setState({testArray : newPlayer});
  }

  handleAddPlayerChange(event) {
    this.setState({ newPlayer: event.target.value });
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
            {/* <GamesList
              list={this.state.gamesList}
              selectGame={this.selectGame}
            />
            <ChosenGame game={this.state.selectedGame} /> */}
            <Row>
              <Col>
                <UserName
                  addPlayer={this.addPlayer}
                  handleAddPlayerChange={this.handleAddPlayerChange}
                  test={this.state.test}
                />
              </Col>
              <Col>
                <AddToFav />
              </Col>
            </Row>
            <Table
              value={this.setState.addPlayer}
              onChange={this.handleAddPlayerChange}
            />
            <GameMenu />
          </Container>
        </div>
      </section>
    );
  }
}

export default App;

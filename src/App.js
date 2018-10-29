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
import PreviousNext from "./Pagination";
import GamesFavsList from "./GamesFavsList";

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
      players: [],
      page: 0,
      favs: [],
      listFavs: false
    };

    this.selectGame = this.selectGame.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
    this.handleNewPlayerChange = this.handleNewPlayerChange.bind(this);
    this.submitNewPlayer = this.submitNewPlayer.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.handleDisplayFavs = this.handleDisplayFavs.bind(this);
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
      players: [
        ...this.state.players,
        {
          name: this.state.tempPlayer
        }
      ]
    });
  }

  handleNextPage = () => {
    this.setState({ page: this.state.page + 1 }, () =>
      axios
        .get(
          `https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&search=${
            this.state.gameSearch
          }&order=popularity:desc&limit=6&offset=${this.state.page * 6}`,
          {
            headers: {
              "user-key": "31f397b7994b8d46b0d5aff3b41eb376",
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          return this.setState({ gamesList: response.data, loading: false });
        })
        .catch(e => {
          console.log("error", e);
        })
    );
  };

  handlePreviousPage = () => {
    this.setState({ page: this.state.page - 1 }, () =>
      axios
        .get(
          `https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&search=${
            this.state.gameSearch
          }&order=popularity:desc&limit=6&offset=${this.state.page * 6}`,
          {
            headers: {
              "user-key": "31f397b7994b8d46b0d5aff3b41eb376",
              Accept: "application/json"
            }
          }
        )
        .then(response => {
          return this.setState({ gamesList: response.data, loading: false });
        })
        .catch(e => {
          console.log("error", e);
        })
    );
  };

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
            "user-key": "31f397b7994b8d46b0d5aff3b41eb376",
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
        "https://fathomless-bayou-60427.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=*&order=popularity:desc&limit=6",
        {
          headers: {
            "user-key": "31f397b7994b8d46b0d5aff3b41eb376",
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

  handleAddToFav(game) {
    this.setState(prevState => ({ favs: [...prevState.favs, game] }));

    console.log(this.state.favs);
  }

  handleDisplayFavs() {
    this.setState({ listFavs: true });
  }
  render() {
    return (
      <section>
        <div className="App">
          <header className="App-header">
            <MainJumbotron
              favs={this.state.favs}
              handleDisplayFavs={this.handleDisplayFavs}
            />
            {this.state.loading && <div id="loader" />}
            <ResearchBar
              value={this.state.gameSearch}
              onChange={this.handleGameSearchChange}
              onClick={(name, cover, summary, storyline, selectGame) =>
                selectGame({
                  name: name,
                  cover: cover,
                  summary: summary,
                  storyline: storyline
                })
              }
            />
          </header>

          <Container>
            {this.state.gamesList && (
              <div>
                <PreviousNext
                  page={this.state.page}
                  handleNextPage={this.handleNextPage}
                  handlePreviousPage={this.handlePreviousPage}
                />
                <GamesList
                  list={this.state.gamesList}
                  selectGame={this.selectGame}
                />
              </div>
            )}
            {this.state.listFavs && (
              <div>
                <PreviousNext
                  page={this.state.page}
                  handleNextPage={this.handleNextPage}
                  handlePreviousPage={this.handlePreviousPage}
                />
                <GamesFavsList
                  list={this.state.favs}
                  selectGame={this.selectGame}
                />
              </div>
            )}
            {this.state.selectedGame && (
              <div>
                <ChosenGame
                  game={this.state.selectedGame}
                  onAddToFav={this.handleAddToFav}
                />
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

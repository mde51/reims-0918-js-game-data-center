import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

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
import FinalScores from "./FinalScores";
import Footer from "./Footer";
import HistoryOfRounds from "./HistoryOfRounds";
import { fetchGames } from "./api/games";
import { newRound } from "./lib/newRound";
import { scoreTable } from "./lib/scoreTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlayer: null,
      tempPlayer: "",
      gamesList: null,
      selectedGame: null,
      gameStarted: false,
      gameSearch: "",
      loading: false,
      players: [],
      page: 0,
      favs: [],
      listFavs: false,
      history: {},
      endScores: null,
      displayFinalScores: false,
      doubleUserName: false
    };

    this.selectGame = this.selectGame.bind(this);
    this.handleGameSearchChange = this.handleGameSearchChange.bind(this);
    this.handleNewPlayerChange = this.handleNewPlayerChange.bind(this);
    this.handleInputScoreChange = this.handleInputScoreChange.bind(this);
    this.submitNewPlayer = this.submitNewPlayer.bind(this);
    this.submitFinalScorePlayer = this.submitFinalScorePlayer.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.handleDisplayFavs = this.handleDisplayFavs.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleNewRound = this.handleNewRound.bind(this);
    this.handleEndGame = this.handleEndGame.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
  }

  handleAddToFav(game) {
    const gameId = this.state.selectedGame.id;
    const check = (favArray, gameId) => {
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i].id === gameId) {
          return true;
        }
      }
      return false;
    };
    if (!check(this.state.favs, gameId)) {
      this.setState({ favs: [...this.state.favs, game] });
    }
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

  handleInputScoreChange(name, inputScore) {
    this.setState({
      players: this.state.players.map(
        player =>
          player.name === name ? { ...player, inputScore: inputScore } : player
      )
    });
  }

  submitNewPlayer() {
    const tempPlayer = this.state.tempPlayer.toUpperCase();
    const check = (arr, value) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === value) {
          return true;
        }
      }
      return false;
    };
    if (check(this.state.players, tempPlayer)) {
      this.setState({ doubleUserName: true });
    } else {
      this.setState({
        players: [
          ...this.state.players,
          {
            name: tempPlayer,
            inputScore: 0,
            finalScore: 0
          }
        ],
        tempPlayer: "",
        doubleUserName: false
      });
    }
  }

  submitFinalScorePlayer(name) {
    this.setState({
      players: [
        ...this.state.players.map(player => {
          const tempScore = parseInt(player.inputScore);
          return name === player.name
            ? { ...player, inputScore: 0, finalScore: tempScore }
            : player;
        })
      ]
    });
  }

  handleNextPage = () => {
    this.setState({ page: this.state.page + 1 }, () =>
      fetchGames(this.state.page, this.state.gameSearch)
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
      fetchGames(this.state.page, this.state.gameSearch)
        .then(response => {
          return this.setState({ gamesList: response.data, loading: false });
        })
        .catch(e => {
          console.log("error", e);
        })
    );
  };

  handleGameSearchChange(event) {
    if (event.target.value.length > 2) {
      this.setState({ loading: true });
      fetchGames(0, event.target.value)
        .then(response => {
          return this.setState({ gamesList: response.data, loading: false });
        })
        .catch(e => {
          console.log("error", e);
        });
    }
    //mise a jour du champ
    this.setState({
      gameSearch: event.target.value
    });
  }

  handleGameStart() {
    this.setState({ gameStarted: true });
  }

  handleNewRound() {
    this.setState({
      history: newRound(
        this.state.players,
        this.state.history,
        this.state.selectedGame.id
      )
    });
  }

  handleEndGame() {
    const newHistory = newRound(
      this.state.players,
      this.state.history,
      this.state.selectedGame.id
    );
    const endScores = scoreTable(newHistory, this.state.selectedGame.id);
    const compare = (a, b) => {
      const scoreA = a.score;
      const scoreB = b.score;
      let comparison = 0;
      if (scoreA > scoreB) {
        comparison = -1;
      } else if (scoreA < scoreB) {
        comparison = 1;
      }
      return comparison;
    };
    endScores.sort(compare);

    this.setState({
      gameStarted: false,
      history: newHistory,
      endScores: endScores,
      displayFinalScores: true
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetchGames(0)
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


  handleDisplayFavs() {
    this.setState({ listFavs: true });
  }

  handleXClick = event => {
    this.setState({
      gameSearch: event.target.value.replace(/""/)
    });
  };
  render() {
    const check = (favArray, gameId) => {
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i].id === gameId) {
          return true;
        }
      }
      return false;
    };
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
              gameSearch={this.state.gameSearch}
              onXClick={this.handleXClick}
              onChange={this.handleGameSearchChange}
              onClick={(name, cover, summary, storyline, id, selectGame) =>
                selectGame({
                  name: name,
                  cover: cover,
                  summary: summary,
                  storyline: storyline,
                  id: id
                })
              }
            />
          </header>

          <Container>
            {this.state.gamesList && (
              <div>
                <Row>
                  <PreviousNext
                    page={this.state.page}
                    handleNextPage={this.handleNextPage}
                    handlePreviousPage={this.handlePreviousPage}
                  />
                </Row>
                <GamesList
                  list={this.state.gamesList}
                  selectGame={this.selectGame}
                />
              </div>
            )}
            {this.state.listFavs && (
              <div>
                <GamesFavsList
                  listFavs={this.state.favs.slice(0, 6)}
                  selectGame={this.selectGame}
                />
              </div>
            )}
            {this.state.selectedGame && (
              <div>
                <ChosenGame
                  disabledFav={check(
                    this.state.favs,
                    this.state.selectedGame.id
                  )}
                  game={this.state.selectedGame}
                  onAddToFav={this.handleAddToFav}
                />
                {this.state.displayFinalScores && (
                  <FinalScores list={this.state.endScores} />
                )}

                {!this.state.gameStarted && (
                  <div id="table">
                    <p className="text">Add your usernames !</p>
                    <Row>
                      <Col>
                        <UserName
                          tempPlayer={this.state.tempPlayer}
                          handleChange={this.handleNewPlayerChange}
                          submitNewPlayers={this.submitNewPlayer}
                        />
                        {this.state.doubleUserName && (
                          <p className="alert">
                            This username has been submitted already !
                          </p>
                        )}
                      </Col>
                    </Row>
                    <Button
                      color="primary"
                      className="start"
                      onClick={this.handleGameStart}
                    >
                      START!
                    </Button>
                  </div>
                )}
                {this.state.gameStarted && (
                  <GameMenu
                    handleNewRound={this.handleNewRound}
                    handleEndGame={this.handleEndGame}
                  />
                )}
                {this.state.players.length > 0 && (
                  <PlayersList
                    list={this.state.players}
                    handleInputScoreChange={this.handleInputScoreChange}
                    submitFinalScorePlayer={this.submitFinalScorePlayer}
                    gameStarted={this.state.gameStarted}
                  />
                )}
                {(this.state.gameStarted || this.state.displayFinalScores) && (
                  <HistoryOfRounds
                    history={this.state.history}
                    gameId={this.state.selectedGame.id}
                  />
                )}
              </div>
            )}
          </Container>
          <Footer />
        </div>
      </section>
    );
  }
}

export default App;

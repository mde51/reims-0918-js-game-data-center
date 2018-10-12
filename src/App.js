import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import MainJumbotron from "./MainJumbotron";
import ResearchBar from "./ResearchBar";
import GamesList from "./GamesList";
import UserName from "./UserName";
import AddToFav from "./AddToFav";
import RankTable from "./RankTable";
import GameMenu from "./GameMenu";

const axios = require("axios");

const sampleGame = "Nothing from API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      test: sampleGame,
      playerName: "cheval"
    };
    // this.onChange = this.onChange.bind(this);
  }

  // onChange(event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  // }
  
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
        return this.setState({ gamesList: response.data });
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
            <Col>
              <UserName player={this.state.playerName}/>
            </Col>
            <Col>
              <AddToFav />
            </Col>
          </Row>
          <RankTable player={this.state.playerName}/>
          <GameMenu />
        </Container>
        <p>
          Test API image : <img src={this.state.test} />
        </p>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";

const changeCoverSize = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_1080p";
  return urlToArray.join("/");
};

const ChosenGame = ({ game }) => (
  <div>
    <Card>
      {game.cover && (
        <CardImg src={changeCoverSize(game.cover.url)} alt="Card image cap" />
      )}
      <CardBody>
        <CardTitle>{game.name}</CardTitle>
        <CardText>{game.summary}</CardText>
        <CardText>{game.storyline}</CardText>

        <Button>add this game to your favorites!</Button>
      </CardBody>
    </Card>
  </div>
);

export default ChosenGame;

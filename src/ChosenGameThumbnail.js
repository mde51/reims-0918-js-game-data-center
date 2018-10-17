import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const changeCoverSize = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_1080p";
  return urlToArray.join("/");
};

const GameThumbnail = ({ name, cover, summary, storyline }) => (
  <div>
    <Card>
      {cover && (
        <CardImg src={changeCoverSize(cover.url)} alt="Card image cap" />
      )}
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{summary}</CardText>
        <CardText>{storyline}</CardText>
      </CardBody>
    </Card>
  </div>
);

export default GameThumbnail;

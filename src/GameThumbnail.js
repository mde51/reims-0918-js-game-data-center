import React from "react";
import { Card, CardImg, CardBody, CardTitle, } from "reactstrap";

const changeCoverSize = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_1080p";
  return urlToArray.join("/");
};

const GameThumbnail = ({ name, cover, summary, storyline, selectGame }) => (
  <div>
    <Card
      onClick={() =>
        selectGame({
          name: name,
          cover: cover,
          summary: summary,
          storyline: storyline
        })
      }
    >
      {cover && (
        <CardImg src={changeCoverSize(cover.url)} alt="Card image cap" />
      )}
      <CardBody>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </Card>
  </div>
);

export default GameThumbnail;

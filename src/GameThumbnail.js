import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const changeCoverSide = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_720p";
  return urlToArray.join("/");
};

const GameThumbnail = ({ name, cover }) => (
  <div>
    {cover ? (
      <Card>
        <CardImg src={changeCoverSide(cover.url)} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
      </Card>
    ) : (
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
      </Card>
    )}
  </div>
);

export default GameThumbnail;

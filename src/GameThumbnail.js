import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const changeCoverSide = (cover) => {
  
}

const GameThumbnail = ({ name, cover }) => (
  <div>
    <Card>
      <CardImg src={cover.url} alt="Card image cap" />
      <p>({cover.url})</p>
      <CardBody>
        <CardTitle>{name}</CardTitle>
      </CardBody>
    </Card>
  </div>
);

export default GameThumbnail;

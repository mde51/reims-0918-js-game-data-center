import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const changeCoverSize = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_720p";
  return urlToArray.join("/");
};

const GameThumbnail = ({ name, cover, selectGame, summary }) => (
  <div>
    
      <Card onClick={() => selectGame({name: name, cover: cover})}>
      {cover && ( <CardImg src={changeCoverSize(cover.url)} alt="Card image cap" />)}
        <CardBody>
          <CardTitle>{name}</CardTitle> 
          <CardText>{summary}</CardText>     
        </CardBody>
      </Card>
  </div>
);

export default GameThumbnail;

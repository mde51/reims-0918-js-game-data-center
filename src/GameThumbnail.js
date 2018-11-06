<<<<<<< HEAD
import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
  
  const GameThumbnail = () => (
      <div>
        <Card>
          <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Game title</CardTitle>
          </CardBody>
        </Card>
      </div>
  );
=======
import React from "react";
import { Card, CardImg, CardBody, CardTitle, } from "reactstrap";
>>>>>>> 4407859f642e0ed01cbe6dc2fd95a99d7b4d4a25

const changeCoverSize = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_1080p";
  return urlToArray.join("/");
};

const GameThumbnail = ({ name, cover, summary, storyline, id, selectGame }) => (
  <div>
    <Card
      onClick={() =>
        selectGame({
          name: name,
          cover: cover,
          summary: summary,
          storyline: storyline,
          id: id
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

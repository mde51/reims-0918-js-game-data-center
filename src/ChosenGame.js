import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

const changeCoverSize = cover => {
  const urlToArray = cover.split("/");
  urlToArray[6] = "t_1080p";
  return urlToArray.join("/");
};

const ChosenGame = ({ game, onAddToFav }) => (
  <div>
    <Card className="chosengame">
      <Row>
        <Col col="6">
          {game.cover && (
            <CardImg
              src={changeCoverSize(game.cover.url)}
              alt="Card image cap"
            />
          )}
        </Col>
        <Col col="6">
          <CardBody>
            <CardTitle>{game.name}</CardTitle>
            <CardText>{game.summary}</CardText>
            <a href="#table">
              <Button color="primary" className="mt-5">
                Begin a tournament with this game !
              </Button>
            </a>
            <Button
              color="primary"
              className="mt-5"
              onClick={() => onAddToFav(game)}
            >
              Add this game to your favorites !{" "}
              <img
                src={require("./Favicon.png")}
                alt="favorite"
                height="25px"
                className="favicon"
              />
            </Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  </div>
);

export default ChosenGame;

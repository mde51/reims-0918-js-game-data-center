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

const ChosenGame = ({ game }) => (
  <div>
    <Card className="mt-5">
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
            <Button color="primary">add this game to your favorites!</Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  </div>
);

export default ChosenGame;

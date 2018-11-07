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

const ChosenGame = ({ game, onAddToFav, disabledFav }) => (
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
            <Row>
              <Col>
                <Button
                  disabled={disabledFav}
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
              </Col>
            </Row>
            <Row className="mb-5">
              <Col>
                <a href="#table">
                  <Button color="primary" className="mt-5">
                    Begin a tournament with this game !
                  </Button>
                </a>
              </Col>
            </Row>
            <CardTitle>{game.name}</CardTitle>
            <CardText>{game.summary}</CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  </div>
);

export default ChosenGame;

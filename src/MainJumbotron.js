import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const MainJumbotron = ({ handleDisplayFavs, favs, gamesList }) => {
  return (
    <Jumbotron className="mt-1">
      <Container>
        <section>
          <img src={require("./Logo.png")} alt="" />
        </section>
        {gamesList && (
          <Row>
            <h2 className="textjumb">
              Welcome, challengers ! Please select the game you will be playing.
            </h2>
          </Row>
        )}
        <Row>
          <Col>
            <Button
              disabled={favs.length === 0}
              color="primary"
              onClick={handleDisplayFavs}
            >
              Favorites
              <img
                alt="favorite"
                src={require("./Favicon.png")}
                height="22px"
                className="favicon"
              />
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MainJumbotron;

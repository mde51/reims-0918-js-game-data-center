import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const GameMenu = ({ handleNewRound, handleEndGame }) => (
  <div>
    <Container>
      <Row>
        <Col>
          <h2>
            Time to shine ! Add your scores in front of your names and submit
            them.
          </h2>
          <h3>
            If you need to fight again, click on "next round". If you are done
            and the game is over, click on "End game" and see who is the best !
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={handleNewRound}>
            Next round
          </Button>
        </Col>
        <Col>
          <Button color="primary" onClick={handleEndGame}>
            End game
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default GameMenu;

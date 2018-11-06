import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const GameMenu = ({ handleNewRound, handleEndGame }) => (
  <div>
    <Container>
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

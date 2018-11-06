import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const MainJumbotron = ({ handleDisplayFavs }) => {
  return (
    <Jumbotron className="mt-1">
      <Container>
<<<<<<< HEAD
        <Row><h1 className="display-3">GAME DATA CENTER</h1></Row>
=======
        <section>
          <img src={require("./Logo.png")} alt="" />
        </section>
>>>>>>> 4407859f642e0ed01cbe6dc2fd95a99d7b4d4a25
        <Row>
          <Col>
            <Button color="primary">Recently played</Button>
          </Col>
          <Col>
            <Button color="primary" onClick={handleDisplayFavs}>
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

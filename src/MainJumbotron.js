import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const MainJumbotron = ({handleDisplayFavs}) => {
  return (
    <Jumbotron className="mt-4" className="opacity">
      <Container >
        <section><img src={require('./Logo.png')}/></section>
        <Row>
          <Col>
            <Button color="primary">Recently played</Button>
          </Col>
          <Col>
            <Button color="primary" onClick={handleDisplayFavs}>Favorites</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};


export default MainJumbotron;

import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const MainJumbotron = () => {
  return (
    <Jumbotron className="mt-4 opacity">
      <Container >
        <section><img src={require('./Logo.png')} alt="logo"/></section>
        <Row>
          <Col>
            <Button color="primary">Recently played</Button>
          </Col>
          <Col>
            <Button color="primary">Favorites</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};


export default MainJumbotron;

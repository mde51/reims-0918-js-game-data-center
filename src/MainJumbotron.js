import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const MainJumbotron = ({ handleDisplayFavs }) => {
  return (
    <Jumbotron className="mt-1">
      <Container>
        <section>
          <img src={require("./Logo.png")} alt="" />
        </section>
        <Row>
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

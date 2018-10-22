import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Button color="primary">Next round</Button>{" "}
            </Col>
            <Col>
              <Button color="primary">New game</Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import React from "react";
import {
  InputGroup,
  Container,
  Row,
  Col,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <InputGroup>
          <Container>
            <Row>
              <Col>
                <InputGroupAddon addonType="prepend" />
                <Input />
              </Col>
              <Col>
                <Button>I'm a button</Button>
              </Col>
            </Row>
          </Container>
        </InputGroup>
        <br />
      </div>
    );
  }
}

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
                <Input
                  type="username"
                  name="addUserName"
                  id="idUserName"
                  placeholder="Write your username here !"
                />
              </Col>
              <Col>
                <InputGroupAddon addonType="prepend">
                  <Button>Accept</Button>
                </InputGroupAddon>
              </Col>
              <Col>
                <Button>add this game to your favorites!</Button>
              </Col>
            </Row>
          </Container>
        </InputGroup>
        <br />
      </div>
    );
  }
}

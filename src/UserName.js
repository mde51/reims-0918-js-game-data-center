import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

export default class UserName extends React.Component {
  render() {
    return (
      <div>
        <InputGroup>
          <Input
            type="text"
            name="addUserName"
            id="idUserName"
            placeholder="Write your username here !"
          />
          <InputGroupAddon addonType="prepend">
            <Button>Accept</Button>
          </InputGroupAddon>
        </InputGroup>
        <br />
      </div>
    );
  }
}

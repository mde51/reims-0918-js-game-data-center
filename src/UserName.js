import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

class UserName extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ player: event.target.value });
  }
  render() {
    const { player } = this.props;
    return (
      <div>
        <InputGroup>
          <Input
            type="username"
            name="addUserName"
            id="idUserName"
            placeholder="Write your username here !"
            value={player}
            onChange={this.handleChange.bind(this)}
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

export default UserName;

import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
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
            value={player}
            onChange={this.onChange}
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

export default UserName;
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

export default class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <InputGroup>
          <Input
            type="username"
            value={this.state.value}
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

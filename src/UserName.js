import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

class UserName extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {
    //   value: ''
    // }
    // this.onChange = this.onChange.bind(this)
  }

  // onChange(event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  // }

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
            // value={this.state.value}
            value={this.value}
            onChange={this.onChange}
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

import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const UserName = ({ handleChange, submit }) => (
  <div>
    <InputGroup>
      <Input
        type="username"
        name="addUserName"
        id="idUserName"
        placeholder="Write your username here !"
        onChange={handleChange}
      />
      <InputGroupAddon addonType="prepend">
        <Button onClick={submit}>Add Player</Button>
      </InputGroupAddon>
    </InputGroup>
    <br />
  </div>
);

export default UserName;

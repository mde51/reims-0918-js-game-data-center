import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const UserName = ({ handleChange, submitNewPlayers }) => (
  <div>
    <InputGroup>
      <Input
        maxlength="10"
        type="username"
        name="addUserName"
        id="idUserName"
        placeholder="Write your username here !"
        onChange={handleChange}
      />
      <InputGroupAddon addonType="prepend">
        <Button color="primary" onClick={submitNewPlayers}>
          Add Player
        </Button>
      </InputGroupAddon>
    </InputGroup>
    <br />
  </div>
);

export default UserName;

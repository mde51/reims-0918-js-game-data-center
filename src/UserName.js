import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const UserName = ({ test, handleAddPlayerChange, newPlayer }) => (
  <div>
    <InputGroup>
      <Input
        type="username"
        name="addUserName"
        id="idUserName"
        placeholder="Write your username here !"
        value={newPlayer}
        onChange={handleAddPlayerChange}
      />
      <InputGroupAddon addonType="prepend">
        <Button onClick={() => test({newPlayer: newPlayer})}>
          Add Player
        </Button>
      </InputGroupAddon>
    </InputGroup>
    <br />
  </div>
);
export default UserName;

import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const UserName = ({ value, onChange, addPlayer, name }) => (
  <div>
    <InputGroup>
      <Input
        type="username"
        name="addUserName"
        id="idUserName"
        placeholder="Write your username here !"
        value={value}
        onChange={onChange}
      />
      <InputGroupAddon addonType="prepend">
        <Button
          onClick={() =>
            addPlayer({
              name: name,
            })
          }
        >
          Add Player
        </Button>
      </InputGroupAddon>
    </InputGroup>
    <br />
  </div>
);
export default UserName;

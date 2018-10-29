import React from "react";
import { Input, Button } from "reactstrap";

const UserName = ({ handleChange, submitNewPlayers }) => (
  <div>
      <Input
        width="30px"
        className="inputname"
        maxLength="10"
        type="username"
        name="addUserName"
        id="idUserName"
        placeholder="Write your username here !"
        onChange={handleChange}
      />
        <Button color="primary" className="addplayerbutton" onClick={submitNewPlayers}>
          Add Player
        </Button>
    <br />
  </div>
);

export default UserName;

import React from "react";
import { Input, Button } from "reactstrap";

const UserName = ({ tempPlayer, handleChange, submitNewPlayers }) => (
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
        value={tempPlayer}
      />
        <Button color="primary" className="addplayerbutton" onClick={submitNewPlayers}>
          Confirm
        </Button>
    <br />
  </div>
);

export default UserName;

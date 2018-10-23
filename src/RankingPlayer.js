import React from "react";
import { Button, Input } from "reactstrap";

const RankingPlayer = ({ handleChange, name, score, submit }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{score} <Input type="" className="inputscore" onChange={(event) => handleChange(name, event.target.value)}/><Button onClick={submit}>Add Score</Button></td>
    </tr>
  );
};

export default RankingPlayer;

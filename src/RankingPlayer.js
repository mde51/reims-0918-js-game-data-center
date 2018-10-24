import React from "react";
import { Button, Input } from "reactstrap";

const RankingPlayer = ({ handleChange, name, inputScore, i, handleScoreChange, finalScore}) => {
  return (
    <tr>
      <th>{i=i+1}</th>
      <td>{name}</td>
      <td>
        {inputScore > 0 ? inputScore : 0}{" "}
        <Input
          maxlength="5"
          type=""
          className="inputscore"
          placeholder="Write your score"
          onChange={event => handleChange(name, event.target.value)}
        />
        <Button onClick={event => handleScoreChange(inputScore, event.target.value)}>Add Score</Button>
      </td>
      <td>{finalScore}</td>
    </tr>
  );
};

export default RankingPlayer;

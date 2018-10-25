import React from "react";
import { Button, Input } from "reactstrap";

const RankingPlayer = ({ handleInputScoreChange, name, i, handleFinalScorePlayer, finalScore}) => {
  return (
    <tr>
      <th>{i=i+1}</th>
      <td>{name}</td>
      <td>
        <Input
          maxlength="5"
          type=""
          className="inputscore"
          placeholder="Write your score"
          onChange={event => handleInputScoreChange(name, event.target.value)}
        />
        <Button onClick={event => handleFinalScorePlayer(name)}>Add Score</Button>
      </td>
      <td>{finalScore}</td>
    </tr>
  );
};

export default RankingPlayer;

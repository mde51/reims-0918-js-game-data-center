import React from "react";
import { Button, Input } from "reactstrap";

const RankingPlayer = ({ handleInputScoreChange, name, rank, handleFinalScorePlayer, finalScore}) => {
  return (
    <tr>
      <th className="font">{rank+1}</th>
      <td className="font text-capitalize">{name}</td>
      <td width="500px">
        <Input
          width="30px"
          maxlength="5"
          type=""
          className="inputscore"
          placeholder="Write your score"
          onChange={event => handleInputScoreChange(name, event.target.value)}
        />
        <Button color="primary" onClick={event => handleFinalScorePlayer(name)}>Add Score</Button>
      </td>
      <td className="font">{finalScore}</td>
    </tr>
  );
};

export default RankingPlayer;

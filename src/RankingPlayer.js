import React from "react";
import { Button, Input } from "reactstrap";

const RankingPlayer = ({
  gameStarted,
  handleInputScoreChange,
  name,
  inputScore,
  rank,
  submitFinalScorePlayer,
  finalScore
}) => {
  return (
    <tr>
      <th className="font">{rank + 1}</th>
      <td className="font text-capitalize">{name}</td>
      {gameStarted && (
        <td width="500px">
          <Input
            width="30px"
            maxLength="5"
            type=""
            className="inputscore"
            placeholder="Write your score"
            onChange={event => handleInputScoreChange(name, event.target.value)}
            value={inputScore}
          />
          <Button color="primary" onClick={() => submitFinalScorePlayer(name)}>
            Add Score
          </Button>
        </td>
      )}
      {gameStarted && <td className="font">{finalScore}</td>}
    </tr>
  );
};

export default RankingPlayer;

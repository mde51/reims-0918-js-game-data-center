import React from "react";

const RankingPlayer = ({ name, score }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default RankingPlayer;

import React from "react";
import { Table } from "reactstrap";

const OneRound = ({ round }) => (
  <Table dark>
    <thead>
      <tr>
        <th>name</th>
        <th>score</th>
      </tr>
    </thead>
    {round.map((player, indexPlayer) => (
      <tbody key={indexPlayer}>
        <tr>
          <td>{player.name}</td>
          <td>{player.score}</td>
        </tr>
      </tbody>
    ))}
  </Table>
);

export default OneRound;

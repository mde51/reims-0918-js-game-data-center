import React from "react";
import { Table } from "reactstrap";

const OneRound = ({ round }) => (
  <Table>
  <table className="table table-striped">
    <thead className="tableauRound">
      <tr>
        <th>name</th>
        <th>score</th>
      </tr>
    </thead>
    {round.map((player, indexPlayer) => (
      <tbody key={indexPlayer} className="table-striped" >
        <tr>
          <td>{player.name}</td>
          <td>{player.score}</td>
        </tr>
      </tbody>
    ))}
    </table>
  </Table>
);

export default OneRound;

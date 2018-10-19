import React from "react";
import RankingPlayer from "./RankingPlayer";
import { Table } from "reactstrap";

const PlayersList = ({ list }) => (
  <section className="mt-4">
    <Table bordered className="tableau">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {list.map(player => (
          <RankingPlayer {...player} />
        ))}
      </tbody>
    </Table>
  </section>
);

export default PlayersList;

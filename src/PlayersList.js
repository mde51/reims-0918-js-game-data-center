import React from "react";
import RankingTable from "./RankingTable";
import { Table } from "reactstrap";

const PlayersList = ({ list, players }) => (
  <section className="mt-4">
    <Table bordered className="tableau">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
    </Table>
    {list.map(player => (
      <RankingTable {...player} players={players} />
    ))}
    ;
  </section>
);

export default PlayersList;

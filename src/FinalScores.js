import React from "react";
import FinalRank from "./FinalRank";
import { Table } from "reactstrap";

const FinalScores = ({ list }) => (
  <section className="mt-4">
    <Table bordered className="tableau">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {list.map((player, index) => (
          <FinalRank {...player} i={index} />
        ))}
      </tbody>
    </Table>
  </section>
);

export default FinalScores;

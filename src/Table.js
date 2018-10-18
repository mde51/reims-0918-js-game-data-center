import React from "react";
import { Table } from "reactstrap";

const RankingTable = ({ Players }) => {
  return (
    <div>
      <Table bordered className="tableau">
        <thead>
          <tr>
            <th />
            <th>Rank</th>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>1</td>
            <td>z</td>
            <td>14</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RankingTable;

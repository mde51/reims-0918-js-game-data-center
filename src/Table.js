import React from 'react';
import { Table } from 'reactstrap';

const rankingTable = ({ value, onChange }) => {
    return (
      <div>
      <Table bordered className="tableau">
        <thead>
          <tr>
            <th>
            </th>
            <th>Rank</th>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>1</td>
            <td>Teoxane</td>
            <td>14</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>2</td>
            <td>Sheoo</td>
            <td>12</td>
          </tr>
        </tbody>
      </Table>
    </div>
    );
  }

  export default rankingTable

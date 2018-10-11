import React from 'react';
import { Table } from 'reactstrap';

export default class Rank extends React.Component {
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
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
        </tbody>
      </Table>
    );
  }
}

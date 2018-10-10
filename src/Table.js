import React from 'react';
import { Table } from 'reactstrap';

export default class Table extends React.Component {
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
          <tr>
            <th scope="row">#</th>
            <td>2</td>
            <td>Sheoo</td>
            <td>12</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>3</td>
            <td>Kawacke</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>4</td>
            <td>Takouh</td>
            <td>8</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>5</td>
            <td>oO_Dragon_killer_Oo</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>6</td>
            <td>Woinic</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>7</td>
            <td>Kikoodu08</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>8</td>
            <td>xXx-Dark-Sasuke-75xXx</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

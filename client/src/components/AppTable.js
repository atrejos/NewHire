import React from 'react';
import { Table, Button } from 'reactstrap';
import AppButtonDrop from './AppButtonDrop';

const AppTable = (props) => {
  return (
    <Table hover striped responsive size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Supervisor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>asdf</td>
          <td>qwer</td>{/*Will make status either a progress bar or display a x/total ratio*/}
          <td>< AppButtonDrop /></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@t</td>
          <td>asdf</td>
          <td>qwer</td>
          <td>< AppButtonDrop /></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Jon</td>
          <td>lmnop</td>
          <td>@tw</td>
          <td>asdf</td>
          <td>asdf</td>
          <td>< AppButtonDrop /></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Greg</td>
          <td>fghfgh</td>
          <td>@gfnj</td>
          <td>adsf</td>
          <td>qwer</td>
          <td>< AppButtonDrop /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default AppTable;
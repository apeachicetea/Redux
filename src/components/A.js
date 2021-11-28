import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function A(props){
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Name</th>
            <th>Quan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{ props.state[0].id }</td>
            <td>{ props.state[0].name }</td>
            <td>{ props.state[0].quan }</td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}


function 함수명(state){
  return {
    state: state
  }
}


export default connect(함수명)(A);

import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

function A(props){

  let state = useSelector((state) => state)
  console.log(state);
  let dispatch = useDispatch()

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Name</th>
            <th>Quan</th>
            <th>Set</th>
          </tr>
        </thead>
        <tbody>
            {
              state.reducer.map((el, i)=>{
                return(
                  <tr key={ i }>
                    <td>{ i }</td>
                    <td>{ el.id }</td>
                    <td>{ el.name }</td>
                    <td>{ el.quan }</td>
                    <td>
                      <button onClick={ ()=>{ dispatch({ type: 'plus', payload: {name: 'kim'} }) } }>+</button>
                      <button onClick={ ()=>{ dispatch({ type: 'minus' }) } }>-</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </Table>
    
      {
        props.alert
        ? (
          <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
            <button onClick={()=>{ dispatch({ type: 'close' }) }}>닫기</button>
          </div> 
        )
        : null
      }

      <button onClick={()=>{ dispatch({ type: 'add', payload: { id: 5, name: 'jeonju', quan: 23 } }) }}>
        항목추가
      </button>
    </div>
  )
}


// function 함수명(state){
//   console.log(state);
//   return {
//     state: state.reducer,
//     alert: state.reducer2
//   }
// }


// export default connect(함수명)(A);
export default A;

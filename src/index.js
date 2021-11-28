import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let initialValue = [
  { id: 0, name: 'jeju', quan: 2 },
  { id: 1, name: 'gimpo', quan: 5 },
  { id: 2, name: 'seoul', quan: 7 },
  { id: 3, name: 'busan', quan: 1 },
  { id: 4, name: 'deagu', quan: 12 }
]

function reducer(state = initialValue, action) {
  console.log(action);
  console.log(action.payload);
  let copyValue = [...initialValue];
  if(action.type === 'add'){
    copyValue.push(action.payload)
    return copyValue;
  }
  // else if(action.type === 'delete'){
  //   copyValue.pop();
  //   return copyValue;
  // }
  else if(action.type === 'plus'){
    if(copyValue[0].quan !== 10) {
      copyValue[0].quan++;
      return copyValue;
    } 
    else if(copyValue[0].quan === 10) {
      copyValue[0].quan = 10
      return copyValue;
    }
  }
  else if(action.type === 'minus'){
    if(copyValue[0].quan !== 0) {
      copyValue[0].quan--;
      return copyValue;
    } 
    else if(copyValue[0].quan === 0) {
      copyValue[0].quan = 0
      return copyValue;
    }  
  }
  else {
    return state;
  }
}

let alertInitial = true;

function reducer2(state=alertInitial, action){
  if(action.type === 'close'){
    state = false
    return state;
  }
  else {
    return state;
  }
}


let store = createStore(combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);


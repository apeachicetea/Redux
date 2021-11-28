import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
let store = createStore(()=>{ return [{ id: 0, name: 'jeju', quan: 2 }] });


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);


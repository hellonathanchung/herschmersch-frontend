import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {likeReducer} from './reducers'
import { BrowserRouter as Router} from 'react-router-dom';




ReactDOM.render(
<Provider store={createStore(likeReducer)}>
  <Router>
    <App />
  </Router>
</Provider>,
  document.getElementById('root')
);


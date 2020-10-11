import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import { BrowserRouter as Router} from 'react-router-dom';
import store from './store'




ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
  document.getElementById('root')
);


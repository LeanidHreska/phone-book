import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import 'font-awesome/css/font-awesome.min.css';

import ProvideData from './components/ProvideData';


import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store } >
    <div>
      <header className={ styles.header }>phoneBook</header>
      <Router history={ browserHistory } >
        <Route path="/" component={ ProvideData } >
          <Route path="editContact" exact  />
          <Route path="addContact" exact  />
        </Route>
      </Router>
    </div>
  </Provider>, 
  document.getElementById('root'));



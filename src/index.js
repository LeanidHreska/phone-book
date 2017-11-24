import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import ProvideData from './components/ProvideData';

import { Router, Route, browserHistory } from 'react-router';

import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <div>
    <header className={ styles.header }>phoneBook</header>
    <Router history={ browserHistory } >
      <Route path="/" component={ ProvideData } />
    </Router>
  </div>, 
  document.getElementById('root'));

